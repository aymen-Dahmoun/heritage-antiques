# Shopify Polaris Tokens & Component Blueprints

This reference file provides the exact CSS custom properties and standard class architectures required by the `shopify-design-system` skill.

---

## 1. Global Design Tokens (`src/styles/polaris-tokens.css`)

```css
:root {
  /* Surfaces & Canvas */
  --p-canvas: #f1f2f3;
  --p-surface: #ffffff;
  --p-surface-subdued: #fafbfb;
  --p-surface-hover: #f6f6f7;
  --p-surface-pressed: #f1f2f3;
  --p-backdrop: rgba(32, 34, 35, 0.5);

  /* Typography & Text Colors */
  --p-text-primary: #202223;
  --p-text-subdued: #6d7175;
  --p-text-disabled: #8c9196;
  --p-text-on-primary: #ffffff;

  /* Interactive & Brand Accents */
  --p-action-primary: #005bd3;
  --p-action-primary-hover: #004bb4;
  --p-action-primary-pressed: #003c8f;
  --p-action-secondary: #ffffff;
  --p-action-secondary-hover: #f6f6f7;
  --p-action-secondary-border: #babec3;

  /* Semantic Status & Badges */
  --p-critical: #d72c0d;
  --p-critical-surface: #fff4f4;
  --p-critical-border: #e0b3b2;
  --p-success: #108043;
  --p-success-surface: #f1f8f5;
  --p-success-border: #95c9b4;
  --p-warning: #b98900;
  --p-warning-surface: #fdf8e8;
  --p-badge-neutral-bg: #e4e5e7;
  --p-badge-neutral-text: #202223;

  /* Borders & Dividers */
  --p-border: #d2d5d8;
  --p-border-subdued: #e1e3e5;
  --p-border-hover: #999ea4;

  /* Border Radius */
  --p-radius-xs: 4px;
  --p-radius-sm: 6px;
  --p-radius-base: 8px;
  --p-radius-lg: 12px;
  --p-radius-pill: 9999px;

  /* Elevation Shadows */
  --p-shadow-card: 0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15);
  --p-shadow-card-hover: 0 0 0 1px rgba(63, 63, 68, 0.08), 0 4px 12px 0 rgba(63, 63, 68, 0.12);
  --p-shadow-popover: 0 3px 6px -3px rgba(23, 24, 24, 0.08), 0 8px 20px -4px rgba(23, 24, 24, 0.12);
  --p-shadow-drawer: -4px 0 24px rgba(0, 0, 0, 0.15);

  /* Spacing Scale (4px base unit) */
  --p-space-1: 4px;
  --p-space-2: 8px;
  --p-space-3: 12px;
  --p-space-4: 16px;
  --p-space-5: 20px;
  --p-space-6: 24px;
  --p-space-8: 32px;
  --p-space-10: 40px;

  /* Typography Scale */
  --p-font-sans: -apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  --p-font-size-xs: 0.75rem;    /* 12px */
  --p-font-size-sm: 0.875rem;   /* 14px */
  --p-font-size-base: 1rem;     /* 16px */
  --p-font-size-lg: 1.25rem;    /* 20px */
  --p-font-size-xl: 1.5rem;     /* 24px */
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--p-font-sans);
  background-color: var(--p-canvas);
  color: var(--p-text-primary);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
```

---

## 2. Standard Polaris UI Class Patterns (`src/styles/main.css`)

