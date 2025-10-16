# 🎨 PAINCARE PHYSIO - Visual Wireframe & Layout Guide

This document provides a visual representation of the website structure and layout.

---

## 📐 Overall Page Structure

```
┌─────────────────────────────────────────────────┐
│              NAVIGATION BAR (Sticky)             │
│  [Logo] PAINCARE PHYSIO    [Menu] [Book Button] │
└─────────────────────────────────────────────────┘
│
│  ┌───────────────────────────────────────────┐
│  │         HERO SECTION (Full Height)        │
│  │  ★★★★★ 5.0 Rating                        │
│  │  [Large Headline]                         │
│  │  [Subheadline]                            │
│  │  [Book Appointment] [Call Now]            │
│  │  [Expert Therapists] [Home Visits] [...]  │
│  └───────────────────────────────────────────┘
│
│  ┌───────────────────────────────────────────┐
│  │           ABOUT SECTION                   │
│  │  [Image]  |  [Content + Stats]            │
│  └───────────────────────────────────────────┘
│
│  ┌───────────────────────────────────────────┐
│  │        SPECIALIZATIONS (6 Cards)          │
│  │  [Card] [Card] [Card]                     │
│  │  [Card] [Card] [Card]                     │
│  └───────────────────────────────────────────┘
│
│  ┌───────────────────────────────────────────┐
│  │      CONDITIONS WE TREAT (8 Cards)        │
│  │  [Card] [Card] [Card] [Card]              │
│  │  [Card] [Card] [Card] [Card]              │
│  └───────────────────────────────────────────┘
│
│  ┌───────────────────────────────────────────┐
│  │      TREATMENT APPROACH (3 Pillars)       │
│  │  [Pillar 01] [Pillar 02] [Pillar 03]     │
│  └───────────────────────────────────────────┘
│
│  ┌───────────────────────────────────────────┐
│  │        TESTIMONIALS (3 Reviews)           │
│  │  [Review 1] [Review 2] [Review 3]         │
│  └───────────────────────────────────────────┘
│
│  ┌───────────────────────────────────────────┐
│  │     CONTACT & APPOINTMENT SECTION         │
│  │  [Contact Info]  |  [Booking Form]        │
│  └───────────────────────────────────────────┘
│
│  ┌───────────────────────────────────────────┐
│  │              FOOTER                       │
│  │  [About] [Links] [Contact] [CTA]          │
│  │  [Copyright] [Legal Links]                │
│  └───────────────────────────────────────────┘
│
└─────────────────────────────────────────────────┘

[Sticky Mobile CTA - Bottom of screen on mobile]
```

---

## 🔍 Detailed Section Breakdowns

### 1. Navigation Bar
```
┌──────────────────────────────────────────────────────────┐
│  [❤️ Icon] PAINCARE PHYSIO    [≡ Mobile Menu]           │
│                                                           │
│  Desktop Menu:                                            │
│  Home | About | Services | Conditions | Reviews |        │
│  [Book Appointment Button - Green]                       │
└──────────────────────────────────────────────────────────┘

Colors:
- Background: White (#FFFFFF)
- Text: Dark Gray (#333333)
- CTA Button: Green (#61B292)
- Shadow: Subtle drop shadow

Behavior:
- Sticky on scroll
- Hamburger menu on mobile
- Smooth scroll to sections
```

---

### 2. Hero Section
```
┌──────────────────────────────────────────────────────────┐
│                                                           │
│  [Gradient Background: Deep Blue → Sky Blue]             │
│  [Background Image: Physiotherapy session - 15% opacity] │
│                                                           │
│     ┌─────────────────────────────────┐                 │
│     │  ★★★★★ 5.0 Rating               │                 │
│     └─────────────────────────────────┘                 │
│                                                           │
│     Expert Physiotherapy Care That                       │
│     Gets You Back to Life                                │
│                                                           │
│     Personalized treatment plans designed for your       │
│     recovery. Home visits available for your convenience.│
│                                                           │
│     ┌──────────────────┐  ┌──────────────────┐         │
│     │ Book Appointment │  │  📞 Call Now     │         │
│     │   (Green)        │  │   (Blue)         │         │
│     └──────────────────┘  └──────────────────┘         │
│                                                           │
│     [👨‍⚕️ Expert]  [🏠 Home Visits]  [📜 Evidence-Based]│
│                                                           │
└──────────────────────────────────────────────────────────┘

Layout:
- Min height: 90vh
- Content: Left-aligned, max-width 800px
- Buttons: Side by side (stack on mobile)
- Features: Horizontal row (stack on mobile)
```

