# SingletonsGroup Design Guide

## Overview
This design guide establishes the visual language and component patterns for the SingletonsGroup website. It follows a clean, modern aesthetic inspired by Mercor's design system, focusing on clarity, simplicity, and professionalism.

## Brand Colors

### Primary Colors
- **Royal Blue (`#0057D9`)**: Main brand color, used for primary buttons, links, and key UI elements
- **Royal Blue Dark (`#0046B0`)**: Used for hover states and active elements

### Neutral Colors
- **Gray 50 (`#F9FAFB`)**: Lightest gray, used for subtle backgrounds and hover states
- **Gray 100 (`#F5F7FA`)**: Light gray, used for section backgrounds and dividers
- **Gray 200 (`#E4E7EB`)**: Used for borders and separators
- **Gray 300 (`#CBD2D9`)**: Used for disabled elements
- **Gray 400 (`#9AA5B1`)**: Used for secondary text
- **Gray 500 (`#7B8794`)**: Used for placeholders
- **Gray 600 (`#616E7C`)**: Used for body text
- **Gray 700 (`#52606D`)**: Used for prominent body text
- **Gray 800 (`#3E4C59`)**: Used for sub-headings
- **Gray 900 (`#323F4B`)**: Used for headings and important text

### Text Colors
- **Main Text (`--color-text-main`, `#000000`)**: Black - Used for headings and important content
- **Subtext (`--color-text-sub`, `#4B5563`)**: Medium Gray - Used for body text and descriptions
- **Accent Text (`--color-text-accent`, `#0057D9`)**: Royal Blue - Used for links, CTAs, and highlighted text

### Semantic Colors
- **Success (`#10B981`)**: Green color for success states
- **Warning (`#FBBF24`)**: Yellow color for warning states
- **Error (`#EF4444`)**: Red color for error states
- **Info (`#3B82F6`)**: Blue color for informational states

## Typography

### Font Family
- **System Font Stack**: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`
- We use the system font stack for better performance and native look on all devices

### Font Sizes
- **Display**: 48px (3rem)
- **H1**: 40px (2.5rem)
- **H2**: 32px (2rem)
- **H3**: 24px (1.5rem)
- **H4**: 20px (1.25rem)
- **Body Large**: 18px (1.125rem)
- **Body**: 16px (1rem)
- **Body Small**: 14px (0.875rem)
- **Caption**: 12px (0.75rem)

### Font Weights
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

### Letter Spacing
- **Headings**: -0.025em (tight)
- **Body Text**: -0.01em (slightly tight)

### Line Heights
- **Headings**: 1.2
- **Body Text**: 1.5

## Spacing System

We use a 4px (0.25rem) baseline grid for consistent spacing:

- **2xs**: 4px (0.25rem)
- **xs**: 8px (0.5rem)
- **sm**: 12px (0.75rem)
- **md**: 16px (1rem)
- **lg**: 24px (1.5rem)
- **xl**: 32px (2rem)
- **2xl**: 48px (3rem)
- **3xl**: 64px (4rem)
- **4xl**: 96px (6rem)

## UI Components

### Buttons

#### Primary Button
- Background: Royal Blue
- Text: White
- Border Radius: Full (rounded-full)
- Padding: 12px 20px (py-3 px-5)
- Hover: Royal Blue Dark
- Shadow: Small shadow (shadow-sm)

#### Secondary Button
- Background: White
- Text: Subtext color (--color-text-sub)
- Border: 2px Gray 200
- Border Radius: Full (rounded-full)
- Padding: 12px 20px (py-3 px-5)
- Hover: Gray 50
- Shadow: None

#### Outline Button
- Background: Transparent
- Text: Accent color (--color-text-accent)
- Border: 2px Royal Blue
- Border Radius: Full (rounded-full)
- Padding: 12px 20px (py-3 px-5)
- Hover: Royal Blue at 5% opacity
- Shadow: None

### Cards
- Background: White
- Border: 1px Gray 200
- Border Radius: 12px (rounded-xl)
- Padding: 24px (p-6)
- Shadow: Extra small (shadow-sm)
- Hover: Shadow medium, border Royal Blue

### Links
- Text: Accent color (--color-text-accent)
- Hover: Royal Blue Dark, underline

### Form Elements
- Background: White
- Border: 1px Gray 300
- Border Radius: 8px (rounded-lg)
- Focus: Royal Blue border, light blue focus ring

## Layout

### Container
- Max Width: 1280px (80rem)
- Padding: 16px (1rem) on small screens, 32px (2rem) on larger screens

### Grid System
- 12-column grid
- Gutter: 32px (2rem)

### Header
- Height: 64px (4rem)
- Padding: 0 32px (0 2rem)
- Background: White
- Shadow: Extra small when scrolled

### Section Spacing
- Vertical Padding: 64px (4rem) on desktop, 48px (3rem) on mobile

## Responsive Breakpoints

- **sm**: 640px (Mobile)
- **md**: 768px (Tablet)
- **lg**: 1024px (Desktop)
- **xl**: 1280px (Large Desktop)
- **2xl**: 1536px (Extra Large Desktop)

## Motion & Animation

- **Duration**: 200-300ms for transitions
- **Easing**: Ease-out for natural motion
- **Usage**: Use sparingly for meaningful interactions

## Accessibility

- **Color Contrast**: Maintain a minimum of 4.5:1 contrast ratio for text
- **Focus States**: Clearly visible focus indicators for keyboard navigation
- **Text Size**: Minimum body text size of 16px
- **Alt Text**: Descriptive alt text for all images

## CSS Variables Usage

The following CSS variables should be used for text colors throughout the application:

```css
--color-text-main: #000000;    /* For headings and important content */
--color-text-sub: #4B5563;     /* For body text and descriptions */
--color-text-accent: #0057D9;  /* For links, CTAs, and highlighted text */
```

Use these in Tailwind classes as:
- `text-text-main` - For headings and important content
- `text-text-sub` - For body text and descriptions
- `text-text-accent` - For links, CTAs, and highlighted text

## Best Practices

1. **Consistency**: Follow these guidelines for all elements
2. **Whitespace**: Use generous whitespace to improve readability
3. **Hierarchy**: Maintain clear visual hierarchy with sizing and spacing
4. **Simplicity**: Keep interfaces clean and uncluttered
5. **Alignment**: Use left-alignment for text content (Mercor-style)
6. **Limited Animation**: Use subtle animations only for purposeful interactions
7. **Mobile-First**: Design for mobile first, then enhance for larger screens 