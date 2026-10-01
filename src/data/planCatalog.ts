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
  'ticket-weekend-1',
  'ticket-weekend-premium-1',
  'ticket-weekend-2',
  'ticket-weekend-premium-2',
  'ticket-friday',
  'ticket-saturday',
  'ticket-sunday',
  'ticket-friday-premium',
  'ticket-saturday-premium',
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
    title: 'Tickets',
    groups: [
      {
        id: 'weekend',
        title: 'Full weekend',
        entities: [
          admission(
            'ticket-weekend-1',
            'Full Weekend - Phase 1',
            174.9,
            'All three days, Friday to Sunday. Grounds open 15:00 to 04:00. Re-entry is allowed. Leave the site by Monday 15:30.',
            ['Fri-Sun', 'Re-entry allowed'],
          ),
          admission(
            'ticket-weekend-premium-1',
            'Full Weekend Premium - Phase 1',
            249.9,
            'Full weekend admission plus Premium: faster lane, premium areas, Belvedere platforms facing the Olymp Stage, and premium access in the Minos Tent.',
            ['Fri-Sun', 'Premium areas'],
          ),
          admission(
            'ticket-weekend-2',
            'Full Weekend - Phase 2',
            184.9,
            'Same Full Weekend admission as Phase 1, at the Phase 2 price. Grounds 15:00 to 04:00, re-entry allowed, leave by Monday 15:30.',
            ['Fri-Sun', 'Phase 2'],
          ),
          admission(
            'ticket-weekend-premium-2',
            'Full Weekend Premium - Phase 2',
            259.9,
            'Same Premium weekend as Phase 1, at the Phase 2 price. Faster lane, premium areas, Belvedere, and Minos Tent premium access.',
            ['Fri-Sun', 'Premium Phase 2'],
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
            'Friday only, 15:00 to 04:00. One-way entry. Leave by Saturday 11:00.',
            ['Friday', 'No re-entry'],
          ),
          admission(
            'ticket-saturday',
            'Saturday day ticket',
            94.9,
            'Saturday only, 15:00 to 04:00. One-way entry. Leave by Sunday 11:00.',
            ['Saturday', 'No re-entry'],
          ),
          admission(
            'ticket-sunday',
            'Sunday day ticket',
            87.9,
            'Sunday only. The shop lists this ticket as 13:00 to 04:00. One-way entry. Leave by Monday 11:00.',
            ['Sunday', 'No re-entry'],
          ),
          admission(
            'ticket-friday-premium',
            'Friday Premium',
            154.9,
            'Friday admission with Premium access. One-way entry for that day.',
            ['Friday', 'Premium'],
          ),
          admission(
            'ticket-saturday-premium',
            'Saturday Premium',
            159.9,
            'Saturday admission with Premium access. One-way entry for that day.',
            ['Saturday', 'Premium'],
          ),
          admission(
            'ticket-sunday-premium',
            'Sunday Premium',
            154.9,
            'Sunday admission with Premium access. One-way entry for that day.',
            ['Sunday', 'Premium'],
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
            'Full Weekend plus camping for guests aged 18 to 21 who are not yet 22 when the festival starts. ID is checked. Limited quota. No entry and no refund if the age or the ID does not match.',
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
              'Friday 09:00 to Monday 15:00. Free hot showers and toilets. Only valid with a Full Weekend ticket.',
            cardPreviewBullets: ['Fri 09:00 - Mon 15:00', 'Needs Full Weekend'],
            includedItems: ['1× camping stay'],
            requires: ['ticket-weekend-1', 'ticket-weekend-2', 'ticket-weekend-premium-1', 'ticket-weekend-premium-2'],
          },
          {
            id: 'camp-car',
            name: 'Car camping',
            price: 79.9,
            type: 'configurable_single',
            description:
              'Brings one car onto the camping field. Each person still needs a Full Weekend ticket and a camping ticket.',
            cardPreviewBullets: ['Vehicle only', 'Needs camping ticket'],
            includedItems: ['1× car on the camping field'],
          },
          {
            id: 'camp-caravan',
            name: 'Motorhome / caravan',
            price: 119.9,
            type: 'configurable_single',
            description:
              'Brings one motorhome or caravan onto the camping field. Each person still needs a Full Weekend ticket and a camping ticket.',
            cardPreviewBullets: ['Vehicle only', 'Needs camping ticket'],
            includedItems: ['1× motorhome or caravan'],
          },
          {
            id: 'camp-power',
            name: 'Power package',
            price: 129.9,
            type: 'configurable_single',
            description:
              '230V for the weekend. Only for a motorhome or caravan. Bring a 50 metre outdoor cable.',
            cardPreviewBullets: ['230V weekend', 'Caravan only'],
            includedItems: ['1× power hook-up'],
          },
        ],
      },
    ],
  },
  {
    id: 'shuttle',
    title: 'Transportation',
    groups: [
      {
        id: 'getting-there',
        title: 'Memmingen',
        entities: [
          {
            id: 'shuttle-memmingen',
            name: 'Shuttle ticket',
            price: 13,
            type: 'configurable_single',
            description:
              'Flat rate between Memmingen station and the festival. Unlimited rides from Friday to Monday. Show the QR code.',
            cardPreviewBullets: ['Station to site', 'Fri-Mon, unlimited'],
            includedItems: ['Shuttle flat rate, Friday to Monday'],
          },
          {
            id: 'park-weekend',
            name: 'Full Weekend parking',
            price: 32,
            type: 'configurable_single',
            description: 'Parking for the weekend, valid until Monday 15:30.',
            cardPreviewBullets: ['Until Mon 15:30'],
            includedItems: ['1× weekend parking'],
          },
          {
            id: 'park-day',
            name: 'Day parking',
            price: 19,
            type: 'configurable_single',
            description:
              'One day of parking. Friday is valid until Saturday 11:00, Saturday until Sunday 11:00, Sunday until Monday 15:30.',
            cardPreviewBullets: ['€19 per day'],
            includedItems: ['1× day parking'],
            variantAxes: [
              {
                id: 'day',
                label: 'Day',
                options: ['Friday', 'Saturday', 'Sunday'],
                defaultOption: 'Friday',
              },
            ],
            optionPrices: {
              Friday: 19,
              Saturday: 19,
              Sunday: 19,
            },
          },
        ],
      },
    ],
  },
];