---

### 3. About Section
```
┌──────────────────────────────────────────────────────────┐
│  Background: Soft White (#F9FBFD)                        │
│                                                           │
│  ┌──────────────────┐  ┌──────────────────────────────┐│
│  │                  │  │  Your Partner in Recovery     ││
│  │   [Treatment     │  │  and Wellness                 ││
│  │    Session       │  │                               ││
│  │    Image]        │  │  At PAINCARE PHYSIO, we       ││
│  │                  │  │  believe in patient-first...  ││
│  │   ┌──────────┐   │  │                               ││
│  │   │ 1000+    │   │  │  ┌────┐  ┌────┐  ┌────┐    ││
│  │   │ Patients │   │  │  │10+ │  │1000+│  │95% │    ││
│  │   └──────────┘   │  │  │Yrs │  │Pts  │  │Rate│    ││
│  │   Badge          │  │  └────┘  └────┘  └────┘    ││
│  └──────────────────┘  └──────────────────────────────┘│
│                                                           │
└──────────────────────────────────────────────────────────┘

Layout:
- Two-column grid (50/50)
- Image on left with badge overlay
- Content on right with stats at bottom
- Single column on mobile
```

---

### 4. Specializations Section
```
┌──────────────────────────────────────────────────────────┐
│  Background: White                                        │
│                                                           │
│              Our Specializations                          │
│     Comprehensive physiotherapy services...               │
│                                                           │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐        │
│  │   [🏃]     │  │   [🧠]     │  │   [❤️]     │        │
│  │            │  │            │  │            │        │
│  │  Sports    │  │   Neuro    │  │  Stroke    │        │
│  │  Physio    │  │   Rehab    │  │  Recovery  │        │
│  │            │  │            │  │            │        │
│  │ Description│  │ Description│  │ Description│        │
│  └────────────┘  └────────────┘  └────────────┘        │
│                                                           │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐        │
│  │   [🦴]     │  │   [♿]     │  │   [👶]     │        │
│  │ Orthopedic │  │ Geriatric  │  │ Pediatric  │        │
│  │    Care    │  │   Physio   │  │  Therapy   │        │
│  └────────────┘  └────────────┘  └────────────┘        │
│                                                           │
└──────────────────────────────────────────────────────────┘

Card Design:
- Rounded corners (12px)
- Gradient icon circle (80x80px)
- Hover: Lift up 8px with larger shadow
- 3 columns desktop, 2 tablet, 1 mobile
```

---

### 5. Conditions We Treat
```
┌──────────────────────────────────────────────────────────┐
│  Background: Soft White (#F9FBFD)                        │
│                                                           │
│            Conditions We Treat                            │
│     Expert care for a wide range of pain...              │
│                                                           │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                   │
│  │ [🦴] │ │ [✋] │ │ [🔙] │ │ [🏃] │                   │
│  │Joint │ │Arthr-│ │Back &│ │Sports│                   │
│  │Pain  │ │itis  │ │Neck  │ │Injury│                   │
│  └──────┘ └──────┘ └──────┘ └──────┘                   │
│                                                           │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                   │
│  │ [🩹] │ │ [🤕] │ │ [🧍] │ │ [🤲] │                   │
│  │Post- │ │Head- │ │Balanc│ │Chron-│                   │
│  │Surg. │ │aches │ │e Iss.│ │ic Pn.│                   │
│  └──────┘ └──────┘ └──────┘ └──────┘                   │
│                                                           │
└──────────────────────────────────────────────────────────┘

Layout:
- 4 columns desktop
- 3 columns tablet
- 2 columns mobile
- Compact cards with icon + title + brief text
```

---

