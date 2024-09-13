interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onCustomMouseEnter?: (_word: string) => void;
  className?: string;
}

const Button = ({
  children,
  className,
  onCustomMouseEnter,
  type = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      onMouseEnter={() => onCustomMouseEnter?.(children as string)}
      className={`rounded-lg border border-solid border-[rgba(221,221,221,0.3)] px-8 py-3 font-semibold text-white md:px-[50px] md:py-5 md:text-2xl ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
