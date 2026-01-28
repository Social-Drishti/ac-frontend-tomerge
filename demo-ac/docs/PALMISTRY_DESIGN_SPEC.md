# Palmistry UI Design System

## AstroChitra Palmistry Feature - Design Specification

---

## 1. DESIGN PHILOSOPHY

**Visual Language:** Editorial, calm, authority-driven aesthetic  
**Core Principles:**

- Expertise and trust through restrained luxury
- High readability with generous whitespace
- Minimal cognitive load, maximum clarity
- Accessible and keyboard-first interaction

---

## 2. COLOR TOKENS

### Light Mode (Primary)

```css
--palm-parchment: #faf8f3; /* Main background - warm cream */
--palm-paper: #fff9f0; /* Card background - lighter cream */
--palm-ink: #2b1810; /* Primary text - dark brown */
--palm-ink-muted: #6b5849; /* Secondary text - medium brown */
--palm-ink-subtle: #9b8b7e; /* Tertiary text - light brown */

--palm-border: #e8dcc8; /* Dividers and borders */
--palm-border-hover: #d4c4a8; /* Interactive borders */

--palm-accent: #8b4513; /* Primary actions - saddle brown */
--palm-accent-hover: #6b3410; /* Hover state */
--palm-accent-subtle: #f4e4d7; /* Accent backgrounds */

--palm-success: #4a7c59; /* Success states */
--palm-warning: #c17817; /* Warning states */
--palm-error: #a0423d; /* Error states */
```

### Dark Mode

```css
--palm-parchment-dark: #1c1814; /* Main background - deep brown */
--palm-paper-dark: #252018; /* Card background */
--palm-ink-dark: #e8dcc8; /* Primary text - cream */
--palm-ink-muted-dark: #b8a898; /* Secondary text */
--palm-ink-subtle-dark: #8b7b6e; /* Tertiary text */

--palm-border-dark: #3a342d; /* Dividers */
--palm-border-hover-dark: #4a443d; /* Interactive borders */

--palm-accent-dark: #c17817; /* Primary actions */
--palm-accent-hover-dark: #e89020; /* Hover state */
--palm-accent-subtle-dark: #2a2218; /* Accent backgrounds */
```

---

## 3. TYPOGRAPHY SYSTEM

### Font Families

```css
--font-serif: "Playfair Display", "Georgia", serif;
--font-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: "SF Mono", "Consolas", monospace;
```

### Type Scale

```css
--text-xs: 0.75rem; /* 12px - captions, labels */
--text-sm: 0.875rem; /* 14px - body small, metadata */
--text-base: 1rem; /* 16px - body text */
--text-lg: 1.125rem; /* 18px - body large */
--text-xl: 1.25rem; /* 20px - subheadings */
--text-2xl: 1.5rem; /* 24px - card titles */
--text-3xl: 1.875rem; /* 30px - section headings */
--text-4xl: 2.25rem; /* 36px - page titles */
--text-5xl: 3rem; /* 48px - hero headings */
```

### Font Weights

```css
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
```

### Line Heights

```css
--leading-tight: 1.25; /* Headings */
--leading-snug: 1.375; /* Subheadings */
--leading-normal: 1.5; /* Body text */
--leading-relaxed: 1.625; /* Long-form content */
--leading-loose: 1.75; /* Editorial spacing */
```

---

## 4. SPACING SYSTEM

### Grid System

```css
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px - base unit */
--space-5: 1.25rem; /* 20px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-10: 2.5rem; /* 40px */
--space-12: 3rem; /* 48px */
--space-16: 4rem; /* 64px */
--space-20: 5rem; /* 80px */
--space-24: 6rem; /* 96px */
```

---

## 5. LAYOUT SPECIFICATIONS

### Two-Column Grid

```
┌─────────────────────────────────────────┐
│  Header (100%)                          │
├──────────────────────────┬──────────────┤
│                          │              │
│  Main Content (70%)      │  Sidebar     │
│                          │  (30%)       │
│  - Hero section          │  - Context   │
│  - Reading cards         │  - History   │
│  - Collapsible sections  │  - Info      │
│                          │              │
├──────────────────────────┴──────────────┤
│  Footer / Input Area (100%)             │
└─────────────────────────────────────────┘
```

### Breakpoints

```css
--bp-mobile: 0px;
--bp-tablet: 768px;
--bp-desktop: 1024px;
--bp-wide: 1440px;
```

### Container

```css
--container-max: 1440px;
--container-padding: var(--space-6);
--main-column: 70%;
--sidebar-column: 30%;
--column-gap: var(--space-8);
```

---

## 6. COMPONENT SPECIFICATIONS

### 6.1 Reading Card (Primary Content)

```
┌─────────────────────────────────────┐
│  ┌───┐                              │
│  │📋│  Life Line Reading            │ ← Serif, 24px
│  └───┘                              │
│  ─────────────────────────────────  │ ← 1px divider
│                                     │
│  Your life line indicates a long   │ ← Sans, 16px
│  and healthy journey ahead. The    │   Leading: 1.625
│  depth suggests strong vitality... │
│                                     │
│  ┌────────────────────────────────┐│
│  │ [View Details] [Learn More]    ││ ← Action bar
│  └────────────────────────────────┘│
└─────────────────────────────────────┘

Styling:
- Background: var(--palm-paper)
- Border: 1px solid var(--palm-border)
- Border-radius: 8px
- Padding: var(--space-8)
- Margin-bottom: var(--space-6)
- Hover: border-color: var(--palm-border-hover)
```

### 6.2 Collapsible Section

