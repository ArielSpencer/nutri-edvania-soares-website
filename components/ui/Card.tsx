import { ReactNode } from "react";

interface BaseComponentProps {
  children: ReactNode;
  className?: string;
}

const cardVariants = {
  default: "rounded-ee-xl rounded-ss-xl bg-bg-primary shadow-sm",
  highlight: "rounded-ee-lg rounded-ss-lg bg-secondary/20 border border-bg-highlight/10 shadow-md"
} as const;

type CardVariant = keyof typeof cardVariants;

export interface CardProps extends BaseComponentProps {
  variant?: CardVariant;
}

const Card = Object.assign(
  ({ 
    children, 
    className = "", 
    variant = "default" 
  }: CardProps) => {
    const baseStyles = "overflow-hidden";
    const cardStyles = `${baseStyles} ${cardVariants[variant]} ${className}`.trim();
    
    return (
      <div className={cardStyles}>
        {children}
      </div>
    );
  },
  {
    Image: ({ children, className = "" }: BaseComponentProps) => (
      <div className={`relative overflow-hidden bg-gray-200 h-80 text-right ${className}`}>
        {children}
      </div>
    ),
    
    Content: ({ children, className = "" }: BaseComponentProps) => (
      <div className={`p-6 ${className}`}>
        {children}
      </div>
    ),
    
    Title: ({ children, className = "" }: BaseComponentProps) => (
      <h3 className={`text-xl font-bold text-text-heading mb-3 ${className}`}>
        {children}
      </h3>
    ),
    
    Description: ({ children, className = "" }: BaseComponentProps) => (
      <p className={`text-text-body text-sm mb-4 ${className}`}>
        {children}
      </p>
    ),
    
    Footer: ({ children, className = "" }: BaseComponentProps) => (
      <div className={`mt-auto ${className}`}>
        {children}
      </div>
    )
  }
);

export { Card };