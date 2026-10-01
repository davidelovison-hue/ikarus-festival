import { GALLERY_IMAGES } from './festivalConfig';

export type FestivalArtist = {
  id: string;
  name: string;
  image: string;
  fallbackImage: string;
  day?: string;
};

const BASE = import.meta.env.BASE_URL;

export const LINEUP_FALLBACK_IMAGE = GALLERY_IMAGES[0]?.src ?? `${BASE}event-poster.svg`;

function artist(id: string, name: string, image: string): FestivalArtist {
  return { id, name, image, fallbackImage: LINEUP_FALLBACK_IMAGE };
}

/** Official 2027 lineup posters. The rest of the bill is still TBA. */
export const FESTIVAL_ARTISTS: FestivalArtist[] = [
  artist('bunt', 'BUNT.', `${BASE}artist-bunt.jpg`),
  artist('tream', 'Tream', `${BASE}artist-tream.jpg`),
  artist('more', 'More TBA', `${BASE}hero-stage.jpg`),
];
