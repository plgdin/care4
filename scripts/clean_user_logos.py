import cv2
import numpy as np
from PIL import Image

USER_DIR = r'C:\Users\user\.gemini\antigravity-ide\brain\3137dfab-3258-4311-b501-1a5302d1cd49\.user_uploaded'

# 1. 3M
def process_3m():
    im = Image.open(f'{USER_DIR}/media_1791967377283.png').convert('RGB')
    arr = np.array(im, dtype=np.float32)
    r, g, b = arr[:,:,0], arr[:,:,1], arr[:,:,2]
    max_c = np.maximum(np.maximum(r, g), b)
    min_c = np.minimum(np.minimum(r, g), b)
    sat = max_c - min_c

    alpha = np.clip((sat - 10) / 60.0, 0.0, 1.0)
    out = np.zeros((arr.shape[0], arr.shape[1], 4), dtype=np.uint8)
    out[:, :, 0] = 186
    out[:, :, 1] = 12
    out[:, :, 2] = 47
    out[:, :, 3] = (alpha * 255).astype(np.uint8)

    res = Image.fromarray(out, 'RGBA')
    bbox = res.getbbox()
    res = res.crop(bbox)
    res.save('public/images/3m_logo_clean.png')
    print('3M done:', res.size)

# 2. Betco
def process_betco():
    im = Image.open(f'{USER_DIR}/media_1791967402148.png').convert('RGB')
    arr = np.array(im, dtype=np.float32)
    r, g, b = arr[:,:,0], arr[:,:,1], arr[:,:,2]
    diff = b - np.maximum(r, g * 0.85)

    alpha = np.clip((diff - 8) / 40.0, 0.0, 1.0)
    out = np.zeros((arr.shape[0], arr.shape[1], 4), dtype=np.uint8)
    out[:, :, 0] = 0
    out[:, :, 1] = 82
    out[:, :, 2] = 155
    out[:, :, 3] = (alpha * 255).astype(np.uint8)

    res = Image.fromarray(out, 'RGBA')
    bbox = res.getbbox()
    res = res.crop(bbox)
    res.save('public/images/betco_logo_clean.png')
    print('Betco done:', res.size)

# 3. Dinewell
def process_dinewell():
    im = Image.open(f'{USER_DIR}/media_1791967444392.png').convert('RGB')
    arr = np.array(im, dtype=np.float32)
    r, g, b = arr[:,:,0], arr[:,:,1], arr[:,:,2]
    diff = b - np.maximum(r, g * 0.85)

    alpha = np.clip((diff - 8) / 35.0, 0.0, 1.0)
    out = np.zeros((arr.shape[0], arr.shape[1], 4), dtype=np.uint8)
    out[:, :, 0] = 0
    out[:, :, 1] = 43
    out[:, :, 2] = 135
    out[:, :, 3] = (alpha * 255).astype(np.uint8)

    res = Image.fromarray(out, 'RGBA')
    bbox = res.getbbox()
    res = res.crop(bbox)
    res.save('public/images/dinewell_logo_clean.png')
    print('Dinewell done:', res.size)

# 4. CONTA
def process_conta():
    im = Image.open(f'{USER_DIR}/media_1791967531242.png').convert('RGB')
    arr = np.array(im, dtype=np.float32)
    r, g, b = arr[:,:,0], arr[:,:,1], arr[:,:,2]
    diff = b - np.maximum(r, g * 0.85)

    alpha = np.clip((diff - 8) / 35.0, 0.0, 1.0)
    out = np.zeros((arr.shape[0], arr.shape[1], 4), dtype=np.uint8)
    out[:, :, 0] = 0
    out[:, :, 1] = 56
    out[:, :, 2] = 130
    out[:, :, 3] = (alpha * 255).astype(np.uint8)

    res = Image.fromarray(out, 'RGBA')
    bbox = res.getbbox()
    res = res.crop(bbox)
    res.save('public/images/conta_logo_clean.png')
    print('CONTA done:', res.size)

# 5. Rubbermaid
def process_rubbermaid():
    im = Image.open(f'{USER_DIR}/media_1791967300515.png').convert('RGB')
    arr = np.array(im)
    h, w, _ = arr.shape

    # Find the badge boundary by flood-filling outside checkerboard
    r, g, b = arr[:,:,0].astype(np.int32), arr[:,:,1].astype(np.int32), arr[:,:,2].astype(np.int32)
    is_checker = (r > 180) & (g > 180) & (b > 180) & (np.abs(r-g) < 10) & (np.abs(g-b) < 10)

    # Flood fill from the 4 corners
    mask = is_checker.astype(np.uint8) * 255
    flood = mask.copy()
    cv2.floodFill(flood, None, (0, 0), 128)
    cv2.floodFill(flood, None, (w-1, 0), 128)
    cv2.floodFill(flood, None, (0, h-1), 128)
    cv2.floodFill(flood, None, (w-1, h-1), 128)

    outside = (flood == 128)
    
    # Also remove any non-badge pixels outside x in [60, 960] or y in [25, 455]
    outside[:, :65] = True
    outside[:, 960:] = True
    outside[:25, :] = True
    outside[455:, :] = True

    # Inside is ~outside
    inside = (~outside).astype(np.float32)
    inside_smooth = cv2.GaussianBlur(inside, (3, 3), 0.7)

    out = np.zeros((h, w, 4), dtype=np.uint8)
    out[:, :, :3] = arr
    out[:, :, 3] = (np.clip(inside_smooth, 0, 1) * 255).astype(np.uint8)

    res = Image.fromarray(out, 'RGBA')
    bbox = res.getbbox()
    res = res.crop(bbox)
    res.save('public/images/rubbermaid_logo_clean.png')
    print('Rubbermaid done:', res.size)

process_3m()
process_betco()
process_dinewell()
process_conta()
process_rubbermaid()
