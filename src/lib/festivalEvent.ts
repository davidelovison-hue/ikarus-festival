import { GALLERY_IMAGES, POSTER_IMAGE } from '../data/festivalConfig';

export const FESTIVAL_EVENT_ID = 'ikarus-festival-2027';

export const FESTIVAL_LOGO_SRC = `${import.meta.env.BASE_URL}event-logo.svg`;

export const FESTIVAL_EVENT = {
  id: FESTIVAL_EVENT_ID,
  title: 'Ikarus Festival 2027',
  image: GALLERY_IMAGES[0]?.src ?? POSTER_IMAGE,
  venue: 'Memmingerberg',
  dateLine: 'Friday 25 to Sunday 27 June 2027',
};

export function getFestivalEvent(eventId: string) {
  if (eventId === FESTIVAL_EVENT_ID) return FESTIVAL_EVENT;
  return null;
}
