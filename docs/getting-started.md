# Installation and Getting Started Guide

This guide will help you set up and start developing the Nutri Edvania Soares website project.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18.0.0 or later)
- npm (v9.0.0 or later)
- Git

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/arielspencer/nutri-edvania-soares-website.git
cd nutri-edvania-soares-website
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the necessary dependencies for the project, including:

- Next.js
- React
- TypeScript
- Tailwind CSS v4
- ESLint

### 3. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit the `.env.local` file to add any necessary API keys or configuration.

## Development Workflow

### Starting the Development Server

```bash
npm run dev
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
```

### Running Production Build Locally

```bash
npm run start
```

### Linting

```bash
npm run lint
```

## Key Features and How to Use Them

### 1. Tailwind CSS Theme

The project uses a custom Tailwind CSS v4 theme defined in `app/globals.css`. See [styles.md](/docs/styles.md) for detailed information on using the theme.

### 2. Page Creation

To create a new page:

1. Create a new directory in the `app` folder (e.g., `app/services/`)
2. Add a `page.tsx` file in the directory:

```tsx
export default function ServicesPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-text-heading text-3xl font-primary mb-6">Our Services</h1>
      {/* Page content */}
    </div>
  );
}
```

### 3. Components

Create reusable components in the `components` directory:

```tsx
// components/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  const baseClasses = "py-2 px-6 rounded-md transition-all duration-normal ease-standard";
  
  const variantClasses = {
    primary: "bg-btn-primary hover:bg-btn-primary-hover text-text-heading",
    secondary: "bg-btn-secondary hover:bg-btn-secondary-hover text-text-light",
    accent: "bg-btn-accent hover:bg-btn-accent-hover text-text-heading"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

## Next Steps

After setting up the project, you may want to:

1. Customize the theme colors in `app/globals.css`
2. Create core layout components (header, footer, etc.)
3. Implement the pages design
4. Set up page routes for all required sections

## Troubleshooting

### Common Issues

- **Build errors**: Make sure your Node.js version is compatible with Next.js
- **Tailwind classes not working**: Check that the Tailwind configuration is properly set up
- **Type errors**: Run `npm run lint` to identify and fix TypeScript issues

### Getting Help

If you encounter any issues not covered in this documentation:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Check the [Tailwind CSS v4 documentation](https://tailwindcss.com/docs)
3. Open an [Issue](https://github.com/ArielSpencer/nutri-edvania-soares-website/issues) reporting the problem you found.