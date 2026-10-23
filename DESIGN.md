---
name: Care4 Associates
description: Institutional B2B Hospitality Procurement Design System
colors:
  primary: "#02348d"
  primary-dark: "#012463"
  accent-red: "#d91b2a"
  accent-red-hover: "#b91c1c"
  navy-dark: "#0c1624"
  navy-deep: "#08101d"
  text-ink: "#0f1c2d"
  text-slate: "#1e293b"
  text-body: "#334155"
  text-secondary: "#475569"
  text-muted: "#64748b"
  surface-page: "#f8fafc"
  surface-alt: "#f1f5f9"
  surface-white: "#ffffff"
  border-subtle: "#e2e8f0"
  border-strong: "#cbd5e1"
  border-dark: "#94a3b8"
  badge-blue-bg: "#eff6ff"
  badge-blue-border: "#bfdbfe"
  badge-blue-text: "#1e40af"
  badge-red-bg: "#fee2e2"
  badge-red-border: "#fca5a5"
  badge-red-text: "#991b1b"
  badge-green-bg: "#f0fdf4"
  badge-green-border: "#bbf7d0"
  badge-green-text: "#15803d"
  success-green: "#16a34a"
  danger-red: "#dc2626"
typography:
  display:
    fontFamily: "Lexend Deca, -apple-system, sans-serif"
    fontSize: "44px"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Lexend Deca, -apple-system, sans-serif"
    fontSize: "32px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title-md:
    fontFamily: "Lexend Deca, -apple-system, sans-serif"
    fontSize: "26px"
    fontWeight: 800
    lineHeight: 1.25
  title-lg:
    fontFamily: "Lexend Deca, -apple-system, sans-serif"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: 1.25
  title:
    fontFamily: "Lexend Deca, -apple-system, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1.3
  title-sm:
    fontFamily: "Lexend Deca, -apple-system, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.3
  body-lead:
    fontFamily: "Geist, Inter, -apple-system, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  body-lg:
    fontFamily: "Geist, Inter, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.6
  body:
    fontFamily: "Geist, Inter, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "Geist, Inter, -apple-system, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.5
  caption:
    fontFamily: "Geist, Inter, -apple-system, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.4
  label:
    fontFamily: "Geist, Inter, -apple-system, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  base: "10px"
  lg: "12px"
  xl: "16px"
  card: "18px"
  banner: "20px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "18px"
  lg: "28px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.md}"
    padding: "11px 16px"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
  button-accent:
    backgroundColor: "{colors.accent-red}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.md}"
    padding: "13px 22px"
  button-accent-hover:
    backgroundColor: "{colors.accent-red-hover}"
  card-showcase:
    backgroundColor: "{colors.surface-white}"
    rounded: "{rounded.lg}"
    padding: "24px 26px"
---

# Design System: Care4 Associates

## Overview
Care4 Associates equips luxury hotels, fine dining establishments, cafes, and institutional banquets with commercial-grade operating supplies. The design system projects **High-Impact Visual Authority** and **Immediate High-Contrast Legibility**, discarding washed-out grey typography and buried specifications in favor of architectural precision, tactile physical controls, and instant procurement aggregation.

## Colors
- **Deep Maritime Navy (`#08101d`, `#0c1624`, `#02348d`)**: Grounds mastheads, navigation structures, and primary actions with institutional trust.
- **Porcelain Whites (`#ffffff`, `#f8fafc`, `#f1f5f9`)**: Clean, luminous backdrop that elevates tabletop porcelain, silverware luster, and linen textures.
- **Crimson Accents (`#d91b2a`, `#b91c1c`)**: High-salience callout color reserved for turnkey packages, active quotes, and primary RFQ dispatch.
- **Tactile Ink Typography (`#0f1c2d`, `#1e293b`, `#334155`)**: High-contrast, WCAG AAA compliant text ensuring maximum legibility across all lighting conditions.

## Typography
- **Headings & Display**: `Lexend Deca` (display scale 44px, section scale 32px, product card scale 22px). Tight letter-spacing, solid weight (800) for unyielding structural clarity.
- **Body & Specs**: `Geist` & `Inter` (18px lead, 15px descriptions, 14px on-card technical specs, 12px certification badges). Generous 1.5–1.6 line heights for strain-free reading during prolonged procurement sessions.

## Layout
- Maximum container width: 1440px with responsive 36px side gutters (reducing to 20px on mobile).
- Grid: Fluid responsive showcase grid (`repeat(auto-fill, minmax(360px, 1fr))` on desktop, 1-column on mobile).
- Sticky Sub-navigation: 76px sticky header providing instant category filtering and search without losing department context.

## Elevation & Depth
- Ambient, soft-blur shadows with realistic downward offsets (`0 4px 20px rgba(15, 28, 45, 0.06)`).
- Dynamic interactive hover state: Cards lift by -5px with an expanded soft ambient depth (`0 20px 40px -8px rgba(15, 28, 45, 0.14)`).
- Floating RFQ Dock: High z-index floating action dock anchored at bottom-right with an elevated drop shadow (`0 12px 36px rgba(12, 22, 36, 0.4)`).

## Shapes
- Outer Card Radius: 18px smooth radius with 1px tactile borders.
- Button & Input Radius: 10px rounded rectangles for comfortable finger and pointer tapping.
- Badges & Pills: 6px–8px micro-radii for specs; 9999px pill capsules for counts and status indicators.

## Components
- **High-Impact Showcase Cards**: 16:10 ratio product image, overlaid category and brand badges, 22px bold title, on-card commercial specs box, and dual action buttons.
- **Turnkey Procurement Bundle**: Highlighted double-border presentation card displaying full suite inclusions, green checklist icons, freight dispatch timeline, and rapid RFQ action.
- **RFQ Inquiry Dock & Drawer**: Persistent floating count pill expanding into an itemized procurement tray with single-click bulk quote dispatch.

## Do's and Don'ts
- **DO** display material grades (e.g. AISI 304, Bone China, 100% Melamine) and carton packaging directly on cards.
- **DO** maintain strong contrast: all body text must exceed 4.5:1 ratio against backgrounds.
- **DON'T** use washed-out light grey text on white cards.
- **DON'T** hide essential commercial specs behind nested modals or click-to-reveal toggles.
- **DON'T** use kickers or eyebrows above main section titles; let the heading carry its own weight.
