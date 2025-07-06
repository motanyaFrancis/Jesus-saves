export interface Person {
  name: string;
  imageUrl: string;
  title?: string;
}

export interface ShowDetails {
  host?: Person[];
  panelists?: Person[];
}

export const showDetailsMap: Record<string, ShowDetails> = {
  'health-wellness': {
    // host: [{ name: 'Dr. Makini', imageUrl: '/images/pp.png', title: 'Health Expert' },],
  },
  'family-hub': {
    // host: [
    //   { name: 'Ted Kenya', imageUrl: '/images/pp.png', title: 'Podcast Host' },
    //   { name: 'Eld. Maangi Mitiambo', imageUrl: '/images/pp.png', title: 'Family-Life leader' },
    // ]
  },
  'the-living-word': {
    // host: [{ name: 'Pr. Jacob Akali', imageUrl: '/images/pp.png', title: 'Host' },]
  },
  'faith-and-harmony': {
    // host: [
    //   { name: 'Damacrine Nyandigisi', imageUrl: '/images/pp.png', title: 'Music Director' },
    // ]
  },
  'children': {
    // host: [{ name: 'Sofie Omingo', imageUrl: '/images/pp.png', title: 'Children’s Ministry Leader' },]
  },
  'salvation-stories': {
    // host: [{ name: 'Pr. Jacob Akali', imageUrl: '/images/pp.png', title: 'Pastor' },]
  },
  'breath-of-praise': {
    // host: [{ name: 'Justice Nyaga', imageUrl: '/images/pp.png', title: 'Host' },]
  },
};
