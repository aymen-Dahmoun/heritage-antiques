---
name: shopify-design-system
description: Guidelines, design tokens, and component blueprints for building React web interfaces using Shopify's Polaris design system. Use when styling e-commerce apps, dashboards, product catalogs, or shopping carts following Shopify Polaris visual patterns, layout hierarchy, and CSS variables.
---

# Shopify Polaris Design System for React

A structured design system guideline for implementing clean, accessible, merchant-grade e-commerce interfaces inspired by Shopify Polaris using pure CSS variables and modular React components.

## When to Use

- Building or styling React e-commerce applications, product grids, filter bars, or slide-over shopping carts.
- Applying Shopify Polaris color tokens, elevation shadows, spacing scales, and typography hierarchy.
- Creating accessible UI components (Cards, Badges, Banners, Buttons, Modals, and Drawers) without heavy external UI library dependencies.

## Workflow Steps

1. **Inject Global Design Tokens**: Ensure `src/styles/polaris-tokens.css` (from `references/polaris-components.md`) is imported at the root (`main.jsx` or `index.js`).
2. **Apply Surface & Canvas Hierarchy**:
   - Set the main application background (`body`) to `--p-canvas` (`#F1F2F3`).
   - Wrap distinct functional groups (Product Cards, Filter Bars, Order Summaries) in `--p-surface` (`#FFFFFF`) containers with `--p-shadow-card` and `--p-radius-base` (`8px`).
3. **Use Semantic Badges & Status Indicators**:
   - Represent item metadata (e.g., Epoch, Authenticity, Stock status) using Polaris pill badges (`--p-badge-bg`, `--p-badge-success-bg`, `--p-badge-critical-bg`).
4. **Enforce Button Hierarchy**:
   - Limit `--p-action-primary` (`#005BD3` or `#1A1A1A` high-contrast merchant style) to one primary call-to-action per card or drawer (e.g., "Add to Collection", "Proceed to Acquisition").
   - Use secondary bordered buttons (`--p-action-secondary-border`) for inspection/filtering ("View Provenance", "Reset Filters").
   - Use critical/destructive styling (`--p-critical`) for item removal in the cart.
5. **Maintain Focus & Accessibility**:
   - Every interactive control must display a `2px solid var(--p-action-primary)` focus ring on `:focus-visible`.

## Gotchas & Restrictions

- **No Heavy Gradients or Neon Accents**: Polaris relies on crisp 1px borders (`#E1E3E5`), subtle elevation shadows, and high-contrast typography rather than decorative blurs or loud gradients.
- **Strict Spacing Grid**: Always use multiples of `4px` (`--p-space-1` through `--p-space-8`) for padding, margins, and gaps.
- **Reference Implementation**: See `references/polaris-components.md` for complete copy-pasteable CSS tokens and React component patterns.
