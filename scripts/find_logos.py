import urllib.request
import re

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

# 1. udayskykitchen
try:
    req = urllib.request.Request('https://www.udayskykitchen.com', headers=headers)
    with urllib.request.urlopen(req, timeout=10) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        imgs = re.findall(r'src=["\']([^"\']+\.(?:png|jpg|jpeg|webp|svg|pdf))["\']', html, re.I)
        pdfs = re.findall(r'href=["\']([^"\']+\.pdf)["\']', html, re.I)
        print("Uday Sky Kitchen images:", imgs)
        print("Uday Sky Kitchen PDFs:", pdfs)
except Exception as e:
    print("Uday error:", e)

# 3. LPSC
try:
    req = urllib.request.Request('https://www.lpsc.gov.in', headers=headers)
    with urllib.request.urlopen(req, timeout=8) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        imgs = re.findall(r'src=["\']([^"\']+\.(?:png|jpg|jpeg|svg|webp))["\']', html, re.I)
        print("LPSC site images:", imgs[:10])
except Exception as e:
    print("LPSC error:", e)
