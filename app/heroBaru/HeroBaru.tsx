'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Container } from '@/src/components/container';
import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import styles from './hero.module.css';
import type { Swiper as SwiperType } from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const heroData = {
  items: [
    {
      image: {
        src: '/assets/images/hero/barugambar.png',
        alt: 'hero image 1',
      },
      title: 'Transforme Indonesia',
      button: {
        label: 'More Info',
        href: '/#about-us',
      },
    },
  ],
};

export function HeroBaru() {
  const swiperRef = useRef<SwiperType>();
  const { items } = heroData;

  return (
    <section className={styles['hero']}>
      {items && items.length > 0 && (
        <Swiper
          effect="fade"
          loop={false}
          speed={300}
          autoplay={{ delay: 3000 }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex items-center justify-start overflow-hidden py-16 sm:py-24 lg:min-h-screen lg:py-[9.375rem]">
                {/* Background */}
                <div
                  className={cn(
                    'absolute inset-0 -z-1 bg-cover bg-no-repeat',
                    styles['hero-bg']
                  )}
                  style={{ backgroundImage: `url(${item.image.src})` }}
                />

                <Container>
                  <div
                    className={cn(
                      'relative z-10 mt-2 max-w-[800px] text-left text-accent-900 dark:text-accent-900 sm:mt-12 lg:mt-[60px]',
                      styles['hero-content']
                    )}
                  >
                    <div className="space-y-4 sm:space-y-6 md:space-y-8">
                      {/* Judul */}
                      <h1 className="md:text-5xl lg:text-8xl text-3xl font-bold leading-tight text-sky-500 sm:text-4xl">
                        {item.title}
                      </h1>

                      {/* Sub Judul */}
                      <p className="text-base text-gray-800 dark:text-gray-800 sm:text-lg md:text-xl">
                        Solusi Kebutuhan Digital Anda!
                      </p>

                      {/* Tombol */}
                      <Button
                        asChild
                        className=" rounded-md bg-sky-500 px-4 py-2 text-base font-semibold text-white hover:bg-sky-600 sm:px-6 sm:py-3 sm:text-lg"
                      >
                        <CustomLink
                          aria-label={item.button.label}
                          href={item.button.href}
                        >
                          <span>{item.button.label}</span>
                        </CustomLink>
                      </Button>
                    </div>
                  </div>
                </Container>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
