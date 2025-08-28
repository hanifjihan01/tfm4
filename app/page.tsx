import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
import { StatisticsSection } from '@/src/sections/statistics/v2';
import { ClientLogoDiamondGrid } from '@/src/components/sections/ClientLogoDiamondGrid';
import { OurApproach } from './ourapproch/ourapproch';

import { TestimonialSection } from '@/src/sections/testimonial/v2';

import { HeroBaru } from './heroBaru/HeroBaru';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transforme Indonesia',
  description: 'Transforme - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />

      <div className="mb-10">
        <HeroBaru />
      </div>

      {/* <Hero /> */}
      <div className="relative">
        {/* Background biru di atas setengah tinggi */}
        <div className="absolute left-1/2 top-0 z-0 w-full max-w-[1603px] -translate-x-1/2 "></div>

        {/* Konten di atas background */}
        <div className="relative z-10 bg-accent-900 ">
          <StatisticsSection />
        </div>
      </div>
      <div className="bg-accent-900 ">
        <OurApproach />
      </div>

      {/* <ServiceSection className="!pb-0" {...serviceSectionData} /> */}

      <AboutSection />

      <TestimonialSection />
      <ClientLogoDiamondGrid />

      <Footer />
    </>
  );
}
