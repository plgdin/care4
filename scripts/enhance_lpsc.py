import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

base_path = 'public/images/clients/lpsc_clean.png'
im = Image.open(base_path).convert('RGBA')

size = 1200
cx, cy = size // 2, size // 2
radius = 580

canvas = Image.new('RGBA', (size, size), (0, 0, 0, 0))
im_resized = im.resize((size, size), Image.Resampling.LANCZOS)
canvas.paste(im_resized, (0, 0))

# ISRO blue color
isro_blue = (46, 49, 145, 255)

# Clear only the areas where the old text extended:
# Left blue area: x from 100 to 450, y from 560 to 900
c_draw = ImageDraw.Draw(canvas)
c_draw.polygon([(100, 560), (450, 560), (380, 930), (100, 930)], fill=isro_blue)

# Right blue area: Moon is safely above y=540. x from 750 to 1100, y from 550 to 930
c_draw.polygon([(750, 550), (1100, 550), (1100, 930), (820, 930)], fill=isro_blue)

# Clean star accents
def draw_star(draw, x, y, r=16, fill=(255, 255, 255, 255)):
    draw.polygon([
        (x, y - r), (x + r*0.3, y - r*0.3), (x + r, y), 
        (x + r*0.3, y + r*0.3), (x, y + r), (x - r*0.3, y + r*0.3), 
        (x - r, y), (x - r*0.3, y - r*0.3)
    ], fill=fill)

draw_star(c_draw, 145, 530, r=18)
draw_star(c_draw, 1085, 545, r=16)

# Render the metallic nozzle cone cleanly and opaquely from y=400 down to y=930
cone_img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
cone_draw = ImageDraw.Draw(cone_img)

for y in range(400, 930):
    t = (y - 400) / (930 - 400)
    # Bell curve width
    half_w = 60 + (t ** 0.88) * 250
    
    steps = 50
    for s in range(steps):
        st = s / steps
        lx = (600 - half_w) + st * (half_w * 2)
        rx = (600 - half_w) + (st + 1/steps) * (half_w * 2)
        
        norm_x = (st - 0.44) * 2.0
        shade = 1.0 - 0.30 * (norm_x ** 2)
        base_val = 210 - t * 30
        val = int(base_val * shade)
        val = max(130, min(240, val))
        
        # 100% opaque to fully block ghost text
        cone_draw.rectangle([lx, y, rx, y + 1], fill=(val, val + 2, val + 8, 255))

canvas = Image.alpha_composite(canvas, cone_img)

# Nozzle exit ellipse (3D perspective)
rim_draw = ImageDraw.Draw(canvas)
rim_draw.ellipse((310, 895, 890, 955), outline=(235, 240, 250, 255), width=7)
rim_draw.ellipse((318, 900, 882, 950), outline=(130, 135, 148, 220), width=4)

# Typography
font_hindi = ImageFont.truetype('C:/Windows/Fonts/Nirmala.ttc', 106)
font_eng = ImageFont.truetype('C:/Windows/Fonts/ariblk.ttf', 136)

def draw_centered_text(img, pos, text, font, fill, stroke_fill, stroke_w, shadow=(5, 6)):
    d = ImageDraw.Draw(img)
    x, y = pos
    bbox = font.getbbox(text)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    dx = x - tw // 2
    dy = y - th // 2
    sx, sy = shadow
    # Deep shadow
    d.text((dx + sx, dy + sy), text, font=font, fill=(5, 12, 35, 250), stroke_width=stroke_w + 5, stroke_fill=(5, 12, 35, 250))
    # Outline stroke & fill
    d.text((dx, dy), text, font=font, fill=fill, stroke_width=stroke_w, stroke_fill=stroke_fill)

# "एल पी एस सी"
draw_centered_text(
    canvas, 
    pos=(600, 635), 
    text="एल पी एस सी", 
    font=font_hindi, 
    fill=(255, 224, 0, 255),        # Rich gold
    stroke_fill=(12, 24, 65, 255),   # Sharp dark navy outline
    stroke_w=8,
    shadow=(5, 6)
)

# "LPSC"
draw_centered_text(
    canvas, 
    pos=(600, 800), 
    text="LPSC", 
    font=font_eng, 
    fill=(255, 228, 0, 255),        # Luminous brilliant gold
    stroke_fill=(8, 16, 50, 255),    # Heavy dark navy border
    stroke_w=14,
    shadow=(6, 8)
)

# Outer circular border rings
border_draw = ImageDraw.Draw(canvas)
border_draw.ellipse((cx - radius + 20, cy - radius + 20, cx + radius - 20, cy + radius - 20), outline=(245, 248, 255, 255), width=7)
border_draw.ellipse((cx - radius + 2, cy - radius + 2, cx + radius - 2, cy + radius - 2), outline=(15, 30, 85, 255), width=22)

# Supersampled 4x circular mask
mask_hires = Image.new('L', (size * 4, size * 4), 0)
mask_draw = ImageDraw.Draw(mask_hires)
mask_draw.ellipse(((cx - radius) * 4, (cy - radius) * 4, (cx + radius) * 4, (cy + radius) * 4), fill=255)
final_mask = mask_hires.resize((size, size), Image.Resampling.LANCZOS)

final_canvas = Image.new('RGBA', (size, size), (0, 0, 0, 0))
final_canvas.paste(canvas, (0, 0))
final_canvas.putalpha(final_mask)

# Save
final_canvas.save('public/images/clients/lpsc_logo.png', 'PNG')
final_canvas.save('public/images/clients/lpsc_crisp.png', 'PNG')
print('Successfully saved pristine public/images/clients/lpsc_logo.png!')

# Thumbnails
t60 = final_canvas.resize((60, 60), Image.Resampling.LANCZOS)
t60.save('public/images/clients/lpsc_test_60px.png', 'PNG')

t80 = final_canvas.resize((80, 80), Image.Resampling.LANCZOS)
t80.save('public/images/clients/lpsc_test_80px.png', 'PNG')
print('Thumbnails saved!')
