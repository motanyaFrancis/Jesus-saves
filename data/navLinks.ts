// @data/navLinks.ts

export interface NavLink {
  name: string;
  href?: string; // optional if it's a dropdown
  megaMenu?: {
    title?: string;
    description?: string;
    links: { name: string; href: string }[];
  }[];
}

const navLinks: NavLink[] = [
  { name: 'Shows', href: '/' },
  { name: 'Schedule', href: '/schedule' },
  {
    name: 'Watch',
    megaMenu: [
      {
        links: [
          { name: 'Seventh-day Adventist Church Karen Community', href: '/' },
          { name: 'Hope Channel Kenya', href: '/' },
          { name: 'Dawn of Faith', href: '/' },
        ],
      },
      
      {
        title: 'Jesus Saves',
        description: 'We have list of featured Programs for every Categoty.',
        links: [],
      },
    ],
  },
];

export default navLinks;