```css
/* Polaris Card Container */
.p-card {
  background-color: var(--p-surface);
  border: 1px solid var(--p-border-subdued);
  border-radius: var(--p-radius-base);
  box-shadow: var(--p-shadow-card);
  overflow: hidden;
  transition: box-shadow 0.2s ease, transform 0.15s ease;
}

.p-card--interactive:hover {
  box-shadow: var(--p-shadow-card-hover);
  transform: translateY(-2px);
}

.p-card__section {
  padding: var(--p-space-4);
}

.p-card__section + .p-card__section {
  border-top: 1px solid var(--p-border-subdued);
}

/* Polaris Buttons */
.p-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--p-space-2);
  padding: var(--p-space-2) var(--p-space-4);
  font-size: var(--p-font-size-sm);
  font-weight: 600;
  line-height: 1.25rem;
  border-radius: var(--p-radius-sm);
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  text-decoration: none;
  border: 1px solid transparent;
}

.p-btn:focus-visible {
  outline: 2px solid var(--p-action-primary);
  outline-offset: 2px;
}

.p-btn--primary {
  background-color: var(--p-action-primary);
  color: var(--p-text-on-primary);
}

.p-btn--primary:hover:not(:disabled) {
  background-color: var(--p-action-primary-hover);
}

.p-btn--secondary {
  background-color: var(--p-action-secondary);
  color: var(--p-text-primary);
  border-color: var(--p-action-secondary-border);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
}

.p-btn--secondary:hover:not(:disabled) {
  background-color: var(--p-action-secondary-hover);
}

.p-btn--critical {
  background-color: transparent;
  color: var(--p-critical);
  border-color: var(--p-critical-border);
}

.p-btn--critical:hover:not(:disabled) {
  background-color: var(--p-critical-surface);
}

.p-btn:disabled {
  background-color: var(--p-surface-subdued);
  color: var(--p-text-disabled);
  border-color: var(--p-border-subdued);
  cursor: not-allowed;
}

/* Polaris Badges */
.p-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--p-space-1);
  padding: 2px var(--p-space-2);
  font-size: var(--p-font-size-xs);
  font-weight: 500;
  border-radius: var(--p-radius-pill);
  background-color: var(--p-badge-neutral-bg);
  color: var(--p-badge-neutral-text);
}

.p-badge--success {
  background-color: var(--p-success-surface);
  color: var(--p-success);
  border: 1px solid var(--p-success-border);
}

.p-badge--critical {
  background-color: var(--p-critical-surface);
  color: var(--p-critical);
  border: 1px solid var(--p-critical-border);
}

/* Polaris Input & Select Controls */
.p-input,
.p-select {
  width: 100%;
  padding: var(--p-space-2) var(--p-space-3);
  font-size: var(--p-font-size-sm);
  color: var(--p-text-primary);
  background-color: var(--p-surface);
  border: 1px solid var(--p-action-secondary-border);
  border-radius: var(--p-radius-sm);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.p-input:focus,
.p-select:focus {
  outline: none;
  border-color: var(--p-action-primary);
  box-shadow: 0 0 0 2px rgba(0, 91, 211, 0.2);
}

/* Polaris Slide-Over Drawer (Cart) */
.p-drawer-backdrop {
  position: fixed;
  inset: 0;
  background-color: var(--p-backdrop);
  z-index: 999;
  display: flex;
  justify-content: flex-end;
}

.p-drawer {
  width: 100%;
  max-width: 420px;
  height: 100vh;
  background-color: var(--p-surface);
  box-shadow: var(--p-shadow-drawer);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
```

---

## 3. Reference React Component Patterns

### Product Card Pattern (`ProductCard.jsx`)
- **Top Media**: 4:3 or 1:1 aspect-ratio container with `object-fit: cover` and a top-right `.p-badge--success` ("Verified Provenance").
- **Body Section (`.p-card__section`)**:
  - Subdued category & epoch tag (`color: var(--p-text-subdued)`, `font-size: 12px`).
  - Product Title (`font-size: 16px`, `font-weight: 600`, `color: var(--p-text-primary)`).
  - Formatted Price (`font-size: 18px`, `font-weight: 700`).
- **Footer Section (`.p-card__section`)**:
  - Two-button horizontal layout (`display: flex; gap: 8px;`):
    1. `.p-btn .p-btn--secondary` ("Details")
    2. `.p-btn .p-btn--primary` ("Add to Cart")
