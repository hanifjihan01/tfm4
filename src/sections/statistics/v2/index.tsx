// StatisticsSection.tsx

import { Container } from '@/src/components/container';
import { StatCard, StatCardProps } from 'src/components/cards/stat/v2';
import { statisticsSectionData } from '@/data/statistics-section/v2';
import { cn } from '@/src/utils/shadcn';
import { SectionProps } from '@/src/common-types';

export interface StatisticsSectionProps {
  statistics: StatCardProps[];
}

export function StatisticsSection({ className }: SectionProps) {
  const { statistics } = statisticsSectionData;

  return (
    <section
      className={cn('relative -mt-20 pb-12 pt-16', className)}
      style={{
        background:
          'linear-gradient(to bottom, #38bdf8 0% 50%, transparent 50% 100%)',
      }}
    >
      <Container>
        {statistics && statistics.length > 0 && (
          <div className="relative z-10 rounded-xl bg-accent-800 p-6 shadow-lg">
            <div className="flex flex-wrap justify-between gap-y-6">
              {statistics.map((stat, index) => (
                <div key={index} className="min-w-[200px] flex-1">
                  <StatCard {...stat} />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
