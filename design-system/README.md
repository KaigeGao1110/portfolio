# Kaige Gao — Personal Portfolio Design System

## Overview

This is the design system for **Kaige Gao**'s personal portfolio website — a one-page personal site showcasing his work as an AI Agent Builder, Cloud Architect, and Indie Founder. The site is built with Next.js + Tailwind CSS + Framer Motion.

**Person:** Kaige Gao  
**Tagline:** "Building autonomous systems that work while I sleep."  
**Roles (rotating):** AI Agent Builder · Cloud Architect · Indie Founder  
**Location:** Chicago, IL  
**Email:** kaigegao777@gmail.com  
**GitHub:** [KaigeGao1110](https://github.com/KaigeGao1110)

**Sources:**
- Codebase: `portfolio/` (attached via File System Access API — Next.js app)
- Inspiration references: clerk.com, vercel.com, claude.ai

---

## Site Structure

A single-page portfolio with anchor sections:
1. **Hero** — Full-screen intro with animated typewriter roles + CTA buttons
2. **About** — Bio text + 3 stat cards
3. **Projects** — 2-col grid of project cards (Scout, HybridAgent, CureForge AI, AI Document Processing)
4. **Skills** — Animated progress-bar skill panels (AI & Agents | Cloud & Infra)
5. **Contact** — Email, GitHub, location + footer

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **First person, direct:** "I am a full-stack AI agent architect…" — no passive voice
- **Builder framing:** Every description emphasizes shipping, deploying, autonomy ("systems that work while I sleep")
- **Technical confidence without arrogance:** Precise tech names (ReAct, RAGAS, FSM, Claude Sonnet) used matter-of-factly
- **Concise but detailed:** Short hero copy; project descriptions are one dense paragraph each
- **No fluff:** No "passionate about" or "love to code" — just what was built and how it works
- **Goal-oriented:** North star is explicit ("becoming a founding engineer at a company that matters")

### Casing
- Section eyebrows: ALL CAPS, wide letter-spacing (e.g. "ABOUT ME", "PORTFOLIO", "EXPERTISE")
- Headings: Title Case ("Who I Am", "Featured Projects", "Skills & Stack")
- Body: Sentence case
- Tech tags/labels: Exact casing from ecosystem (e.g. "FastAPI", "GCP", "LangGraph")

### Emoji Usage
- **Not used in copy** — zero emoji in headlines or body text
- Sparingly used in UI icon backgrounds only (🤖 ☁️ in skill section headers)
- Never used decoratively or as bullet points

### Copy Examples
- Hero label: "Welcome to my digital universe"
- CTA: "View Projects" / "Get in Touch" / "Hire Me"
- Section intro: "Currently seeking AI Agent and Cloud Architecture roles."
- Stat cards: "4+ Projects Shipped", "3 Cloud Platforms", "1 Goal: Founder"

---

## VISUAL FOUNDATIONS

### Colors
| Token | Value | Usage |
|---|---|---|
| `--background` | `#faf8f5` | Page bg — warm off-white/cream |
| `--foreground` | `#1a1a1a` | Primary text |
| `--accent` | `#3b82f6` | Blue-500 — primary accent |
| `--accent-dim` | `#2563eb` | Blue-600 — hover/dimmed accent |
| `--muted` | `#6b7280` | Gray-500 — secondary text |
| `--border` | `rgba(0,0,0,0.08)` | Subtle card borders |
| `--glass-bg` | `rgba(255,255,255,0.85)` | Glass card backgrounds |
| Purple orb | `rgba(139,92,246,0.10)` | Ambient bg decoration only |

**Color vibe:** Warm neutral base (cream, not cold white) + electric blue accent. Not dark-mode; bright and clean. Cool blue on warm cream creates a confident, professional contrast.

### Typography
- **Font:** Inter (Google Fonts, weights 300–900)
- **Fluid scale:** All sizes use `clamp(min, vw-based, max)` for true responsiveness
- Hero title: `clamp(2.5rem, 8vw, 6rem)`, weight 800
- Headings: `clamp(1.75rem, 5vw, 3.75rem)`, weight 700, line-height 1.1
- Subtitle/role: `clamp(1.25rem, 3vw, 2.5rem)`, weight 600
- Body: `clamp(1rem, 1.5vw, 1.25rem)`, line-height 1.6
- Eyebrow labels: `0.7–0.875rem`, tracking `0.2–0.25em`, uppercase, blue, weight 600
- Max readable width: `70ch`

### Gradient Text
The hero name and section headings use an animated shimmer gradient:
`linear-gradient(135deg, #1a1a1a 0%, #3b82f6 50%, #1a1a1a 100%)` at `background-size: 200%`, animated over 3s ease-in-out. Creates a subtle blue glint sweep.

### Backgrounds & Textures
- **Cyber grid:** Very faint blue dot-grid (`rgba(59,130,246,0.04)`) on hero — gives depth without being busy
- **Gradient transitions:** Between sections use `background: linear-gradient(to bottom, …)` for subtle warmth shifts
- **Gradient orbs:** 3 soft radial blurs on hero (blue + purple), animating opacity/blur on a 4s loop
- **No images** in background — purely typographic + geometric

### Cards
- Background: `#ffffff` (solid white)
- Border: `1px solid rgba(0,0,0,0.08)` (default) → `rgba(59,130,246,0.40)` (hover)
- Shadow: `0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)` — very subtle
- Border radius: `rounded-2xl` = 16px
- Hover: `scale(1.02)` + border turns blue + shadow increases
- Padding: fluid `clamp(1.25rem, 3vw, 2.5rem)`

### Animations & Motion
- **Entry animations:** `opacity: 0, y: 30` → `opacity: 1, y: 0` via Framer Motion, duration 0.6–0.8s, ease `easeOut`
- **Stagger:** `staggerChildren: 0.12–0.15s` for grid sections
- **Scroll-triggered:** `whileInView` with `once: true`, margin `-100px`
- **Float:** Decorative shapes use 8–12s looping float with subtle rotation
- **Pulse glow:** Background orbs pulse opacity 0.4→0.7 with blur change, 4s loop
- **Shimmer text:** Gradient text animates background-position, 3s ease-in-out infinite
- **Skill bars:** Width 0→N% on scroll, duration 1s, cubic bezier [0.25, 0.46, 0.45, 0.94]
- **No bounce** — all easing is smooth ease-out or ease-in-out; nothing springy

### Buttons
- **Primary:** `background: #3b82f6`, white text, `rounded-xl` (12px), fluid padding. Hover: `background: #60a5fa` + `box-shadow: 0 4px 20px rgba(59,130,246,0.35)`
- **Secondary (outline):** Transparent bg, `border: 1px solid rgba(59,130,246,0.4)`, blue text. Hover: `background: rgba(59,130,246,0.1)` + border solidifies
- **Nav CTA ("Hire Me"):** `bg-blue-50`, blue text, `border border-blue-200`, hover `bg-blue-100`
- **Press state:** Not explicitly defined in code — likely handled by browser default + scale from hover

### Borders & Shadows
- Cards: `1px solid rgba(0,0,0,0.08)` default — almost invisible
- Active/hover: border transitions to blue at 40% opacity
- Shadows stay very light — never dramatic drop shadows
- No inner shadows

### Corner Radii
- Cards: `rounded-2xl` = 16px
- Buttons: `rounded-xl` = 12px (primary) / `rounded-lg` = 8px (nav CTA)
- Skill bars: `rounded-full`
- Tags: `rounded-full`
- Icon boxes: `rounded-xl` = 12px

### Tags / Pills
- Background: `bg-blue-50` (`#eff6ff`)
- Text: `#3b82f6`
- Border: `border-blue-100` (`#dbeafe`)
- Shape: `rounded-full`
- Size: `px-3 py-1 text-xs font-medium`

### Navbar
- Transparent on page load → `bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm` on scroll
- Logo: "KG" monogram, blue, bold, tracking-wider
- Links: gray text → blue on hover, font-medium, text-sm, tracking-wide
- Mobile: hamburger with animated bars → dropdown overlay

### Layout
- Container: `max-width: min(100%, 1400px)`, centered
- Section padding: `clamp(4rem, 8vw, 8rem)` vertical, `clamp(1rem, 5vw, 3rem)` horizontal
- Grid: 2-col at md breakpoint (projects, skills), 3-col at sm (stats, contact)
- All fluid — no hard breakpoints beyond Tailwind defaults

### Scrollbar
- Width: 6px, blue thumb (`#3b82f6`), warm track (`#f0ebe4`)

### Selection
- `background: rgba(59,130,246,0.2)`, text stays `#1a1a1a`

---

## ICONOGRAPHY

Icons come from **Lucide React** (`lucide-react` npm package). They are SVG-based, stroke-weight 1.5, rounded caps/joins.

Icons used in the portfolio:
- `ArrowUpRight` — project card external link
- `ExternalLink` — GitHub link in contact
- `Mail` — email in contact
- `MapPin` — location in contact

**Usage:** Icons are 16px (`w-4 h-4`) in cards, 20px (`w-5 h-5`) in contact. Always blue (`text-[#3b82f6]`). Placed inside `rounded-xl bg-blue-50 border border-blue-100` icon boxes (48×48px in contact, 40×40px in skills).

No custom SVG icons, no icon font, no PNG icons. All iconography through Lucide.

In the CDN context, use: `https://unpkg.com/lucide@latest` or inline SVG equivalents.

---

## Files in This Design System

```
README.md                          — This file
SKILL.md                           — Agent skill definition
colors_and_type.css                — CSS variables: colors, type, spacing tokens
assets/                            — Logo and visual assets
  logo-kg.svg                      — "KG" monogram mark
preview/                           — Design system card previews
  colors-base.html                 — Base color palette
  colors-semantic.html             — Semantic / state colors
  type-scale.html                  — Type scale specimens
  type-specimens.html              — Font weight + style specimens
  spacing-tokens.html              — Spacing, radius, shadow tokens
  components-buttons.html          — Button states
  components-tags.html             — Tags, pills, badges
  components-cards.html            — Card variants
  components-navbar.html           — Navbar states
  components-inputs.html           — Form inputs
  brand-gradient-text.html         — Gradient text + shimmer animation
  brand-motion.html                — Animation primitives
ui_kits/
  portfolio/
    README.md
    index.html                     — Full interactive portfolio prototype
    Navbar.jsx
    Hero.jsx
    About.jsx
    Projects.jsx
    Skills.jsx
    Contact.jsx
```
