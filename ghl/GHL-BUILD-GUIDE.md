# GHL Funnel Build Guide — Dr. Bryan K. Williams
## 6-Week Leadership Challenge Landing Page

---

## Before You Start

1. **Upload assets** to GHL Media Library first:
   - `logo-full.png` (header)
   - `logo-mark.png` (footer)
   - `bryan-stage.jpg` or `bryan-headshot.jpg` (about section + hero)
   - `hero-speaking.jpg` (wide background for hero section)

2. **Paste the Custom CSS** into the page:
   - Funnel → Page → Edit → Settings (gear icon) → Custom CSS tab
   - Paste the full contents of `ghl-custom-css.css`

3. **Add Google Fonts** to Head Code:
   - Settings → Head Code → paste:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link href="https://fonts.googleapis.com/css2?family=League+Gothic&family=Lato:wght@400;700;900&display=swap" rel="stylesheet">
   ```

4. **Create your GHL Form** in Forms → New Form before building the page:
   - Fields: First Name, Email Address
   - Action: Add to a Workflow (your 6-week drip sequence)
   - Redirect after submit → Thank You page URL

---

## Page Structure — Section by Section

### SECTION 1: HEADER
| Setting | Value |
|---|---|
| Background | White `#FFFFFF` |
| Padding | 16px top/bottom |
| Width | Full |

**Elements:**
- Image element → upload `logo-full.png`, center-align, max-width 300px
- No navigation links

---

### SECTION 2: HERO
| Setting | Value |
|---|---|
| Background Color | `#16243F` (navy) |
| Background Image | Upload `hero-speaking.jpg`, position: center top |
| Background Overlay | Enable overlay → color `#16243F`, opacity 88% |
| Padding | 80px top/bottom |
| Layout | 2 columns (70% / 30%) — hide right column on mobile |

**Left Column Elements (top to bottom):**
1. **Text element** → `EYEBROW TEXT`: "FREE 6-WEEK CHALLENGE"
   - Font: Lato 700, 11px, #C8932B, letter-spacing 3px, uppercase
2. **Headline element** → "Become the Leader Your Team Actually Wants to Follow"
   - Font: League Gothic, 64px desktop / 40px mobile, White
   - "Wants to Follow" → color `#C8932B`
3. **Text element** → sub-headline copy (see index.html hero-sub)
   - Font: Lato 400, 19px, rgba(255,255,255,0.82)
4. **Form element** → select your pre-built GHL form
   - Style the inputs and button via the Custom CSS (already done)
5. **Text/HTML element** → paste `BLOCK 5` (privacy line)

**Right Column:**
- Image element → upload `bryan-stage.jpg`
- Border radius: 12px, add border color `#C8932B` opacity 50%
- Hide on mobile (Column settings → Hide on Mobile)

---

### SECTION 3: PROOF BAR
| Setting | Value |
|---|---|
| Background Color | `#C8932B` (gold) |
| Padding | 24px top/bottom |

**Elements:**
- Custom HTML → paste `BLOCK 1` from `ghl-html-blocks.html`

---

### SECTION 4: PROBLEM / EMPATHY
| Setting | Value |
|---|---|
| Background Color | `#F4EFE6` (cream) |
| Padding | 80px top/bottom |
| Width | Boxed, max 680px content width |

**Elements:**
1. Headline → "Leading People Is the Hardest Job Nobody Fully Prepared You For"
   - "Nobody Fully Prepared You For" → color `#C8932B`
   - Font: League Gothic, center-aligned
2. Text → paragraph 1 (see index.html problem section)
3. Text → paragraph 2

---

### SECTION 5: 6-WEEK BENEFITS
| Setting | Value |
|---|---|
| Background Color | `#16243F` (navy) |
| Padding | 80px top/bottom |

**Elements (top to bottom):**
1. Text → eyebrow: "WHAT'S INSIDE THE CHALLENGE" — gold, small, uppercase
2. Headline → "6 Weeks. 6 Leadership Habits. Delivered Straight to Your Inbox."
   - White headline, gold accent
