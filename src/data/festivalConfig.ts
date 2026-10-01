/**
 * Ikarus Festival 2027.
 * Ticket names and prices follow the live shop at tickets.ikarus-festival.de.
 */

export type PlanCategory = {
  id: string;
  title: string;
};

export const PLAN_CATEGORIES: PlanCategory[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'entry', title: 'Tickets' },
  { id: 'camping', title: 'Camping' },
  { id: 'shuttle', title: 'Transportation' },
];

/** Default plan tab (tickets). */
export const DEFAULT_PLAN_TAB = 'entry';

const BASE = import.meta.env.BASE_URL;

export const HERO_GRID_IMAGES = [
  `${BASE}event-crowd.svg`,
  `${BASE}event-stage.svg`,
  `${BASE}event-airfield.svg`,
  `${BASE}event-camp.svg`,
] as const;

export const GALLERY_IMAGES = [
  {
    src: `${BASE}event-poster.svg`,
    alt: 'Ikarus Festival 2027 at the former military airfield, Memmingen',
  },
  {
    src: HERO_GRID_IMAGES[0],
    alt: 'Festival crowd at Ikarus',
  },
  {
    src: HERO_GRID_IMAGES[1],
    alt: 'Olymp Stage at Ikarus Festival',
  },
  {
    src: HERO_GRID_IMAGES[2],
    alt: 'Allgäu Airport airfield, Memmingerberg',
  },
  {
    src: HERO_GRID_IMAGES[3],
    alt: 'Camping at Ikarus Festival',
  },
];

export const FESTIVAL_HERO_VIDEO = '';

export const FESTIVAL_MEDIA_HERO = {
  video: FESTIVAL_HERO_VIDEO,
  videoPoster: `${BASE}event-poster.svg`,
  grid: HERO_GRID_IMAGES,
};

export const GALLERY_IMAGE_URLS = GALLERY_IMAGES.map((image) => image.src);

export const POSTER_IMAGE = `${BASE}event-poster.svg`;

export const AVATAR_URL = `${BASE}event-logo.svg`;

export const VENUE_IMAGE = `${BASE}event-airfield.svg`;

export const HERO_KICKER = 'Official ticketing platform';

export const HERO_FACTS = [
  { label: 'Date', value: '25-27 Jun' },
  { label: 'Opens', value: 'Fri 15:00' },
  { label: 'Year', value: '13th' },
  { label: 'City', value: 'Memmingen' },
] as const;

export const LINEUP_TITLE = 'Lineup';
export const LINEUP_HINT = 'Friday 25 to Sunday 27 June 2027';

export const IMMERSIVE_EXPECT = [
  'Ikarus Festival returns for its 13th year, 25 to 27 June 2027, on the former military airfield at Allgäu Airport in Memmingen.',
  'House, techno, hardstyle and more across eight stages. Full Weekend Phase 1 is €174.90. Dare to fly.',
] as const;

export const IMMERSIVE_HIGHLIGHT_CARDS = [
  {
    title: 'Dare to fly',
    text: 'Three days on the airfield at Memmingerberg. The date moved off the Pentecost weekend so the weather has a better chance.',
    image: `${BASE}event-poster.svg`,
  },
  {
    title: 'Eight stages',
    text: 'Olymp, Minos Tent, Forest, Nox, Onos Shelter, Hade Cage and Medusa Jungle, plus one more stage still to be named on the timetable.',
    image: `${BASE}event-stage.svg`,
  },
  {
    title: 'First names',
    text: 'BUNT. is back, and Tream is on the bill. The rest of the 150-plus artists will be announced.',
    image: `${BASE}event-crowd.svg`,
  },
  {
    title: 'Stay on site',
    text: 'Camping runs Friday 09:00 to Monday 15:00 with free hot showers for camping guests. A Full Weekend ticket is required.',
    image: `${BASE}event-camp.svg`,
  },
] as const;

export const IMMERSIVE_DAY_STEPS = [
  {
    title: 'Friday 25 June',
    text: 'Grounds open 15:00 to 04:00. Olymp Stage from 17:30. Camping opens at 09:00 for guests with a camping ticket.',
    tone: 'violet' as const,
  },
  {
    title: 'Saturday 26 June',
    text: 'Grounds 15:00 to 04:00. Olymp Stage from 16:00. Forest Stage runs 14:00 to 04:00 all weekend.',
    tone: 'orange' as const,
  },
  {
    title: 'Sunday 27 June',
    text: 'Full weekend guests stay until 04:00 and leave the grounds by Monday 15:30. The Sunday day ticket is listed as 13:00 to 04:00.',
    tone: 'blue' as const,
  },
] as const;