```
▼ Hand Types & Characteristics ──────

  [Expanded content with images and text]

▶ Major Palm Lines ──────────────────
  [Collapsed]

Styling:
- Header: Serif, 20px, semibold
- Icon: 16px, aligned left
- Divider: 1px solid var(--palm-border)
- Padding: var(--space-6) 0
- Transition: opacity 200ms ease
```

### 6.3 Sidebar Info Card

```
┌──────────────────────┐
│  Quick Reference     │ ← Sans, 14px, bold
│  ──────────────────  │
│                      │
│  • Life Line         │ ← Sans, 14px
│  • Head Line         │   Line-height: 1.75
│  • Heart Line        │
│  • Fate Line         │
│                      │
└──────────────────────┘

Styling:
- Background: var(--palm-paper)
- Border: 1px solid var(--palm-border)
- Border-radius: 6px
- Padding: var(--space-6)
- Margin-bottom: var(--space-4)
```

### 6.4 Action Bar (Accept / Edit / Reject)

```css
.palm-action-bar {
  display: flex;
  gap: var(--space-3);
  padding: var(--space-4);
  border-top: 1px solid var(--palm-border);
  background: var(--palm-parchment);
}

.palm-btn-primary {
  padding: var(--space-3) var(--space-6);
  background: var(--palm-accent);
  color: var(--palm-paper);
  border: none;
  border-radius: 6px;
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  cursor: pointer;
  transition: background 200ms ease;
}

.palm-btn-primary:hover {
  background: var(--palm-accent-hover);
}

.palm-btn-secondary {
  padding: var(--space-3) var(--space-6);
  background: transparent;
  color: var(--palm-ink);
  border: 1px solid var(--palm-border);
  /* ... same other styles ... */
}
```

### 6.5 Code Preview Block

```
┌─────────────────────────────────────┐
│ palmistry.js                    ⚙️  │
├─────────────────────────────────────┤
│ 1  const lifeLine = {               │
│ 2    length: "long",                │
│ 3    depth: "deep",                 │
│ 4    breaks: []                     │
│ 5  }                                │
└─────────────────────────────────────┘

Styling:
- Background: #2B1810 (dark) or #F8F5F0 (light)
- Font: var(--font-mono)
- Font-size: 14px
- Line-height: 1.6
- Padding: var(--space-6)
- Border-radius: 6px
- Syntax highlighting: minimal (2-3 colors max)
```

---

## 7. INTERACTION RULES

### Keyboard Navigation

```
Tab       → Navigate between interactive elements
Enter     → Activate buttons, expand sections
Esc       → Close modals, cancel actions
Arrow ↑↓  → Navigate lists
Ctrl+K    → Global search
```

### Focus States

```css
.palm-focus-ring {
  outline: 2px solid var(--palm-accent);
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Hover States

- Opacity transition: 200ms ease
- Border color change: 150ms ease
- No scale transforms
- No shadow changes

### Animations

```css
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;

/* Allowed animations */
- opacity
- color
- border-color
- transform: translateY (max 2px)
```

---

## 8. ACCESSIBILITY

### Contrast Ratios (WCAG AA)

- Body text: 7.5:1 (AAA)
- Large text: 4.5:1 (AA)
- Interactive elements: 4.5:1 (AA)
- Disabled states: 3:1 minimum

### ARIA Labels

```html
<section aria-label="Palmistry Reading Results">
  <button aria-expanded="false" aria-controls="section-1">
    <div role="region" aria-live="polite"></div>
  </button>
</section>
```

---

## 9. DARK MODE IMPLEMENTATION

### Strategy

- Respect user's system preference
- Toggle available in settings
- Invert lightness, preserve hue
- Reduce contrast slightly for eye comfort

### Media Query

```css
@media (prefers-color-scheme: dark) {
  :root {
    --palm-parchment: var(--palm-parchment-dark);
    --palm-paper: var(--palm-paper-dark);
    /* ... swap all tokens ... */
  }
}
```

---

## 10. COMPONENT LIBRARY STRUCTURE

```
components/palmistry/
├── PalmistryLayout.jsx      # Main two-column layout
├── PalmistryHeader.jsx      # Header with branding
├── ReadingCard.jsx          # Primary content card
├── CollapsibleSection.jsx   # Expandable sections
├── Sidebar.jsx              # Context sidebar
├── ActionBar.jsx            # Accept/Edit/Reject
├── CodeBlock.jsx            # Syntax-highlighted code
└── InputComposer.jsx        # Bottom input area

styles/palmistry/
├── palmistry-tokens.css     # Design tokens
├── palmistry-layout.css     # Grid and structure
├── palmistry-components.css # Component styles
└── palmistry-dark.css       # Dark mode overrides
```

---

## 11. DEVELOPER HANDOFF NOTES

### Implementation Priority

1. Design tokens (colors, typography)
2. Layout grid structure
3. Core components (Card, Section, Sidebar)
4. Interaction states (hover, focus)
5. Dark mode
6. Keyboard navigation
7. ARIA attributes

### Performance Considerations

- Lazy load images below the fold
- Use CSS containment for scrolling sections
- Debounce search inputs (300ms)
- Virtualize long lists (>50 items)

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 12. VISUAL REFERENCE

**Inspiration:**

- New York Times editorial design
- Medium's reading experience
- Stripe's documentation
- Linear's interface minimalism

**Key Differentiators:**

- Warm parchment background vs cold white
- Serif headings for authority
- Generous line-height for readability
- Minimal borders, maximal whitespace
- Restrained color palette (3-4 colors max)

---

**Version:** 1.0  
**Last Updated:** January 27, 2026  
**Designer:** AstroChitra Design Team  
**Status:** Ready for Implementation
