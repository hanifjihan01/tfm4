'use client';

import { aboutSectionData } from '@/data/about-section/v1';
import { Container } from '@/src/components/container';

export interface AboutSectionProps {
  images: {
    [key: string]: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  vissionMission?: {
    subtitle?: string;
    title?: string;
    vision?: string;
  };
  visionMission?: {
    vision?: string;
  };
  keyPoints: Array<Record<string, unknown>>;
}

export function AboutSection() {
  const { vissionMission, visionMission } = aboutSectionData;

  return (
    <section
      id="about-us"
      className="section-padding-primary overflow-hidden bg-accent-900"
    >
      <Container>
        <div className="flex justify-center">
          <div className="w-full max-w-7xl rounded-xl border border-t-0 border-accent-800 bg-accent-800 p-8 text-center text-white shadow-[4px_4px_12px_rgba(0,0,0,0.05),-4px_4px_12px_rgba(0,0,0,0.05)]">
            {vissionMission?.vision && (
              <div className="mt-6">
                <h4 className="text-xl font-bold text-white">About Us</h4>
                <p className="mt-2">{vissionMission.vision}</p>
              </div>
            )}

            {visionMission?.vision && (
              <div className="mt-6">
                <h4 className="text-xl font-bold text-white">
                  Vision & Mission
                </h4>
                <p className="mt-2">{visionMission.vision}</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