const BASE = import.meta.env.BASE_URL;

export const DEFAULT_TICKET_IMAGE = `${BASE}ticket-weekend.svg`;

export const ENTITY_IMAGES: Record<string, string> = {
  'ticket-weekend-1': `${BASE}ticket-weekend.svg`,
  'ticket-weekend-2': `${BASE}ticket-weekend.svg`,
  'ticket-weekend-premium-1': `${BASE}ticket-premium.svg`,
  'ticket-weekend-premium-2': `${BASE}ticket-premium.svg`,
  'ticket-friday': `${BASE}ticket-day.svg`,
  'ticket-saturday': `${BASE}ticket-day.svg`,
  'ticket-sunday': `${BASE}ticket-day.svg`,
  'ticket-friday-premium': `${BASE}ticket-premium.svg`,
  'ticket-saturday-premium': `${BASE}ticket-premium.svg`,
  'ticket-sunday-premium': `${BASE}ticket-premium.svg`,
  'ticket-young': `${BASE}ticket-young.svg`,
  'camp-ticket': `${BASE}ticket-camp.svg`,
  'camp-car': `${BASE}ticket-car.svg`,
  'camp-caravan': `${BASE}ticket-caravan.svg`,
  'camp-power': `${BASE}ticket-power.svg`,
  'shuttle-memmingen': `${BASE}ticket-shuttle.svg`,
  'park-weekend': `${BASE}ticket-parking.svg`,
  'park-day': `${BASE}ticket-parking.svg`,
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
  { id: 'shuttle', label: 'Transportation' },
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
  { id: 'entry', title: 'Tickets', categoryIds: ['entry'] },
  { id: 'camping', title: 'Camping', categoryIds: ['camping'] },
  { id: 'shuttle', title: 'Transportation', categoryIds: ['shuttle'] },
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
