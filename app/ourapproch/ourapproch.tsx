'use client';

import Image from 'next/image';

const serviceData = [
  {
    id: 1,
    image: '/assets/images/service/ciwi.png',
    title: 'Artificial Intelligence (AI)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: '/assets/images/service/iconai1.png',
  },
  {
    id: 2,
    image: '/assets/images/service/rumah.png',
    title: 'Internet of Things (IoT) Solution',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: '/assets/images/service/iconiot.png',
  },
  {
    id: 3,
    image: '/assets/images/service/flowers.png',
    title: 'Software Management & Platform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: '/assets/images/service/iconsoftware.png',
  },
];

export function OurApproach() {
  return (
    <section className="bg-accent-900 py-16">
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-bold text-white md:text-3xl">
          Our Approach
        </h3>
        <p className="-mt-5 text-base text-white md:text-lg">
          Lorem ipsum dolor sit amet consectetur. Orci mattis.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 px-6 md:grid-cols-3 ">
        {serviceData.map((item) => (
          <div
            key={item.id}
            className="group relative  overflow-hidden rounded-xl bg-accent-900 shadow-md"
          >
            {/* Gambar utama */}
            <div className="relative h-96 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Icon bulat */}
            <div className="absolute left-1/2 -mt-8 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-cyan-300 shadow-lg">
              <Image
                src={item.icon}
                alt={`${item.title} icon`}
                width={24}
                height={24}
              />
            </div>

            {/* Konten */}
            <div className="px-6 pb-8 pt-12 text-center">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
