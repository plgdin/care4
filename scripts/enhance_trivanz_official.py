import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np

src_path = 'public/images/clients/trivanz_official.png'
im = Image.open(src_path).convert('RGBA')

# Step 1: Embolden TRIVANZ text fine serifs
arr = np.array(im)
r, g, b, a = arr[:,:,0], arr[:,:,1], arr[:,:,2], arr[:,:,3]

# Black mask for TRIVANZ text only (y < 1640)
trivanz_black = (a > 30) & (r < 60) & (g < 60) & (b < 60) & (np.arange(im.size[1])[:, None] < 1640)

black_alpha = Image.fromarray((trivanz_black * 255).astype(np.uint8))
black_alpha_thick = black_alpha.filter(ImageFilter.MaxFilter(5))
thick_arr = np.array(black_alpha_thick)

thickened = (thick_arr > 50) & ~((r > 80) | (g > 80))
arr[thickened, 0] = 0
arr[thickened, 1] = 0
arr[thickened, 2] = 0
arr[thickened, 3] = np.maximum(arr[thickened, 3], thick_arr[thickened])

# Step 2: Completely erase all old Food Court pixels (x: 600 to 2350, y: 1645 to 1950)
fc_erase = (np.arange(im.size[1])[:, None] >= 1645) & (np.arange(im.size[1])[:, None] <= 1950) & (np.arange(im.size[0])[None, :] >= 600) & (np.arange(im.size[0])[None, :] <= 2350)
# Erase black pixels in this region
fc_erase_black = fc_erase & (arr[:,:,0] < 70) & (arr[:,:,1] < 70) & (arr[:,:,2] < 70)
arr[fc_erase_black] = [0, 0, 0, 0]

im_cleaned = Image.fromarray(arr)

# Step 3: Draw fresh, bold, high-contrast, perfectly spaced "F O O D   C O U R T"
font = ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf', 190)
draw = ImageDraw.Draw(im_cleaned)

fc_text = "FOOD   COURT"
bbox = font.getbbox(fc_text)
tw = bbox[2] - bbox[0]
th = bbox[3] - bbox[1]
tx = 1485 - tw // 2
ty = 1795 - th // 2

# Draw text in deep solid black with slight stroke for weight
draw.text((tx, ty), fc_text, font=font, fill=(0, 0, 0, 255), stroke_width=5, stroke_fill=(0, 0, 0, 255))

# Step 4: Crop tightly to bounding box
final_bbox = im_cleaned.getbbox()
result = im_cleaned.crop(final_bbox)

# Add 20px padding
pad = 20
padded = Image.new('RGBA', (result.size[0] + pad*2, result.size[1] + pad*2), (0, 0, 0, 0))
padded.paste(result, (pad, pad))

out_path = 'public/images/clients/trivanz_clean_hires.png'
padded.save(out_path, 'PNG')
padded.save('public/images/clients/trivanz_marquee.png', 'PNG')
print(f'Successfully saved clean Trivanz logo to {out_path} ({padded.size})')

# Test thumbnails at 60px and 80px
s60 = 60.0 / padded.size[1]
w60 = int(padded.size[0] * s60)
t60 = padded.resize((w60, 60), Image.Resampling.LANCZOS)
t60.save('public/images/clients/trivanz_test_60px.png', 'PNG')

s80 = 80.0 / padded.size[1]
w80 = int(padded.size[0] * s80)
t80 = padded.resize((w80, 80), Image.Resampling.LANCZOS)
t80.save('public/images/clients/trivanz_test_80px.png', 'PNG')
print('Thumbnails saved successfully!')
