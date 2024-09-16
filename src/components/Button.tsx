import cn from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onCustomMouseEnter?: (_word: string) => void;
  className?: string;
  size?: 'big' | 'small';
}

const Button = ({
  children,
  className,
  size = 'big',
  onCustomMouseEnter,
  type = 'button',
  ...rest
}: ButtonProps) => {
  `rounded-lg border border-solid border-[rgba(221,221,221,0.3)] px-8 py-3 font-semibold text-white hover:bg-gray-300 md:px-[50px] md:py-5 md:text-2xl ${className}`;
  return (
    <button
      type={type}
      onMouseEnter={() => onCustomMouseEnter?.(children as string)}
      className={cn(
        'rounded-lg border border-solid border-[rgba(221,221,221,0.3)] px-8 py-3 font-semibold text-white',
        size === 'big' && 'md:px-[50px] md:py-5 md:text-2xl',
        `${className}`,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
