import type { ImageMetadata } from "astro";

import reviewBbb from "@assets/images/logos/review-bbb.png";
import reviewGoogle from "@assets/images/logos/review-google.png";
import reviewFacebook from "@assets/images/logos/review-facebook.png";
import reviewNicejob from "@assets/images/logos/review-nicejob.png";
import reviewAngi from "@assets/images/logos/review-angi.png";

import certBbb from "@assets/images/logos/cert-bbb.png";
import certNadca from "@assets/images/logos/cert-nadca.png";
import certNfpa from "@assets/images/logos/cert-nfpa.png";
import certCsia from "@assets/images/logos/cert-csia.png";
import certNcsg from "@assets/images/logos/cert-ncsg.png";
import certEpa from "@assets/images/logos/cert-epa.png";
import certServiceBadge from "@assets/images/logos/cert-service-badge.png";
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
    src: certBbb,
    alt: "BBB accredited business logo",
    href: "https://www.bbb.org/",
  },
  {
    src: certNadca,
    alt: "NADCA related credential logo",
    href: "https://nadca.com/",
  },
  {
    src: certNfpa,
    alt: "NFPA related association logo",
    href: "https://www.nfpa.org/",
  },
  {
    src: certCsia,
    alt: "Industry certification logo",
    href: "https://www.csia.org/",
  },
  {
    src: certNcsg,
    alt: "Professional training affiliation logo",
    href: "https://www.ncsg.org/",
  },
  {
    src: certEpa,
    alt: "Air quality and safety credential logo",
    href: "https://www.epa.gov/",
  },
  {
    src: certServiceBadge,
    alt: "Service quality badge",
    href: "https://www.google.com/",
  },
  {
    src: certCdet,
    alt: "CDET logo",
    href: "https://www.csia.org/",
  },
];
