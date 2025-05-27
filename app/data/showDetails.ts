export interface Person {
  name: string;
  imageUrl: string;
  title?: string;
}

export interface ShowDetails {
  host: Person;
  panelists?: Person[];
}

export const showDetailsMap: Record<string, ShowDetails> = {
  'health-wellness': {
    host: { name: 'Dr. Makini', imageUrl: '/images/pp.png', title: 'Health Expert' },
    panelists: [
      { name: 'Dr. Makini', imageUrl: '/images/pp.png', title: 'Fitness Coach' },
      { name: 'Dr. Makini', imageUrl: '/images/pp.png', title: 'Nutritionist' },
    ],
  },
  'family-hub': {
    host: { name: 'Pr. Jacob Akali', imageUrl: '/images/pp.png', title: 'Family Counselor' },
  },
  'jesus-saves': {
    host: { name: 'Pr. Jacob Akali', imageUrl: '/images/pp.png', title: 'Preacher' },
  },
  'worship-in-music': {
    host: { name: 'Justice Nyaga', imageUrl: '/images/pp.png', title: 'Music Director' },
  },
  'children': {
    host: { name: 'Branda', imageUrl: '/images/pp.png', title: 'Children’s Ministry Leader' },
  },
};
