import { ReactNode, ElementType } from "react";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "body" | "bodySmall" | "caption";
type TypographyColor = "default" | "heading" | "light" | "accent";

type AsProps<E extends ElementType = ElementType> = {
  as?: E;
};

type PropsWithAs<
  E extends ElementType,
  P = Record<string, never>
> = AsProps<E> & Omit<React.ComponentPropsWithoutRef<E>, keyof AsProps> & P;

interface TypographyOwnProps {
  children: ReactNode;
  className?: string;
  variant?: TypographyVariant;
  color?: TypographyColor;
}

export type TypographyProps<E extends ElementType = "p"> = PropsWithAs<
  E,
  TypographyOwnProps
>;

const getDefaultTag = (variant: TypographyVariant): ElementType => {
  switch (variant) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "caption":
      return "span";
    default:
      return "p";
  }
};

const Typography = <E extends ElementType = "p">({
  children,
  className = "",
  variant = "body",
  color = "default",
  as,
  ...rest
}: TypographyProps<E>) => {
  const Component = as || getDefaultTag(variant);

  const variantStyles = {
    h1: "text-3xl md:text-4xl lg:text-5xl font-bold",
    h2: "text-3xl md:text-4xl font-bold",
    h3: "text-2xl font-bold",
    h4: "text-xl font-semibold",
    h5: "text-lg font-medium",
    body: "text-base",
    bodySmall: "text-sm",
    caption: "text-xs",
  };

  const colorStyles = {
    default: "text-text-body",
    heading: "text-text-heading",
    light: "text-text-light",
    accent: "text-accent",
  };

  const combinedStyles =
    `${variantStyles[variant]} ${colorStyles[color]} ${className}`.trim();

  return (
    <Component className={combinedStyles} {...rest}>
      {children}
    </Component>
  );
};

export default Typography;
