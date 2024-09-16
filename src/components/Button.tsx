import cn from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onCustomMouseEnter?: (_word: string) => void;
  className?: string;
  size: 'big' | 'small';
  variant: 'text' | 'outlined';
}

const Button = ({
  children,
  className,
  size = 'big',
  variant = 'outlined',
  onCustomMouseEnter,
  type = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      onMouseEnter={() => onCustomMouseEnter?.(children as string)}
      className={cn(
        'text-white',
        size === 'big' && 'md:px-[50px] md:py-5 md:text-2xl',
        variant === 'outlined' &&
          'rounded-lg border border-solid border-[rgba(221,221,221,0.3)] px-8 py-3 font-semibold',
        `${className}`,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
