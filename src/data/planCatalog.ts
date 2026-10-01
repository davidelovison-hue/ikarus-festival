/**
 * Ikarus Festival 2027.
 * Prices are the active products in the official shop. Inactive promos are not listed.
 */
import { formatPrice } from '../lib/formatPrice';

export type VariantAxis = {
  id: string;
  label: string;
  options: string[];
  disabledOptions?: string[];
  defaultOption?: string;
};

export type PlanEntity = {
  id: string;
  name: string;
  price: number;
  type: 'configurable_single' | 'configurable_multi' | 'composite';
  variantAxes?: VariantAxis[];
  optionPrices?: Record<string, number>;
  date?: string;
  listingTag?: 'SELLING FAST' | 'SOLD OUT' | 'LIMITED';
  description?: string;
  includedItems?: string[];
  cardPreviewBullets?: string[];
  requires?: string[];
  displaySummary?: boolean;
  pricingMode?: 'dynamic';
  hideImage?: boolean;
  maxQuantity?: number;
  purchaseMode?: 'online' | 'contact';
};

export type PlanGroup = {
  id: string;
  title: string;
  entities: PlanEntity[];
};

export type PlanCategory = {
  id: string;
  title: string;
  contentMode?: 'overview';
  cardLayout?: 'equalRow';
  groups: PlanGroup[];
};

export const ENTRY_TICKET_IDS = [
  'ticket-weekend-2',
  'ticket-weekend-1',
  'ticket-friday',
  'ticket-friday-premium',
  'ticket-saturday',
  'ticket-saturday-premium',
  'ticket-sunday',
  'ticket-sunday-premium',
  'ticket-young',
] as const;

function admission(
  id: string,
  name: string,
  price: number,
  description: string,
  bullets: string[],
  extras?: Partial<PlanEntity>,
): PlanEntity {
  return {
    id,
    name,
    price,
    type: 'configurable_single',
    description,
    cardPreviewBullets: bullets,
    includedItems: ['1× admission'],
    ...extras,
  };
}

