const Styles = {
  labelBase: "block text-text-heading text-sm font-medium mb-1",
  inputBase: "w-full px-4 py-2 bg-bg-primary border border-bg-highlight rounded-sm",
  errorBase: "mt-1 text-sm text-text-attention",
  focusBase: "focus:border-accent/10 focus:ring focus:ring-accent focus:outline-none",
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options?: Array<{ value: string; label: string }>;
};

type PolymorphicProps<E extends "input" | "textarea" | "select"> =
  E extends "input"
    ? InputProps
    : E extends "textarea"
    ? TextareaProps
    : E extends "select"
    ? SelectProps
    : never;

interface BaseProps {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  className?: string;
  wrapperClassName?: string;
}

type BaseFieldProps<E extends "input" | "textarea" | "select"> = BaseProps & {
  as: E;
  options?: E extends "select"
    ? Array<{ value: string; label: string }>
    : never;
} & PolymorphicProps<E>;

const getInputClassName = (error?: string) =>
  `${Styles.inputBase} ${Styles.focusBase} ${error ? "border-error" : ""}`;

export function BaseField<E extends "input" | "textarea" | "select">({
  label,
  id,
  error,
  required,
  className = "",
  wrapperClassName = "",
  as,
  options,
  ...props
}: BaseFieldProps<E>) {
  const renderField = () => {
    switch (as) {
      case "select":
        return (
          <select
            id={id}
            className={`${getInputClassName(error)} ${className}`}
            required={required}
            {...(props as SelectProps)}
          >
            {(options as SelectProps["options"])?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case "textarea":
        return (
          <textarea
            id={id}
            className={`${getInputClassName(error)} ${className}`}
            required={required}
            {...(props as TextareaProps)}
          />
        );

      case "input":
      default:
        return (
          <input
            id={id}
            className={`${getInputClassName(error)} ${className}`}
            required={required}
            {...(props as InputProps)}
          />
        );
    }
  };

  return (
    <div className={`w-full ${wrapperClassName}`}>
      <label htmlFor={id} className={Styles.labelBase}>
        {label}
        {required && <span className="text-text-attention ml-1">*</span>}
      </label>
      {renderField()}
      {error && <p className={Styles.errorBase}>{error}</p>}
    </div>
  );
}

export const InputField = (props: Omit<BaseFieldProps<"input">, "as">) => {
  return <BaseField as="input" {...props} />;
};

export const TextareaField = (
  props: Omit<BaseFieldProps<"textarea">, "as">
) => {
  return <BaseField as="textarea" {...props} />;
};

export const SelectField = (props: Omit<BaseFieldProps<"select">, "as">) => {
  return <BaseField as="select" {...props} />;
};

interface FormGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const FormGroup = ({ children, className = "" }: FormGroupProps) => {
  return <div className={`space-y-4 ${className}`}>{children}</div>;
};

interface FormRowProps {
  children: React.ReactNode;
  className?: string;
}

export const FormRow = ({ children, className = "" }: FormRowProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {children}
    </div>
  );
};

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  className?: string;
}

export const Form = ({
  children,
  onSubmit,
  className = "",
  ...props
}: FormProps) => {
  return (
    <form onSubmit={onSubmit} className={`space-y-4 ${className}`} {...props}>
      {children}
    </form>
  );
};
