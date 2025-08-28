import { CustomLink } from '@/src/components/custom-link';
import Image from 'next/image';

import logoLight from 'public/assets/images/brand/brand-transformer.png';
// import logoDark from 'public/assets/images/brand/logotransforme02.png';

export function BrandLogo() {
  return (
    <CustomLink href="/">
      <Image
        className="logo-light dark:hidden"
        src={logoLight.src}
        width={logoLight.width}
        height={logoLight.height}
        placeholder="blur"
        blurDataURL={logoLight.blurDataURL}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
        sizes="100vw"
        priority
      />
      <Image
        className="logo-light hidden dark:block"
        src={logoLight.src}
        width={logoLight.width}
        height={logoLight.height}
        placeholder="blur"
        blurDataURL={logoLight.blurDataURL}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
        sizes="100vw"
        priority
      />
    </CustomLink>
  );
}
