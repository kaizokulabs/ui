
interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Specify custom css classes
   */
  className?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  className,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'primary' : 'secondary';

  return (
    <button
      type="button"
      className={`rounded-2xl px-6 py-2 text-text-50 ${mode} bg-${mode}-300 ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};
