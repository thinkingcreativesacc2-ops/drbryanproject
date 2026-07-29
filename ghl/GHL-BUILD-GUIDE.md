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
1. **Text element** → badge: "20th Anniversary Edition"
   - Add class `bkw-badge` in the element's Advanced/Custom CSS settings
2. **Text element** → `EYEBROW TEXT`: "FREE 6-WEEK CHALLENGE"
   - Font: Lato 700, 11px, #C8932B, letter-spacing 3px, uppercase
3. **Headline element** → "Become the Leader Your Team Actually Wants to Follow"
   - Font: League Gothic, 64px desktop / 40px mobile, White
   - "Wants to Follow" → color `#C8932B`
4. **Text element** → sub-headline copy:
   > "To mark 20 years of turning managers into leaders — from the training
   > rooms of The Ritz-Carlton to healthcare and hospitality teams
   > worldwide — Dr. Bryan K. Williams is sharing his most-requested
   > leadership tips. One practical habit a week, for six weeks, straight
   > to your inbox. Free."
   - Font: Lato 400, 19px, rgba(255,255,255,0.82)
5. **Form element** → select your pre-built GHL form
   - Style the inputs and button via the Custom CSS (already done)
6. **Text/HTML element** → paste `BLOCK 5` (privacy line)

**Right Column:**
- Image element → upload `bryan-stage.jpg`
- Border radius: 12px, add border color `#C8932B` opacity 50%
- Hide on mobile (Column settings → Hide on Mobile)

---

### SECTION 3: COMMUNITY
| Setting | Value |
|---|---|
| Background Color | `#FFFFFF` (white) |
| Padding | 80px top/bottom |
| Width | Boxed, max 680px content width (photo grid can run wider) |

**Elements:**
1. Text → eyebrow: "JOIN THE COMMUNITY"
2. Headline → "You're Joining a Growing Community of Leaders"
   - "Community of Leaders" → color `#C8932B`
3. Text → sub-copy:
   > "This challenge isn't just six emails — it's an entry point into a
   > community of new and frontline leaders working through the same
   > challenges as you, at hospitals, hotels, restaurants, and growing
   > teams worldwide."
4. Custom HTML → paste `BLOCK 0B` (6-photo community grid + caption)

> **Photos needed:** group shots, event photos, or candid leader photos —
> upload to GHL Media first, then replace each `REPLACE_WITH_GHL_COMMUNITY_PHOTO_n_URL`
> placeholder in `BLOCK 0B`. Any tile left as a placeholder automatically
> falls back to a gradient tile, so it's safe to launch before all 6 are ready.

---

### SECTION 4: PROOF BAR
| Setting | Value |
|---|---|
| Background Color | `#C8932B` (gold) |
| Padding | 24px top/bottom |

**Elements:**
- Custom HTML → paste `BLOCK 1` from `ghl-html-blocks.html`

---

### SECTION 5: PROBLEM / EMPATHY
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

### SECTION 6: 6-WEEK BENEFITS
| Setting | Value |
|---|---|
| Background Color | `#16243F` (navy) |
| Padding | 80px top/bottom |

**Elements (top to bottom):**
1. Text → eyebrow: "WHAT'S INSIDE THE CHALLENGE" — gold, small, uppercase
2. Headline → "6 Weeks. 6 Leadership Habits. Delivered Straight to Your Inbox."
   - White headline, gold accent
3. Text → supporting sub-copy:
   > "Each week you'll get one short email — 5 minutes or less — with a
   > focused tip that's practical, immediately actionable, and built for
   > the real challenges leaders face every day."
4. Custom HTML → paste `BLOCK 2` (all 6 benefit cards)
5. Button element → "Join the Free 6-Week Challenge"
   - Add class `bkw-btn` in button's Advanced/Custom CSS settings
   - Link: scroll to Section 9 (final CTA) or use anchor `#signup`
6. Text/HTML → paste `BLOCK 5` (privacy line)

---

### SECTION 7: TESTIMONIALS
| Setting | Value |
|---|---|
| Background Color | `#F4EFE6` (cream) |
| Padding | 80px top/bottom |

**Elements:**
1. Text → eyebrow: "WHAT LEADERS ARE SAYING"
2. Headline → "Real Leaders. Real Results."
3. Custom HTML → paste `BLOCK 3` (testimonials grid)

> **Tip:** Replace the initials avatar divs with `<img>` tags once you have headshot photos.

> **TODO before launch:** The three testimonials in `BLOCK 3` are
> placeholders. Replace them with real, permissioned quotes (verified
> name, title, and sign-off) before this page goes live.

