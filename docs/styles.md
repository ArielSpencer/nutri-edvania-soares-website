# Styling Guide

How to use the custom styling system in the Nutri Edvania Soares website project. This project uses Tailwind CSS v4 with a custom theme configuration.

## Theme Configuration

Our theme is defined in `app/globals.css` using Tailwind CSS v4's `@theme` directive. The theme uses semantic naming to make it easier to maintain and update styles.

### Color System

The color system is organized semantically rather than by specific color names. This makes it easier to update the visual design without changing class names throughout the codebase.

#### Core Semantic Colors

```css
--color-primary: oklch(100% 0 0);           /* White */
--color-secondary: oklch(0.68 0.08 67.43);  /* Camel */
--color-accent: oklch(0.49 0.13 142.41);    /* Fern Green */
```

#### Text Colors

```css
--color-text-body: oklch(0.51 0.003 264.97);  /* Dim Gray */
--color-text-heading: oklch(0.42 0.07 67.16); /* Coffee Brown */
--color-text-light: oklch(100% 0 0);          /* White */
```

#### Background Colors

```css
--color-bg-primary: oklch(100% 0 0);           /* White */
--color-bg-secondary: oklch(0.93 0.008 98.19); /* Alabaster */
--color-bg-highlight: oklch(0.85 0.08 79.87);  /* Sand */
```

#### Button Colors

```css
--color-btn-primary: oklch(0.85 0.08 79.87);      /* Sand */
--color-btn-primary-hover: oklch(0.8 0.18 78.81); /* Saffron */
--color-btn-secondary: oklch(0.49 0.13 142.41);   /* Fern Green */
--color-btn-secondary-hover: oklch(0.85 0.08 79.87); /* Sand */
```

### Typography

```css
--font-primary: "Lato", system-ui, sans-serif;
```

### Border Radius

```css
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
```

### Animation

```css
--ease-standard: cubic-bezier(0.3, 0, 0, 1);
--ease-emphasized: cubic-bezier(0.2, 0, 0, 1);
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
```

## Using the Theme

### Text Styling

```jsx
// Headings
<h1 className="text-text-heading text-4xl font-primary">Heading 1</h1>
<h2 className="text-text-heading text-3xl font-primary">Heading 2</h2>

// Body text
<p className="text-text-body">Regular paragraph text</p>

// Accent text
<p className="text-accent">Highlighted text</p>
```

### Background Colors

```jsx
// Main background
<div className="bg-bg-primary">Main content area</div>

// Secondary background
<div className="bg-bg-secondary">Secondary section</div>

// Highlighted area
<div className="bg-bg-highlight">Featured content</div>
```

### Buttons

```jsx
// Primary button
<button className="bg-btn-primary hover:bg-btn-primary-hover text-text-heading py-2 px-6 rounded-md transition-all duration-normal ease-standard">
  Primary Button
</button>

// Secondary button
<button className="bg-btn-secondary hover:bg-btn-secondary-hover text-text-light hover:text-text-heading py-2 px-6 rounded-md transition-all duration-normal ease-standard">
  Secondary Button
</button>
```

### Animations

```jsx
// Standard transition
<div className="transition-all duration-normal ease-standard">
  Element with standard transition
</div>

// Fast transition with emphasized easing
<div className="transition-all duration-fast ease-emphasized">
  Element with fast, emphasized transition
</div>
```

## Best Practices

1. **Use semantic class names**: Always use the semantic class names (e.g., `text-text-heading`) rather than direct color classes (e.g., `text-brown-950`).

2. **Consistent spacing**: Use Tailwind's built-in spacing utilities (m-4, p-6, etc.) for consistent spacing throughout the application.

3. **Responsive design**: Use responsive prefixes (sm:, md:, lg:, xl:) to ensure the design works well on all screen sizes.

4. **Component consistency**: Reuse the same patterns for similar elements to maintain a cohesive design.

## Component Examples

### Card Component

```jsx
<div className="bg-bg-primary p-6 rounded-lg shadow-md border border-bg-secondary">
  <h3 className="text-xl font-primary text-text-heading mb-2">Card Title</h3>
  <p className="text-text-body mb-4">Card content.</p>
  <button className="bg-btn-primary hover:bg-btn-primary-hover text-text-heading py-1 px-4 rounded-md text-sm transition-all duration-fast ease-standard">
    Learn More
  </button>
</div>
```

### Alert Component

```jsx
<div className="bg-bg-highlight p-4 rounded-md border-l-4 border-accent">
  <h4 className="text-text-heading font-semibold mb-1">Alert Title</h4>
  <p className="text-text-body">Alert message.</p>
</div>
```

## Updating the Theme

To change the visual design while maintaining layout and structure:

1. Edit the variable values in `app/globals.css` under the `@theme` directive
2. Test the changes on the theme showcase page at `/showcase`
3. Make any necessary adjustments

Since we're using semantic naming, you won't need to change any of the class names.