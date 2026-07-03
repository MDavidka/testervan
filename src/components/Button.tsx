import { cn } from '../lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500/50',
          {
            'bg-accent-500 text-white hover:bg-accent-600 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40':
              variant === 'primary',
            'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700':
              variant === 'secondary',
            'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800':
              variant === 'ghost',
            'border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800':
              variant === 'outline',
          },
          {
            'text-sm px-3 py-1.5 gap-1.5': size === 'sm',
            'text-sm px-5 py-2.5 gap-2': size === 'md',
            'text-base px-7 py-3 gap-2.5': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;