export const IMMERSIVE_FAQS = [
  {
    q: 'Which tickets are on sale?',
    a: 'Full Weekend Phase 1 is €174.90 and Full Weekend Premium Phase 1 is €249.90. Phase 2 is also on sale at €184.90 and €259.90. Day tickets are Friday €87.90, Saturday €94.90 and Sunday €87.90. Premium day tickets are Friday €154.90, Saturday €159.90 and Sunday €154.90. The Young Festival Pass (18-21), including camping, is €199.90.',
  },
  {
    q: 'What does a Full Weekend ticket cover?',
    a: 'Entry on Friday, Saturday and Sunday. The grounds are open 15:00 to 04:00 each day, re-entry is allowed, and you leave the site by Monday 15:30.',
  },
  {
    q: 'What does a day ticket cover?',
    a: 'That day only, with no re-entry. You leave by 11:00 the next morning. The Sunday day ticket in the shop is listed as 13:00 to 04:00.',
  },
  {
    q: 'How does camping work?',
    a: 'The Camping Ticket is €59.90 and needs a Full Weekend ticket. Camping is open Friday 09:00 to Monday 15:00, with free hot showers and toilets. Car camping is €79.90 and a caravan or motorhome is €119.90. Those are for the vehicle only. Everyone still needs a Full Weekend ticket and a camping ticket. The power package is €129.90 and is only for a caravan or motorhome.',
  },
  {
    q: 'Who can buy the Young Festival Pass?',
    a: 'Guests aged 18 to 21 who are not yet 22 when the festival starts. Bring ID. If the age or the ID does not match, there is no entry and no refund. The quota is limited. The pass is a Full Weekend ticket plus camping.',
  },
  {
    q: 'How do I get there?',
    a: 'The shuttle is a €13 flat rate between Memmingen station and the site, unlimited from Friday to Monday. Weekend parking is €32, valid until Monday 15:30. Day parking is €19.',
  },
  {
    q: 'Where is the festival?',
    a: 'Former military airfield at Allgäu Airport, Junkerstraße, 87766 Memmingerberg, near Memmingen.',
  },
  {
    q: 'Is there access for guests with a disability?',
    a: 'A German severe-disability ID from 80% gives free entry to a regular day ticket or a regular Full Weekend ticket, shown at the gate. A companion is free when the ID carries the B mark. This is not a separate product in the shop.',
  },
] as const;

export const OVERVIEW_INFO = [
  {
    icon: '📅',
    label: 'Date',
    text: 'Friday 25 to Sunday 27 June 2027. Grounds 15:00 to 04:00. Leave by Monday 15:30.',
  },
  {
    icon: '📍',
    label: 'Location',
    text: 'Former military airfield, Allgäu Airport, Junkerstraße, 87766 Memmingerberg',
  },
  {
    icon: '🎫',
    label: 'Tickets',
    text: 'Full Weekend Phase 1 €174.90. Premium Phase 1 €249.90. Day tickets from €87.90.',
  },
  {
    icon: '🎧',
    label: 'Lineup',
    text: 'BUNT. and Tream are announced. More than 150 artists across eight stages, timetable still to come.',
  },
];

export const FESTIVAL_CURRENCY = {
  locale: 'en-GB',
  currency: 'EUR',
} as const;

export const FESTIVAL_COPY = {
  intro:
    'Ikarus Festival 2027 is the 13th edition, 25 to 27 June, on the former military airfield at Allgäu Airport in Memmingen. House, techno, hardstyle and the styles around them, on eight stages. The motto is Dare To Fly.',
  introCta: 'Full Weekend Phase 1 is €174.90.',
  ticketTabs:
    'Full Weekend Phase 1 €174.90. Premium Phase 1 €249.90. Friday €87.90, Saturday €94.90, Sunday €87.90. Young Festival Pass, including camping, €199.90.',
  supportEmail: 'www.ikarus-festival.de',
  privacyUrl: 'https://www.ikarus-festival.de/',
  officialSiteUrl: 'https://www.ikarus-festival.de/',
  officialSiteLabel: 'ikarus-festival.de',
  marketingBrand: 'Ikarus Festival',
  venue: {
    name: 'Allgäu Airport airfield',
    text: 'The festival is on the former military airfield at Allgäu Airport, Memmingerberg. About 120,000 guests are expected.',
  },
  gettingThere: {
    name: 'Ikarus Festival',
    address: 'Ikarus Festival\nJunkerstraße\n87766 Memmingerberg',
    mapQuery: 'Ikarus Festival, Junkerstraße, 87766 Memmingerberg',
  },
  accessibility:
    'Guests with a German severe-disability ID from 80% enter free on a regular day ticket or a regular Full Weekend ticket, shown at the gate. A companion is free when the ID has the B mark. Premium and group tickets are not included.',
} as const;