### 6. Treatment Approach (3 Pillars)
```
┌──────────────────────────────────────────────────────────┐
│  Background: White                                        │
│                                                           │
│      Understanding Physiotherapy's Approach               │
│      Our evidence-based methodology...                    │
│                                                           │
│  ┌────────────────┐ ┌────────────────┐ ┌──────────────┐│
│  │ ┌────┐         │ │ ┌────┐         │ │ ┌────┐       ││
│  │ │ 01 │         │ │ │ 02 │         │ │ │ 03 │       ││
│  │ └────┘         │ │ └────┘         │ │ └────┘       ││
│  │                │ │                │ │              ││
│  │ Comprehensive  │ │ Personalized   │ │ Ongoing      ││
│  │ Assessment     │ │ Treatment Plan │ │ Support      ││
│  │                │ │                │ │              ││
│  │ We start with  │ │ Every patient  │ │ We monitor   ││
│  │ a thorough...  │ │ is unique...   │ │ your prog... ││
│  │                │ │                │ │              ││
│  │ ✓ Physical exam│ │ ✓ Manual ther. │ │ ✓ Progress   ││
│  │ ✓ Movement...  │ │ ✓ Exercises    │ │ ✓ Adjustm... ││
│  │ ✓ Pain pattern │ │ ✓ Pain mgmt    │ │ ✓ Education  ││
│  │ ✓ Goal setting │ │ ✓ Home program │ │ ✓ Wellness   ││
│  └────────────────┘ └────────────────┘ └──────────────┘│
│                                                           │
└──────────────────────────────────────────────────────────┘

Design:
- Numbered circles (gradient background)
- Light background cards
- Checkmark bullets in green
- Single column on mobile
```

---

### 7. Testimonials Section
```
┌──────────────────────────────────────────────────────────┐
│  Background: Soft White (#F9FBFD)                        │
│                                                           │
│           What Our Patients Say                           │
│     Real stories from people we've helped recover         │
│                                                           │
│              ★★★★★ 5.0                                   │
│     5.0 out of 5 based on 200+ reviews                   │
│                                                           │
│  ┌────────────────┐ ┌────────────────┐ ┌──────────────┐│
│  │ ★★★★★          │ │ ★★★★★          │ │ ★★★★★        ││
│  │                │ │                │ │              ││
│  │ "After my knee │ │ "I suffered    │ │ "My father   ││
│  │ surgery, I was │ │ from chronic   │ │ had a stroke ││
│  │ worried about  │ │ back pain..."  │ │ and needed..." ││
│  │ recovery..."   │ │                │ │              ││
│  │                │ │                │ │              ││
│  │ [RS]  Rajesh   │ │ [PK]  Priya    │ │ [AM]  Anil   ││
│  │       Sharma   │ │       Kumar    │ │       Mehta  ││
│  │  Marathon Run. │ │  IT Prof.      │ │  Caregiver   ││
│  └────────────────┘ └────────────────┘ └──────────────┘│
│                                                           │
└──────────────────────────────────────────────────────────┘

Card Design:
- White background with shadow
- Stars at top (gold color)
- Italic quote text
- Avatar circle with initials (gradient)
- Name and role below
- Single column on mobile
```

---

### 8. Contact & Appointment Section
```
┌──────────────────────────────────────────────────────────┐
│  Background: White                                        │
│                                                           │
│  ┌──────────────────────┐  ┌──────────────────────────┐ │
│  │ Start Your Recovery  │  │  ┌────────────────────┐  │ │
│  │ Journey Today        │  │  │ Request a Callback │  │ │
│  │                      │  │  │                    │  │ │
│  │ Book your appoint... │  │  │ Fill out the form  │  │ │
│  │                      │  │  │                    │  │ │
│  │ 📍 Visit Us          │  │  │ [Name Field]       │  │ │
│  │ 123 Healthcare St... │  │  │ [Phone Field]      │  │ │
│  │                      │  │  │ [Issue Dropdown]   │  │ │
│  │ 📞 Call Us           │  │  │ [Preferred Time]   │  │ │
│  │ +91 98765 43210      │  │  │                    │  │ │
│  │                      │  │  │ [Book Appointment] │  │ │
│  │ ✉️ Email Us          │  │  │     (Green)        │  │ │
│  │ info@paincare...     │  │  │                    │  │ │
│  │                      │  │  │ We respect your... │  │ │
│  │ 🕐 Opening Hours     │  │  └────────────────────┘  │ │
│  │ Mon-Sat: 8AM-8PM     │  │                          │ │
│  └──────────────────────┘  └──────────────────────────┘ │
│                                                           │
└──────────────────────────────────────────────────────────┘

Layout:
- Two-column grid (50/50)
- Contact info on left
- Form on right (light blue background)
- Single column on mobile
```

---

