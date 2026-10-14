import os
from PIL import Image, ImageEnhance, ImageFilter
import numpy as np

src_path = 'public/images/clients/trivanz_official.png'
im = Image.open(src_path).convert('RGBA')
arr = np.array(im)
r, g, b, a = arr[:,:,0], arr[:,:,1], arr[:,:,2], arr[:,:,3]
w, h = im.size

# Color mask (flame and pan bowl)
color_mask = (a > 30) & ~((r < 60) & (g < 60) & (b < 60))
# Black mask (text + handle)
black_mask = (a > 30) & (r < 60) & (g < 60) & (b < 60)

# 1. Clean Flame
flame_arr = np.zeros_like(arr)
flame_m = color_mask & (np.arange(h)[:, None] < 1300)
flame_arr[flame_m] = arr[flame_m]
flame_img = Image.fromarray(flame_arr).crop(Image.fromarray(flame_arr).getbbox())

# 2. Clean Trivanz text
trivanz_arr = np.zeros_like(arr)
trivanz_m = black_mask & (np.arange(h)[:, None] >= 1000) & (np.arange(h)[:, None] < 1620)
trivanz_arr[trivanz_m] = arr[trivanz_m]
trivanz_img = Image.fromarray(trivanz_arr).crop(Image.fromarray(trivanz_arr).getbbox())

# 3. Clean Food Court text
fc_arr = np.zeros_like(arr)
fc_m = black_mask & (np.arange(h)[:, None] >= 1620) & (np.arange(h)[:, None] < 1850) & (np.arange(w)[None, :] < 2300)
fc_arr[fc_m] = arr[fc_m]
fc_img = Image.fromarray(fc_arr).crop(Image.fromarray(fc_arr).getbbox())

# 4. Clean Pan & Handle
pan_arr = np.zeros_like(arr)
pan_m = (color_mask & (np.arange(h)[:, None] >= 1800)) | (black_mask & (np.arange(h)[:, None] >= 1600) & (np.arange(w)[None, :] >= 2300))
pan_arr[pan_m] = arr[pan_m]
pan_img = Image.fromarray(pan_arr).crop(Image.fromarray(pan_arr).getbbox())

# Embolden text slightly so it remains solid and legible at small sizes
def embolden(img, size=3):
    r_ch, g_ch, b_ch, a_ch = img.split()
    a_b = a_ch.filter(ImageFilter.MaxFilter(size))
    # Fill solid black
    black = Image.new('L', img.size, 0)
    return Image.merge('RGBA', (black, black, black, a_b))

# Target layout: Balanced horizontal proportions
target_w = 3200
target_h = 1600
canvas = Image.new('RGBA', (target_w, target_h), (0, 0, 0, 0))

# Trivanz text: scale to 2500 width
tw = 2500
th = int(trivanz_img.size[1] * (tw / trivanz_img.size[0]))
t_scaled = trivanz_img.resize((tw, th), Image.Resampling.LANCZOS)
t_bold = embolden(t_scaled, size=3)

# Food Court: scale to 1550 width
fcw = 1550
fch = int(fc_img.size[1] * (fcw / fc_img.size[0]))
fc_scaled = fc_img.resize((fcw, fch), Image.Resampling.LANCZOS)
fc_bold = embolden(fc_scaled, size=3)

# Flame: scale to 1600 width
fw = 1600
fh = int(flame_img.size[1] * (fw / flame_img.size[0]))
f_scaled = flame_img.resize((fw, fh), Image.Resampling.LANCZOS)

# Pan & handle: scale to 2600 width
pw = 2600
ph = int(pan_img.size[1] * (pw / pan_img.size[0]))
p_scaled = pan_img.resize((pw, ph), Image.Resampling.LANCZOS)

# Positioning:
# Let center of gravity be x = 1400 (handle sticks out on right to ~2700)
center_x = 1350

# 1. Flame at top:
fx = center_x - fw // 2
fy = 20
canvas.paste(f_scaled, (fx, fy), f_scaled)

# 2. Trivanz wordmark: sits directly below flame apex
tx = center_x - tw // 2
ty = fy + fh - 260
canvas.paste(t_bold, (tx, ty), t_bold)

# 3. Food Court:
fcx = center_x - fcw // 2 + 10
fcy = ty + th + 25
canvas.paste(fc_bold, (fcx, fcy), fc_bold)

# 4. Pan & handle: sits comfortably below Food Court
px = center_x - pw // 2 + 160
py = fcy + fch - 60
canvas.paste(p_scaled, (px, py), p_scaled)

# Tight crop
bbox = canvas.getbbox()
final = canvas.crop(bbox)

# Add clean margin
pad = 30
padded = Image.new('RGBA', (final.size[0] + pad*2, final.size[1] + pad*2), (0, 0, 0, 0))
padded.paste(final, (pad, pad))

out_path = 'public/images/clients/trivanz_marquee.png'
padded.save(out_path, 'PNG')
padded.save('public/images/clients/trivanz_clean_hires.png', 'PNG')
print(f'Successfully saved optimized Trivanz to {out_path} ({padded.size})')

# Generate test thumbnails at 54px and 70px
scale54 = 54.0 / padded.size[1]
w54 = int(padded.size[0] * scale54)
t54 = padded.resize((w54, 54), Image.Resampling.LANCZOS)
t54.save('public/images/clients/trivanz_test_54px.png', 'PNG')

scale70 = 70.0 / padded.size[1]
w70 = int(padded.size[0] * scale70)
t70 = padded.resize((w70, 70), Image.Resampling.LANCZOS)
t70.save('public/images/clients/trivanz_test_70px.png', 'PNG')
print(f'Thumbnails saved: 54px={t54.size}, 70px={t70.size}')
