import React, { ReactNode, ElementType, CSSProperties } from "react";

type AsProps<E extends ElementType = ElementType> = {
  as?: E;
};

type PropsWithAs<
  E extends ElementType,
  P = Record<string, never>
> = AsProps<E> & Omit<React.ComponentPropsWithoutRef<E>, keyof AsProps> & P;

interface ContainerOwnProps {
  children: ReactNode;
  className?: string;
  skipContainer?: boolean;
  style?: CSSProperties;
}

export type ContainerProps<E extends ElementType = "div"> = PropsWithAs<
  E,
  ContainerOwnProps
>;

const Container = <E extends ElementType = "div">({
  children,
  className = "",
  as,
  skipContainer = false,
  style,
  ...rest
}: ContainerProps<E>) => {
  const Component = as || "div";

  const paddingClasses = "px-6 md:px-8 lg:px-12";
  const containerClass = skipContainer
    ? `w-full ${paddingClasses} ${className}`
    : `container mx-auto ${paddingClasses} ${className}`;

  return (
    <Component className={containerClass} style={style} {...rest}>
      {children}
    </Component>
  );
};

export default Container;