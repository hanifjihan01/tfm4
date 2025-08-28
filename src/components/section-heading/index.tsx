import { SectionHeadingProps } from './interface';
import { cn } from '@/src/utils/shadcn';

/**
 * This component renders a text section with `subtitle`, `title`,
 * and `description`. It has styling options for alignment
 * @param SectionHeadingProps
 * @returns JSX.Element
 */
export function SectionHeading({
  title,
  subtitle,
  description,
  alignment = 'start',
  hasBottomSpacing = false,
  className,
}: SectionHeadingProps) {
  const wrapperClasses = cn(
    alignment === 'start' && 'text-left',
    alignment === 'center' && 'text-center',
    alignment === 'end' && 'text-right',
    { 'mb-10 md:mb-[3.75rem]': hasBottomSpacing },
    className
  );

  return (
    <div className={wrapperClasses}>
      <h2 className="text-center font-secondary text-xl font-bold leading-[1.25] text-white dark:text-white md:text-2xl">
        {title}
      </h2>
      {subtitle && (
        <span className="mt-[.625rem] block text-center font-secondary text-base font-bold uppercase leading-[1.5] tracking-widest text-gray-500 md:text-md">
          {subtitle}
        </span>
      )}
      {description && (
        <p className="mt-2 whitespace-pre-line text-white dark:text-white">
          {description}
        </p>
      )}
    </div>
  );
}