3. Text → supporting sub-copy
4. Custom HTML → paste `BLOCK 2` (all 6 benefit cards)
5. Button element → "Join the Free 6-Week Challenge"
   - Add class `bkw-btn` in button's Advanced/Custom CSS settings
   - Link: scroll to Section 9 (final CTA) or use anchor `#signup`
6. Text/HTML → paste `BLOCK 5` (privacy line)

---

### SECTION 6: TESTIMONIALS
| Setting | Value |
|---|---|
| Background Color | `#F4EFE6` (cream) |
| Padding | 80px top/bottom |

**Elements:**
1. Text → eyebrow: "WHAT LEADERS ARE SAYING"
2. Headline → "Real Leaders. Real Results."
3. Custom HTML → paste `BLOCK 3` (testimonials grid)

> **Tip:** Replace the initials avatar divs with `<img>` tags once you have headshot photos.

---

### SECTION 7: ABOUT DR. BRYAN
| Setting | Value |
|---|---|
| Background Color | `#FFFFFF` (white) |
| Padding | 80px top/bottom |
| Layout | 2 columns (40% / 60%) |

**Left Column:**
- Image element → upload `bryan-headshot.jpg`
- Add class `bkw-about-photo` in Image Advanced settings
- Border radius: 12px

**Right Column:**
- Custom HTML → paste `BLOCK 4`

---

### SECTION 8: DIVIDER (optional)
- Simple 1px border separator using Divider element, color `#E6DFD2`

---

### SECTION 9: FINAL CTA (anchor: `signup`)
| Setting | Value |
|---|---|
| Background Color | `#16243F` (navy) |
| Padding | 100px top/bottom |
| Width | Boxed, center |

**Elements:**
1. Text → eyebrow: "START YOUR LEADERSHIP JOURNEY TODAY" (gold-light)
2. Headline → "Ready to Lead with More Confidence and Clarity?"
   - White + gold accent
3. Text → supporting sub-copy (max 560px, center)
4. Form element → same GHL form, stacked layout
5. Text/HTML → paste `BLOCK 5` (privacy line)

> **Note:** Set the Section ID to `signup` in Section settings so mid-page anchor links work.

---

### SECTION 10: FOOTER
| Setting | Value |
|---|---|
| Background Color | `#16243F` (navy) |
| Padding | 40px top/bottom |

**Elements:**
1. Image element → `logo-mark.png`, center, 48px height
2. Custom HTML → paste `BLOCK 6`

---

## GHL Workflow Setup

After the form is connected, set up a Workflow:

1. **Trigger:** Form Submitted (this form)
2. **Action 1:** Add Tag → `6week-challenge`
3. **Action 2:** Send Email — Week 1 Tip (immediate)
4. **Wait:** 7 days
5. **Action 3:** Send Email — Week 2 Tip
6. Repeat for Weeks 3–6 with 7-day waits

---

## Mobile Checklist

- [ ] Hero headline ≤ 40px on mobile
- [ ] Right column (portrait) hidden on mobile
- [ ] Form inputs full-width on mobile
- [ ] Proof bar wraps to 2×2 grid on mobile
- [ ] Benefit cards stack to single column
- [ ] Testimonial cards stack to single column
- [ ] About section: photo above text on mobile

---

## Quick Reference: CSS Classes

| Class | Use |
|---|---|
| `bkw-eyebrow` | Gold uppercase label above headings |
| `bkw-eyebrow-light` | Gold-light version (on dark backgrounds) |
| `bkw-headline` | Navy display headline (League Gothic) |
| `bkw-headline-light` | White headline |
| `bkw-headline-gold` | Gold headline accent |
| `bkw-btn` | Gold CTA button |
| `bkw-btn-full` | Full-width gold button |
| `bkw-card` | Benefit card (dark bg) |
| `bkw-testimonial` | Testimonial card (white) |
| `bkw-privacy` | Small privacy/lock line |
| `bkw-privacy-light` | Privacy line on dark bg |
| `bkw-section-cream` | Cream background section |
| `bkw-section-navy` | Navy background section |
| `bkw-section-white` | White background section |