export const PLAN_CATALOG: PlanCategory[] = [
  {
    id: 'overview',
    title: 'Overview',
    contentMode: 'overview',
    groups: [],
  },
  {
    id: 'entry',
    title: 'Entry pass',
    groups: [
      {
        id: 'weekend',
        title: 'Full Weekend',
        entities: [
          admission(
            'ticket-weekend-2',
            'Full Weekend - Phase 2',
            184.9,
            'Access to the festival grounds on all 3 festival days. Re-entry is allowed. Leave the site by Monday 15:30.',
            ['All 3 days', 'Re-entry allowed'],
          ),
          admission(
            'ticket-weekend-1',
            'Full Weekend - Phase 1',
            174.9,
            'Access to the festival grounds on all 3 festival days. This phase is sold out.',
            ['All 3 days', 'Sold out'],
            { listingTag: 'SOLD OUT' },
          ),
        ],
      },
      {
        id: 'days',
        title: 'Day tickets',
        entities: [
          admission(
            'ticket-friday',
            'Friday day ticket',
            87.9,
            'Access on Friday only, 15:00 to 04:00. One-way entry, no re-entry. Ages 18 and over. Tickets must be personalised.',
            ['Friday 15:00-04:00', 'No re-entry'],
          ),
          admission(
            'ticket-friday-premium',
            'Friday Premium',
            154.9,
            'Friday access, 15:00 to 04:00, plus Premium: exclusive access to stage Premium areas, lounges and bars. One-way entry.',
            ['Friday', 'Premium areas'],
          ),
          admission(
            'ticket-saturday',
            'Saturday day ticket',
            94.9,
            'Access on Saturday only, 15:00 to 04:00. One-way entry, no re-entry. Ages 18 and over. Tickets must be personalised.',
            ['Saturday 15:00-04:00', 'No re-entry'],
          ),
          admission(
            'ticket-saturday-premium',
            'Saturday Premium',
            159.9,
            'Saturday access, 15:00 to 04:00, plus Premium areas, lounges and bars. One-way entry.',
            ['Saturday', 'Premium areas'],
          ),
          admission(
            'ticket-sunday',
            'Sunday day ticket',
            87.9,
            'Access on Sunday only, 13:00 to 04:00. One-way entry, no re-entry. Ages 18 and over. Tickets must be personalised.',
            ['Sunday 13:00-04:00', 'No re-entry'],
          ),
          admission(
            'ticket-sunday-premium',
            'Sunday Premium',
            154.9,
            'Sunday access plus Premium areas, lounges and bars. One-way entry.',
            ['Sunday', 'Premium areas'],
          ),
        ],
      },
      {
        id: 'young',
        title: 'Young Festival Pass',
        entities: [
          admission(
            'ticket-young',
            'Young Festival Pass (18-21)',
            199.9,
            'Full Weekend including camping, for guests aged 18 to 21 at the start of the festival. ID is checked. New and limited quota. No entry and no refund if the age or the ID does not match.',
            ['Includes camping', 'Ages 18-21'],
            { listingTag: 'LIMITED' },
          ),
        ],
      },
    ],
  },
  {
    id: 'camping',
    title: 'Camping',
    groups: [
      {
        id: 'camping-stay',
        title: 'Camping',
        entities: [
          {
            id: 'camp-ticket',
            name: 'Camping ticket',
            price: 59.9,
            type: 'configurable_single',
            description:
              'Access to the campsite from Friday 09:00 to Monday 15:00. Free hot showers and flush toilets. Every person needs their own camping ticket, and it is only valid with a Full Weekend ticket. A €15 waste deposit is charged.',
            cardPreviewBullets: ['Fri 09:00 - Mon 15:00', 'Needs Full Weekend'],
            includedItems: ['1× camping stay'],
            requires: ['ticket-weekend-1', 'ticket-weekend-2'],
          },
        ],
      },
      {
        id: 'camping-addons',
        title: 'Camping add-ons',
        entities: [
          {
            id: 'camp-caravan',
            name: 'Motorhome / caravan',
            price: 119.9,
            type: 'configurable_single',
            description:
              'Access for one motorhome or caravan to the caravan camping. Each person still needs a regular camping ticket.',
            cardPreviewBullets: ['Vehicle only', 'Needs camping ticket'],
            includedItems: ['1× motorhome or caravan'],
          },
          {
            id: 'camp-car',
            name: 'Car camping',
            price: 79.9,
            type: 'configurable_single',
            description:
              'Access for one car to the car camping field. Each person still needs a regular camping ticket.',
            cardPreviewBullets: ['Vehicle only', 'Needs camping ticket'],
            includedItems: ['1× car on the camping field'],
          },
          {
            id: 'camp-power',
            name: 'Power package',
            price: 129.9,
            type: 'configurable_single',
            description:
              'Power for your caravan across the whole weekend. Only for a motorhome or caravan. Bring a 50 metre outdoor cable.',
            cardPreviewBullets: ['230V weekend', 'Caravan only'],
            includedItems: ['1× power hook-up'],
          },
        ],
      },
    ],
  },
  {
    id: 'shuttle',
    title: 'Transport',
    groups: [
      {
        id: 'parking',
        title: 'Parking',
        entities: [
          {
            id: 'park-weekend',
            name: 'Full Weekend parking',
            price: 32,
            type: 'configurable_single',
            description: 'Valid until Monday 15:30.',
            cardPreviewBullets: ['Until Mon 15:30'],
            includedItems: ['1× weekend parking'],
          },
          {
            id: 'park-friday',
            name: 'Friday day parking',
            price: 19,
            type: 'configurable_single',
            description: 'Valid until Saturday 11:00.',
            cardPreviewBullets: ['Until Sat 11:00'],
            includedItems: ['1× Friday parking'],
          },
          {
            id: 'park-saturday',
            name: 'Saturday day parking',
            price: 19,
            type: 'configurable_single',
            description: 'Valid until Sunday 11:00.',
            cardPreviewBullets: ['Until Sun 11:00'],
            includedItems: ['1× Saturday parking'],
          },
          {
            id: 'park-sunday',
            name: 'Sunday day parking',
            price: 19,
            type: 'configurable_single',
            description: 'Valid until Monday 15:30.',
            cardPreviewBullets: ['Until Mon 15:30'],
            includedItems: ['1× Sunday parking'],
          },
        ],
      },
      {
        id: 'shuttle-rides',
        title: 'Shuttle',
        entities: [
          {
            id: 'shuttle-memmingen',
            name: 'Shuttle ticket',
            price: 13,
            type: 'configurable_single',
            description:
              'Flat rate between Memmingen station and the festival grounds. Unlimited rides there and back from Friday to Monday. Show the ticket QR code.',
            cardPreviewBullets: ['Station to site', 'Fri-Mon, unlimited'],
            includedItems: ['Shuttle flat rate, Friday to Monday'],
          },
        ],
      },
    ],
  },
];

const BASE = import.meta.env.BASE_URL;

export const DEFAULT_TICKET_IMAGE = `${BASE}card-weekend.jpg`;

export const ENTITY_IMAGES: Record<string, string> = {
  'ticket-weekend-1': `${BASE}card-weekend.jpg`,
  'ticket-weekend-2': `${BASE}card-weekend.jpg`,
  'ticket-friday': `${BASE}card-day.jpg`,
  'ticket-saturday': `${BASE}card-day.jpg`,
  'ticket-sunday': `${BASE}card-day.jpg`,
  'ticket-friday-premium': `${BASE}card-premium.jpg`,
  'ticket-saturday-premium': `${BASE}card-premium.jpg`,
  'ticket-sunday-premium': `${BASE}card-premium.jpg`,
  'ticket-young': `${BASE}card-young.jpg`,
  'camp-ticket': `${BASE}card-camp.jpg`,
  'camp-car': `${BASE}card-car.jpg`,
  'camp-caravan': `${BASE}card-caravan.jpg`,
  'camp-power': `${BASE}card-power.jpg`,
  'shuttle-memmingen': `${BASE}card-shuttle.jpg`,
  'park-weekend': `${BASE}card-parking.jpg`,
  'park-friday': `${BASE}card-parking.jpg`,
  'park-saturday': `${BASE}card-parking.jpg`,
  'park-sunday': `${BASE}card-parking.jpg`,
};

