export interface Show {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageOverlayText?: string;
  dailyHighlights: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    slug: string;
  }[];
}

export const allShows: Show[] = [
  {
    slug: 'jesus-saves',
    title: 'Jesus Saves',
    subtitle: 'Uplifting messages of hope, redemption, and salvation through Jesus Christ.',
    description: 'Uplifting messages of hope, redemption, and salvation through Jesus Christ.',
    imageUrl: '/images/sample.avif',
    imageAlt: 'Pastor preaching to a congregation',
    imageOverlayText: 'Salvation',
    dailyHighlights: [
      {
        imageSrc: '/images/sample.avif',
        imageAlt: 'Pastor preaching to a congregation',
        title: 'Jesus Saves',
        slug: 'jesus-saves',
      },
    ],
  },
  {
    slug: 'family-hub',
    title: 'Family Hub',
    subtitle: 'Faith-centered content for growing and nurturing family life.',
    description: 'Through engaging, informative, and spiritual discussions about issues facing todayʼs families, Real Family Talk seeks to strengthen families and inspire hope. In each edition, the Olivers draw from their pastoral, educational, and counseling experience to navigate discussions about family life, approaching each topic with practical solutions and sound biblical principles.',
    imageUrl: '/images/jesus-saves.jpg',
    imageAlt: 'Family gathering around a Bible',
    imageOverlayText: 'Family Focus',
    dailyHighlights: [
      {
        imageSrc: '/images/jesus-saves.jpg',
        imageAlt: 'Family gathering around a Bible',
        title: 'Family Hub',
        slug: 'family-hub',
      },
    ],
  },
  {
    slug: 'health-wellness',
    title: 'Health & Wellness',
    subtitle: 'Discover practical advice for a healthier mind, body, and spirit.',
    description: 'Confused by contradicting information on health and wellness? Do you have family issues? Stressed? Want to learn more about wholistic health? Wanting to take action on your health but don’t know how to get started? \n\nGo Healthy for Good offers you options, with analysis by host, Dr Nerida McKibben, an MD with experience in lifestyle medicine. Watch people from many walks of life make wiser choices and see their lives transformed. Learn from them how to make positive changes in your health and never look back!',
    imageUrl: '/images/sample.avif',
    imageAlt: 'Healthcare workers in action',
    imageOverlayText: 'Live Well',
    dailyHighlights: [
      {
        imageSrc: '/images/sample.avif',
        imageAlt: 'Healthcare workers in action',
        title: 'Health & Wellness',
        slug: 'health-wellness',
      },
    ],
  },

  {
    slug: 'faith-and-harmony',
    title: 'Faith and Harmony',
    subtitle: 'Uplifting melodies and spiritual insights.',
    description: 'Immerse yourself in a harmonious blend of music and faith. Explore how melodies can deepen your spiritual connection and bring peace to your soul. This show offers a refreshing journey through hymns, contemporary worship, and inspiring testimonies, all designed to uplift and encourage your spirit.',
    imageUrl: '/images/sample.avif',
    imageAlt: 'People singing and playing instruments',
    imageOverlayText: 'Worship',
    dailyHighlights: [
      {
        imageSrc: '/images/sample.avif',
        imageAlt: 'People singing and playing instruments',
        title: 'Faith and Harmony',
        slug: 'faith-and-harmony',
      },
    ],
  },
  {
    slug: 'breath-of-praise',
    title: 'Breath of Praise',
    subtitle: 'Inspirational music to uplift your spirit.',
    description: 'Experience the power of praise and worship through song. "Breath of Praise" brings you a curated selection of gospel music, spiritual hymns, and contemporary Christian tunes that will refresh your mind, body, and soul. Let the music be a breath of fresh air, filling you with hope and inspiration.',
    imageUrl: '/images/sample.avif',
    imageAlt: 'People singing and playing instruments',
    imageOverlayText: 'Worship',
    dailyHighlights: [
      {
        imageSrc: '/images/sample.avif',
        imageAlt: 'People singing and playing instruments',
        title: 'Breath of Praise',
        slug: 'breath-of-praise',
      },
    ],
  },
  {
    slug: 'salvation-stories',
    title: 'Salvation Stories',
    subtitle: 'Testimonies of transformation and divine encounters.',
    description: 'Hear powerful and personal accounts of salvation and redemption. Each episode shares inspiring journeys of individuals whose lives have been transformed by faith. Discover the hope and new beginnings found through divine intervention and unwavering belief.',
    imageUrl: '/images/sample.avif',
    imageAlt: 'People singing and playing instruments',
    imageOverlayText: 'Salvation',
    dailyHighlights: [
      {
        imageSrc: '/images/sample.avif',
        imageAlt: 'People singing and playing instruments',
        title: 'Salvation Stories',
        slug: 'salvation-stories',
      },
    ],
  },
  {
    slug: 'children',
    title: 'Children',
    subtitle: 'Fun, faith-based programming for young minds.',
    description: 'Bible Heroes Battle is a Bible trivia game show. Based on the Bible Heroes II app, this program is designed to challenge the audience on their biblical knowledge and inspire them to delve deeper into Scripture. Behind the competitive storylines and captivating cast of characters, every episode is infused with accurate Bible facts that both the contestants and the audience will internalize',
    imageUrl: '/images/sample.avif',
    imageAlt: 'Children playing and learning',
    imageOverlayText: 'Kids Zone',
    dailyHighlights: [
      {
        imageSrc: '/images/sample.avif',
        imageAlt: 'Children playing and learning',
        title: 'Children',
        slug: 'children',
      },
    ],
  },
];