import { ButtonHTMLAttributes } from 'react';
import { FC } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils/utils';

const buttonVariants = cva(['border', 'rounded-md', 'max-w-max'], {
    variants: {
        variant: {
            primary: [
                'bg-buttonSecondary',
                'text-white',
                'border-transparent',
                'duration-300',
                'hover:-translate-y-1',
            ],
            outline: ['bg-transparent', 'text-primary', 'border-primary'],
        },
        size: {
            small: ['text-sm', 'py-1', 'px-2'],
            medium: ['text-sm', 'py-2', 'px-4'],
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'medium',
    },
});

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}
const Button: FC<ButtonProps> = ({
    title,
    className,
    size,
    variant,
    ...props
}) => {
    return (
        <button
            {...props}
            className={cn(buttonVariants({ variant, size, className }))}
        >
            {title}
        </button>
    );
};

export default Button;