export const ENTITY_GALLERIES: Record<string, string[]> = {};

export function getEntityImages(entityId: string): string[] {
  if (ENTITY_GALLERIES[entityId]) return ENTITY_GALLERIES[entityId];
  if (ENTITY_IMAGES[entityId]) return [ENTITY_IMAGES[entityId]];
  return [DEFAULT_TICKET_IMAGE];
}

export function findEntity(entityId: string): PlanEntity | undefined {
  for (const category of PLAN_CATALOG) {
    for (const group of category.groups) {
      const entity = group.entities.find((item) => item.id === entityId);
      if (entity) return entity;
    }
  }
  return undefined;
}

export const PLAN_CORE_CATEGORY_IDS = ['entry'] as const;

export const PLAN_ADDON_CATEGORIES: { id: string; label: string }[] = [
  { id: 'camping', label: 'Camping' },
  { id: 'shuttle', label: 'Transport' },
];

export type PlanStepId = 'entry' | 'camping' | 'addons' | 'shuttle';

export type PlanStep = {
  id: PlanStepId;
  title: string;
  categoryIds: string[];
};

export const PLAN_CORE_STEP_IDS: PlanStepId[] = ['entry'];

export const DEFAULT_PLAN_STEP: PlanStepId = 'entry';

export const PLAN_STEPS: PlanStep[] = [
  { id: 'entry', title: 'Entry pass', categoryIds: ['entry'] },
  { id: 'camping', title: 'Camping', categoryIds: ['camping'] },
  { id: 'shuttle', title: 'Transport', categoryIds: ['shuttle'] },
];

const CATEGORY_TO_STEP: Record<string, PlanStepId> = {
  entry: 'entry',
  camping: 'camping',
  addons: 'addons',
  shuttle: 'shuttle',
  tickets: 'entry',
  extra: 'addons',
};

const HASH_TO_STEP: Record<string, PlanStepId> = {
  ...CATEGORY_TO_STEP,
  pass: 'entry',
  'entry-pass': 'entry',
  ga: 'entry',
  vip: 'entry',
  premium: 'entry',
  camp: 'camping',
  bus: 'shuttle',
  parking: 'shuttle',
  shuttle: 'shuttle',
};

export function getPlanStep(stepId: string): PlanStep | undefined {
  return PLAN_STEPS.find((step) => step.id === stepId);
}

export function getPlanStepIndex(stepId: string): number {
  const index = PLAN_STEPS.findIndex((step) => step.id === stepId);
  return index >= 0 ? index : 0;
}

export function getCategoriesForStep(stepId: string): PlanCategory[] {
  const step = getPlanStep(stepId);
  if (!step) return [];
  return PLAN_CATALOG.filter((category) => step.categoryIds.includes(category.id));
}

export function shouldPrefixCategory(
  categories: PlanCategory[],
  category: PlanCategory,
  activeStepTitle?: string,
): boolean {
  return categories.length > 1 && category.title !== activeStepTitle;
}

export function formatCarouselTitle(
  categoryTitle: string,
  groupTitle: string,
  prefix: boolean,
): string {
  return prefix && groupTitle !== categoryTitle ? `${categoryTitle} - ${groupTitle}` : groupTitle;
}

export function getStepIdFromHash(hash: string): PlanStepId {
  return HASH_TO_STEP[hash] ?? DEFAULT_PLAN_STEP;
}

export function isPlanStepId(id: string): id is PlanStepId {
  return PLAN_STEPS.some((step) => step.id === id);
}

export function findCategoryIdForEntity(entityId: string): string | undefined {
  for (const category of PLAN_CATALOG) {
    for (const group of category.groups) {
      if (group.entities.some((item) => item.id === entityId)) return category.id;
    }
  }
  return undefined;
}

export function getEntityUnitPrice(
  entity: PlanEntity,
  selections: Record<string, string> = {},
): number {
  const prices = entity.optionPrices;
  if (prices) {
    const preferredKeys = ['option', 'camping', 'size', 'wave', 'day', 'weekend', 'route'];
    for (const key of preferredKeys) {
      const value = selections[key];
      if (value && prices[value] != null) return prices[value];
    }

    for (const value of Object.values(selections)) {
      if (value && prices[value] != null) return prices[value];
    }
  }

  return entity.price;
}

export function formatEntityPrice(price: number): string {
  return formatPrice(price);
}