### 9. Footer
```
┌──────────────────────────────────────────────────────────┐
│  Background: Deep Blue (#1F4E79)                         │
│  Text: White                                              │
│                                                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐ │
│  │ [❤️ Icon]│  │ Quick    │  │ Contact  │  │ Book    │ │
│  │ PAINCARE │  │ Links    │  │ Info     │  │ Appoint.│ │
│  │ PHYSIO   │  │          │  │          │  │         │ │
│  │          │  │ About Us │  │ 📍 123...│  │ Ready to│ │
│  │ Expert   │  │ Services │  │ 📞 +91...│  │ start?  │ │
│  │ physio...│  │ Conditns │  │ ✉️ info..│  │         │ │
│  │          │  │ Reviews  │  │ 🕐 Mon...│  │ [Get    │ │
│  │ [f][i]   │  │          │  │          │  │ Started]│ │
│  │ [in][yt] │  │          │  │          │  │         │ │
│  └──────────┘  └──────────┘  └──────────┘  └─────────┘ │
│                                                           │
│  ────────────────────────────────────────────────────── │
│                                                           │
│  © 2025 PAINCARE PHYSIO. All rights reserved.           │
│                        Privacy Policy | Terms of Service │
│                                                           │
└──────────────────────────────────────────────────────────┘

Layout:
- 4 columns desktop (2fr 1fr 1fr 1fr)
- 2 columns tablet
- 1 column mobile
- Social icons in first column
```

---

### 10. Sticky Mobile CTA (Mobile Only)
```
┌──────────────────────────────────────────────────────────┐
│  [Fixed at bottom of screen on mobile]                   │
│                                                           │
│  ┌────────────────────┐  ┌────────────────────────────┐ │
│  │  📞 Call Now       │  │  Book Appointment          │ │
│  │  (Blue Button)     │  │  (Green Button)            │ │
│  └────────────────────┘  └────────────────────────────┘ │
│                                                           │
└──────────────────────────────────────────────────────────┘

Behavior:
- Only visible on screens < 768px
- Hides when contact section is in view
- Smooth slide up/down animation
```

---

## 📱 Responsive Breakpoints

### Desktop (1024px+)
- Full multi-column layouts
- Large typography
- Side-by-side content
- Hover effects active

### Tablet (768px - 1024px)
- 2-column grids
- Slightly reduced spacing
- Maintained readability
- Touch-optimized

### Mobile (< 768px)
- Single column layouts
- Stacked elements
- Larger touch targets (44x44px min)
- Sticky mobile CTA visible
- Hamburger menu
- Reduced font sizes
- Optimized spacing

---

## 🎨 Color Usage Map

### Primary Deep Blue (#1F4E79)
- Navigation text (hover)
- All headings (H1, H2, H3)
- Footer background
- Active states

### Secondary Sky Blue (#4FA3D1)
- Icons in conditions section
- Secondary CTA buttons
- Hover states
- Accent elements

### Support Green (#61B292)
- Primary CTA buttons
- Success indicators
- Checkmarks
- Logo icon
- Social hover states

### Soft White (#F9FBFD)
- Alternating section backgrounds
- Card backgrounds
- Form background

### Neutral Dark (#333333)
- Body text
- Paragraph content
- Navigation links

### Neutral Light (#E5E5E5)
- Borders
- Dividers
- Input borders

---

## 🔤 Typography Hierarchy

```
H1 (Hero)
├─ 56px desktop / 32px mobile
├─ Poppins Bold
└─ Used: Hero headline

H2 (Section Titles)
├─ 36px desktop / 28px mobile
├─ Poppins Semi-Bold
└─ Used: All section headers

H3 (Subheadings)
├─ 28px desktop / 22px mobile
├─ Poppins Medium
└─ Used: Card titles, pillar titles

H4 (Small Headings)
├─ 20px
├─ Poppins Semi-Bold
└─ Used: Info items, testimonial names

Body Text
├─ 18px desktop / 16px mobile
├─ Open Sans Regular
└─ Used: All paragraphs

Buttons
├─ 18px
├─ Poppins Semi-Bold
└─ Used: All CTAs
```

---

## 🎯 Key Design Principles Applied

1. **Visual Hierarchy**: Clear distinction between sections using alternating backgrounds
2. **White Space**: Generous padding (24-80px) for breathing room
3. **Consistency**: Repeated patterns (cards, buttons, icons)
4. **Accessibility**: High contrast ratios, semantic HTML, ARIA labels
5. **Mobile-First**: Designed for mobile, enhanced for desktop
6. **Trust Indicators**: 5-star ratings, statistics, testimonials prominently displayed
7. **Clear CTAs**: Green buttons stand out, multiple conversion points
8. **Professional Imagery**: Healthcare-focused visuals throughout

---

**This wireframe serves as a blueprint for the implemented design. All measurements and layouts are reflected in the actual code.**
