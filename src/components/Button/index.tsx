
interface ButtonProps {
  children?: React.ReactNode;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Specify the variant
   */
  variant?: 'filled' | 'outlined';
  /**
   * Specify custom css classes
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  children,
  primary = false,
  variant = 'filled',
  className,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'primary' : 'secondary';
  const variantClass = variant === 'filled' ? `text-text-50 bg-${mode}` : `border-2 border-${mode} text-${mode}`

  return (
    <button
      type="button"
      className={`rounded-2xl px-6 py-2 ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
