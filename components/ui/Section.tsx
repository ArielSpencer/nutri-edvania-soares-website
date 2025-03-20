import { ReactNode, CSSProperties } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  skipContainer?: boolean;
  containerFullWidth?: boolean;
  sectionPadding?: boolean;
  background?: "primary" | "secondary" | "highlight" | "none";
  style?: CSSProperties;
}

const Section = ({
  children,
  className = "",
  id,
  containerClassName = "",
  skipContainer = false,
  containerFullWidth = false,
  sectionPadding = true,
  background = "primary",
  style,
}: SectionProps) => {
  const backgroundStyles = {
    primary: "bg-bg-primary",
    secondary: "bg-bg-secondary",
    highlight: "bg-bg-highlight/60",
    none: "",
  };

  const paddingClasses = sectionPadding ? "py-16" : "";
  const sectionClass = `${paddingClasses} ${skipContainer ? "w-full" : ""} ${backgroundStyles[background]} ${className}`;

  return (
    <section id={id} className={sectionClass} style={style}>
      {skipContainer ? (
        children
      ) : (
        <Container className={containerClassName} skipContainer={containerFullWidth}>
          {children}
        </Container>
      )}
    </section>
  );
};

export default Section;