// src/components/sections/ClientLogoLayangLayang.tsx
import Image from 'next/image';

const clientLogos = [
  '/assets/images/project/logms.png',
  '/assets/images/project/logogoogle.png',
  '/assets/images/project/logooyo.png',
  '/assets/images/project/logoairbnb.png',
  '/assets/images/project/logofedex.png',
  '/assets/images/project/logoamazon.png',
  '/assets/images/project/logobms.png',
  '/assets/images/project/logoola.png',
  '/assets/images/project/logowalmart.png',
];

export function ClientLogoDiamondGrid() {
  const rows = [[0], [1, 2], [3, 4, 5], [6, 7], [8]];

  const rowOffsets = [
    'md:ml-[7.5rem]', // Top row
    'md:ml-[4rem]',
    '',
    'md:ml-[4rem]',
    'md:ml-[7.5rem]',
  ];

  return (
    <section className="bg-accent-800 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white">Our Clients</h2>
        <p className="text-white">
          We have been working with some fortune 500 clients
        </p>
      </div>

      {/* MOBILE: 2 columns */}
      <div className="grid grid-cols-2 gap-6 px-4 sm:gap-8 md:hidden">
        {clientLogos.map((logo, index) => (
          <div
            key={index}
            className="flex h-20 w-full items-center justify-center rounded-lg bg-white shadow sm:h-24"
          >
            <Image
              src={logo}
              alt={`Client ${index + 1}`}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* DESKTOP: diamond layout */}
      <div className="hidden md:flex md:flex-col md:items-center md:gap-6">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={`flex gap-16 ${rowOffsets[rowIndex]}`}>
            {row.map((logoIndex) => (
              <div
                key={logoIndex}
                className={`flex h-20 w-20 items-center justify-center rounded-lg bg-white shadow sm:h-24 sm:w-24
                  ${
                    logoIndex === 0 || logoIndex === 8
                      ? 'ml-4 mr-32'
                      : logoIndex === 1 ||
                          logoIndex === 2 ||
                          logoIndex === 6 ||
                          logoIndex === 7
                        ? 'relative z-10 -mt-10 ml-20 mr-32'
                        : logoIndex === 5 || logoIndex === 3
                          ? 'relative z-20 -mt-10 ml-40 mr-40'
                          : ''
                  }
                `}
              >
                <Image
                  src={clientLogos[logoIndex % clientLogos.length]}
                  alt={`Client ${logoIndex + 1}`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
