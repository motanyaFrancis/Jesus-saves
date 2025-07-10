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
    slug: 'the-living-word',
    title: 'The Living Word',
    subtitle: 'Uplifting messages of hope, redemption, and salvation through Jesus Christ.',
    description: 'The Living Word is a daily Bible-based sermon segment by Pr. Adrian Kanjala, delivering powerful messages rooted in scripture. This spirit-led series offers encouragement, conviction, and a call to action, helping audiences deepen their relationship with God. Each sermon reflects the spiritual theme of the series, designed to inspire faith and transformation.',
    imageUrl: '/images/Living-word.jpg',
    imageAlt: 'Pastor preaching to a congregation',
    imageOverlayText: 'Salvation',
    dailyHighlights: [
      {
        imageSrc: '/images/Living-word.jpg',
        imageAlt: 'Pastor preaching to a congregation',
        title: 'The Living Word',
        slug: 'the-living-word',
      },
    ],
  },
  {
    slug: 'family-hub',
    title: 'Family Hub - Podcast',
    subtitle: 'Faith-centered content for growing and nurturing family life.',
    description: 'The Family Hub is a 14-episode program focused on guiding individuals and families through courtship, marriage, parenting, and legacy planning. Rooted in Adventist values, it addresses contemporary challenges with practical, biblical insights. Through real-life scenarios and expert commentary, it aims to nurture godly homes and prepare families for eternity.',
    imageUrl: '/images/Family.jpg',
    imageAlt: 'Family gathering around a Bible',
    imageOverlayText: 'Family Focus',
    dailyHighlights: [
      {
        imageSrc: '/images/Family.jpg',
        imageAlt: 'Family gathering around a Bible',
        title: 'Family Hub - Podcast',
        slug: 'family-hub',
      },
    ],
  },
  {
    slug: 'health-wellness',
    title: 'Temple of Health',
    subtitle: 'Discover practical advice for a healthier mind, body, and spirit.',
    description: 'Temple of Health is a 14-episode medical and lifestyle series that explores physical, mental, and spiritual well-being. Each episode features expert health insights, biblical principles, and practical advice—helping viewers care for their bodies as temples of God. Rooted in Adventist medical theology, it’s a journey toward healthier, holier living.',
    imageUrl: '/images/Health.jpg',
    imageAlt: 'Healthcare workers in action',
    imageOverlayText: 'Live Well',
    dailyHighlights: [
      {
        imageSrc: '/images/Health.jpg',
        imageAlt: 'Healthcare workers in action',
        title: 'Temple of Health',
        slug: 'health-wellness',
      },
    ],
  },

  // {
  //   slug: 'faith-and-harmony',
  //   title: 'Faith and Harmony',
  //   subtitle: 'Uplifting melodies and spiritual insights.',
  //   description: 'Faith and Harmony is a worship-focused series that explores how music deepens spiritual connection. Through a mix of hymns, contemporary worship, and testimonies, it nurtures healing and devotion. Designed to uplift the soul, the show demonstrates how worship brings emotional restoration and joy.',
  //   imageUrl: '/images/Living-word.jpg',
  //   imageAlt: 'People singing and playing instruments',
  //   imageOverlayText: 'Worship',
  //   dailyHighlights: [
  //     {
  //       imageSrc: '/images/Living-word.jpg',
  //       imageAlt: 'People singing and playing instruments',
  //       title: 'Faith and Harmony',
  //       slug: 'faith-and-harmony',
  //     },
  //   ],
  // },
  // {
  //   slug: 'breath-of-praise',
  //   title: 'Breath of Praise',
  //   subtitle: 'Inspirational music to uplift your spirit.',
  //   description: 'Breath of Praise is a 16-episode musical Bible study rooted in the Book of Daniel. Featuring narration, discussion, and choral performances, it explores prophetic themes and faith lessons from Daniel’s story. Each episode uses music and scripture to connect ancient prophecy with modern Christian life.',
  //   imageUrl: '/images/Praise.jpg',
  //   imageAlt: 'People singing and playing instruments',
  //   imageOverlayText: 'Worship',
  //   dailyHighlights: [
  //     {
  //       imageSrc: '/images/Praise.jpg',
  //       imageAlt: 'People singing and playing instruments',
  //       title: 'Breath of Praise',
  //       slug: 'breath-of-praise',
  //     },
  //   ],
  // },
  // {
  //   slug: 'salvation-stories',
  //   title: 'Salvation Stories',
  //   subtitle: 'Testimonies of transformation and divine encounters.',
  //   description: 'Hear powerful and personal accounts of salvation and redemption. Each episode shares inspiring journeys of individuals whose lives have been transformed by faith. Discover the hope and new beginnings found through divine intervention and unwavering belief.',
  //   imageUrl: '/images/Salvation-story.jpg',
  //   imageAlt: 'People singing and playing instruments',
  //   imageOverlayText: 'Salvation',
  //   dailyHighlights: [
  //     {
  //       imageSrc: '/images/Salvation-story.jpg',
  //       imageAlt: 'People singing and playing instruments',
  //       title: 'Salvation Stories',
  //       slug: 'salvation-stories',
  //     },
  //   ],
  // },
  {
    slug: 'children',
    title: 'Little Lights',
    subtitle: 'Fun, faith-based programming for young minds.',
    description: 'Little Lights is a vibrant children’s series designed to nurture spiritual growth through storytelling, music, crafts, and Bible lessons. Each of the 14 episodes follows Joseph’s journey from Genesis, teaching values like trust, forgiveness, and faith. With songs, memory verses, and fun activities, it brings biblical truths to life for kids ages 2–10.',
    imageUrl: '/images/Lights.jpg',
    imageAlt: 'Children playing and learning',
    imageOverlayText: 'Kids Zone',
    dailyHighlights: [
      {
        imageSrc: '/images/Lights.jpg',
        imageAlt: 'Children playing and learning',
        title: 'Little Lights - Children',
        slug: 'children',
      },
    ],
  },
];