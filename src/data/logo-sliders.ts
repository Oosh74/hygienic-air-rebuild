import type { ImageMetadata } from "astro";

import reviewBbb from "@assets/images/logos/review-bbb.png";
import reviewGoogle from "@assets/images/logos/review-google.png";
import reviewFacebook from "@assets/images/logos/review-facebook.png";
import reviewNicejob from "@assets/images/logos/review-nicejob.png";
import reviewAngi from "@assets/images/logos/review-angi.png";

import certAshrae from "@assets/images/logos/cert-bbb.png";
import certBbb from "@assets/images/logos/cert-nadca.png";
import certNfpa from "@assets/images/logos/cert-nfpa.png";
import certNcsg from "@assets/images/logos/cert-csia.png";
import certIaqa from "@assets/images/logos/cert-ncsg.png";
import certEpa from "@assets/images/logos/cert-epa.png";
import certCsia from "@assets/images/logos/cert-service-badge.png";
import certCdet from "@assets/images/logos/cert-cdet.png";

interface LogoItem {
  src: ImageMetadata;
  alt: string;
  href: string;
}

export const reviewPlatformLogos: LogoItem[] = [
  {
    src: reviewBbb,
    alt: "BBB Accredited Business",
    href: "https://www.bbb.org/",
  },
  {
    src: reviewGoogle,
    alt: "Google reviews",
    href: "https://www.google.com/",
  },
  {
    src: reviewFacebook,
    alt: "Facebook reviews",
    href: "https://www.facebook.com/",
  },
  {
    src: reviewNicejob,
    alt: "NiceJob reviews",
    href: "https://nicejob.com/",
  },
  {
    src: reviewAngi,
    alt: "Angi reviews",
    href: "https://www.angi.com/",
  },
];

export const certificationLogos: LogoItem[] = [
  {
    src: certAshrae,
    alt: "ASHRAE affiliated logo",
    href: "https://www.ashrae.org/",
  },
  {
    src: certBbb,
    alt: "BBB accredited business logo",
    href: "https://www.bbb.org/",
  },
  {
    src: certNfpa,
    alt: "NFPA compliance logo",
    href: "https://www.nfpa.org/",
  },
  {
    src: certNcsg,
    alt: "National Chimney Sweep Guild logo",
    href: "https://www.ncsg.org/",
  },
  {
    src: certIaqa,
    alt: "IAQA certification logo",
    href: "https://iaqa.org/",
  },
  {
    src: certEpa,
    alt: "EPA lead-safe certification logo",
    href: "https://www.epa.gov/",
  },
  {
    src: certCsia,
    alt: "Chimney Safety Institute of America logo",
    href: "https://www.csia.org/",
  },
  {
    src: certCdet,
    alt: "Certified Dryer Exhaust Technician logo",
    href: "https://www.csia.org/certified-dryer-exhaust-technician/",
  },
  {
    src: certAshrae,
    alt: "ASHRAE affiliated logo",
    href: "https://www.ashrae.org/",
  },
  {
    src: certBbb,
    alt: "BBB accredited business logo",
    href: "https://www.bbb.org/",
  },
];