---

### SECTION 8: ABOUT DR. BRYAN
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

> **Compliance check before launch:** The client-logos row inside `BLOCK 4`
> only lists an organization if you have confirmed, permissioned engagement
> history (a signed contract or written approval to use their name/logo).
> Naming a brand without permission is a false-endorsement risk — verify
> each one or remove it.

---

### SECTION 9: FAQ / OBJECTION HANDLING
| Setting | Value |
|---|---|
| Background Color | `#F4EFE6` (cream) |
| Padding | 80px top/bottom |
| Width | Boxed, max 680px content width |

**Elements:**
1. Text → eyebrow: "QUESTIONS"
2. Headline → "Before You Sign Up"
3. Custom HTML → paste `BLOCK 4B` (5 FAQ items)

> **Confirm before launch:** the "What happens after the 6 weeks?" answer
> in `BLOCK 4B` currently says leaders will get occasional updates. Replace
> it with the actual post-challenge flow (ongoing newsletter, a specific
> nurture sequence, or a paid-program invite) so the copy matches the real
> workflow.

---

### SECTION 10: DIVIDER (optional)
- Simple 1px border separator using Divider element, color `#E6DFD2`

---

### SECTION 11: FINAL CTA (anchor: `signup`)
| Setting | Value |
|---|---|
| Background Color | `#16243F` (navy) |
| Padding | 100px top/bottom |
| Width | Boxed, center |

**Elements:**
1. Text element → badge: "20th Anniversary Edition"
   - Add classes `bkw-badge bkw-badge-center`
2. Text → eyebrow: "START YOUR LEADERSHIP JOURNEY TODAY" (gold-light)
3. Headline → "Ready to Lead with More Confidence and Clarity?"
   - White + gold accent
4. Text → supporting sub-copy (max 560px, center):
   > "Join thousands of leaders who've been part of Dr. Bryan's first 20
   > years — and be part of what's next. It's free. It's practical. And it
   > starts the moment you sign up."
5. Form element → same GHL form, stacked layout
6. Text/HTML → paste `BLOCK 5` (privacy line)

> **Note:** Set the Section ID to `signup` in Section settings so mid-page anchor links work.

---

### SECTION 12: FOOTER
| Setting | Value |
|---|---|
| Background Color | `#16243F` (navy) |
| Padding | 40px top/bottom |

**Elements:**
1. Image element → `logo-mark.png`, center, 48px height
2. Custom HTML → paste `BLOCK 6`
   - Tagline updated to: "Keynote Speaker • Author • Consultant • Celebrating 20 Years"

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
- [ ] FAQ items stack full-width on mobile (they already do — single column by default)

---

## Quick Reference: CSS Classes

| Class | Use |
|---|---|
| `bkw-eyebrow` | Gold uppercase label above headings |
| `bkw-eyebrow-light` | Gold-light version (on dark backgrounds) |
| `bkw-badge` | Gold-outline pill badge (use for "20th Anniversary Edition") |
| `bkw-badge-center` | Centers the badge (final CTA section) |
| `bkw-headline` | Navy display headline (League Gothic) |
| `bkw-headline-light` | White headline |
| `bkw-headline-gold` | Gold headline accent |
| `bkw-btn` | Gold CTA button |
| `bkw-btn-full` | Full-width gold button |
| `bkw-card` | Benefit card (dark bg) |
| `bkw-testimonial` | Testimonial card (white) |
| `bkw-faq-item` | FAQ card (white, left-aligned) |
| `bkw-faq-q` / `bkw-faq-a` | FAQ question / answer text |
| `bkw-privacy` | Small privacy/lock line |
| `bkw-privacy-light` | Privacy line on dark bg |
| `bkw-section-cream` | Cream background section |
| `bkw-section-navy` | Navy background section |
| `bkw-section-white` | White background section |

---

## Before Launch — Final Checklist

- [ ] **Testimonials** (`BLOCK 3`): replaced placeholder quotes with real, permissioned testimonials
- [ ] **Client logos** (`BLOCK 4`): every listed organization has confirmed, permissioned engagement history — or has been removed
- [ ] **Post-challenge flow** (`BLOCK 4B`, last FAQ item): copy matches the actual workflow after week 6 (newsletter, nurture sequence, or program invite)
- [ ] **All photo placeholders** replaced with real uploaded images (hero background, portrait, headshot)
- [ ] **ESP/webhook** wired into the form (see inline script comments) so signups actually reach the 6-week drip sequence
