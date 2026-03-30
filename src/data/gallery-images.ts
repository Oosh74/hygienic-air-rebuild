import type { ImageMetadata } from "astro";

export interface GalleryImage {
  src: ImageMetadata;
  alt: string;
}

const homeGalleryImageModules = import.meta.glob<ImageMetadata>(
  "../assets/images/gallery/home/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const galleryPageImageModules = import.meta.glob<ImageMetadata>(
  "../assets/images/gallery/page/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

const homeGallerySources = Object.values(homeGalleryImageModules).sort((a, b) =>
  a.src.localeCompare(b.src)
);
const galleryPageSources = Object.values(galleryPageImageModules).sort((a, b) =>
  a.src.localeCompare(b.src)
);

const requireImage = (
  sources: ImageMetadata[],
  index: number,
  label: string
): ImageMetadata => {
  const image = sources[index];
  if (!image) {
    throw new Error(`Missing expected gallery image for ${label} at index ${index}.`);
  }
  return image;
};

export const homeGalleryImages: GalleryImage[] = [
  {
    src: requireImage(homeGallerySources, 0, "homeGalleryImages"),
    alt: "Two Hygienic Air trucks with hoses outside a building at night.",
  },
  {
    src: requireImage(homeGallerySources, 1, "homeGalleryImages"),
    alt: "Technician inspecting material near a tile roof.",
  },
  {
    src: requireImage(homeGallerySources, 2, "homeGalleryImages"),
    alt: "Hygienic Air truck parked outside a commercial building.",
  },
  {
    src: requireImage(homeGallerySources, 3, "homeGalleryImages"),
    alt: "Service van, ladder, and hose set up at a residential property.",
  },
  {
    src: requireImage(homeGallerySources, 4, "homeGalleryImages"),
    alt: "Vacuum truck connected to a home during duct service.",
  },
  {
    src: requireImage(homeGallerySources, 5, "homeGalleryImages"),
    alt: "Restaurant kitchen duct and hood system.",
  },
  {
    src: requireImage(homeGallerySources, 6, "homeGalleryImages"),
    alt: "Technician working on ladder near commercial ducting.",
  },
  {
    src: requireImage(homeGallerySources, 7, "homeGalleryImages"),
    alt: "Service truck parked at a home on a sunny day.",
  },
];

export const galleryPageImages: GalleryImage[] = [
  {
    src: requireImage(galleryPageSources, 0, "galleryPageImages"),
    alt: "Service truck parked at a commercial site.",
  },
  {
    src: requireImage(galleryPageSources, 1, "galleryPageImages"),
    alt: "Night project setup with service vehicles.",
  },
  {
    src: requireImage(galleryPageSources, 2, "galleryPageImages"),
    alt: "Crew equipment staged for cleaning service.",
  },
  {
    src: requireImage(galleryPageSources, 3, "galleryPageImages"),
    alt: "Technician preparing duct cleaning tools.",
  },
  {
    src: requireImage(galleryPageSources, 4, "galleryPageImages"),
    alt: "HVAC duct interior before cleaning.",
  },
  {
    src: requireImage(galleryPageSources, 5, "galleryPageImages"),
    alt: "Technician servicing a high-access duct location.",
  },
  {
    src: requireImage(galleryPageSources, 6, "galleryPageImages"),
    alt: "Project completion at a large property.",
  },
  {
    src: requireImage(galleryPageSources, 7, "galleryPageImages"),
    alt: "Field crew during active cleaning service.",
  },
  {
    src: requireImage(galleryPageSources, 8, "galleryPageImages"),
    alt: "Equipment and service truck at customer site.",
  },
  {
    src: requireImage(galleryPageSources, 9, "galleryPageImages"),
    alt: "Hygienic Air project photo from an active service call.",
  },
  {
    src: requireImage(galleryPageSources, 10, "galleryPageImages"),
    alt: "Hygienic Air project photo from a completed job site.",
  },
  {
    src: requireImage(galleryPageSources, 11, "galleryPageImages"),
    alt: "Hygienic Air field crew and equipment during service.",
  },
  {
    src: requireImage(galleryPageSources, 12, "galleryPageImages"),
    alt: "Hygienic Air project detail captured on site.",
  },
  {
    src: requireImage(galleryPageSources, 13, "galleryPageImages"),
    alt: "Project setup showing Hygienic Air service workflow.",
  },
  {
    src: requireImage(galleryPageSources, 14, "galleryPageImages"),
    alt: "Hygienic Air equipment photo from a service location.",
  },
  {
    src: requireImage(galleryPageSources, 15, "galleryPageImages"),
    alt: "On-site ventilation cleaning project documentation photo.",
  },
  {
    src: requireImage(galleryPageSources, 16, "galleryPageImages"),
    alt: "Hygienic Air commercial service project image.",
  },
  {
    src: requireImage(galleryPageSources, 17, "galleryPageImages"),
    alt: "Project image featuring Hygienic Air field operations.",
  },
  {
    src: requireImage(galleryPageSources, 18, "galleryPageImages"),
    alt: "Service photo showing in-progress cleaning work.",
  },
  {
    src: requireImage(galleryPageSources, 19, "galleryPageImages"),
    alt: "Hygienic Air team and equipment on location.",
  },
  {
    src: requireImage(galleryPageSources, 20, "galleryPageImages"),
    alt: "Project documentation photo from a customer property.",
  },
  {
    src: requireImage(galleryPageSources, 21, "galleryPageImages"),
    alt: "Field image of a Hygienic Air cleaning assignment.",
  },
  {
    src: requireImage(galleryPageSources, 22, "galleryPageImages"),
    alt: "Ventilation cleaning project detail from the field.",
  },
  {
    src: requireImage(galleryPageSources, 23, "galleryPageImages"),
    alt: "Hygienic Air project photo showing site conditions.",
  },
  {
    src: requireImage(galleryPageSources, 24, "galleryPageImages"),
    alt: "Service call image from a Hygienic Air project.",
  },
  {
    src: requireImage(galleryPageSources, 25, "galleryPageImages"),
    alt: "Project crew and tools documented during service.",
  },
  {
    src: requireImage(galleryPageSources, 26, "galleryPageImages"),
    alt: "Hygienic Air field photo from a ventilation project.",
  },
  {
    src: requireImage(galleryPageSources, 27, "galleryPageImages"),
    alt: "On-site image of a completed cleaning phase.",
  },
  {
    src: requireImage(galleryPageSources, 28, "galleryPageImages"),
    alt: "Hygienic Air service image from customer location.",
  },
  {
    src: requireImage(galleryPageSources, 29, "galleryPageImages"),
    alt: "Project image highlighting field equipment setup.",
  },
  {
    src: requireImage(galleryPageSources, 30, "galleryPageImages"),
    alt: "Hygienic Air project team in active service mode.",
  },
  {
    src: requireImage(galleryPageSources, 31, "galleryPageImages"),
    alt: "Hygienic Air project photo from a documented service.",
  },
  {
    src: requireImage(galleryPageSources, 32, "galleryPageImages"),
    alt: "Final field image from this gallery expansion set.",
  },
];
