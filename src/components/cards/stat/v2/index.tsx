import { Counter } from '@/src/components/counter';

export interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  counterSuffix: string;
}
import { cloneElement, isValidElement, ReactElement } from 'react';

export function StatCard({ icon, title, value, counterSuffix }: StatCardProps) {
  const styledIcon =
    isValidElement(icon) && typeof icon.type !== 'string'
      ? cloneElement(icon as ReactElement<Record<string, unknown>>, {
          className:
            'text-[#4AC4F3] text-[1.875rem] group-hover:rotate-y-180 transition-all duration-500 group-hover:delay-100',
        })
      : icon;

  return (
    <div className="group flex flex-col items-center text-center">
      <span className="mb-4 inline-grid h-[40px] w-[50px] place-items-center rounded-5 bg-gray-200 text-[#4AC4F3]">
        {styledIcon}
      </span>
      <h3 className="font-secondary text-xl font-bold leading-[1.25] md:text-2xl">
        <span className="text-[#4AC4F3]">
          <Counter end={value} suffix={counterSuffix} />
        </span>
        <span className="sr-only">Counter</span>
      </h3>

      <p className="mt-1 text-accent-900">{title}</p>
    </div>
  );
}
