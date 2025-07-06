// data/episodes.ts
import { Episode } from '@/lib/types'; // Import the interface

export const allEpisodes: Episode[] = [
  // The Living Word (only episode 1 available)
  // {
  //   slug: 'living-word-episode-1',
  //   showSlug: 'the-living-word',
  //   title: 'Hope in the Storm',
  //   description: 'Discover how faith in Christ can anchor you during life’s storms.',
  //   videoUrl: '/images/Living-word.jpg',
  //   thumbnailUrl: '/images/Living-word.jpg',
  //   thumbnailAlt: 'Pastor preaching with open Bible',
  //   publishedAt: '2025-06-01',
  // },
  ...[...Array(14)].map((_, i) => {
    const titles = [
      'The Living Word is Written',
      'The Law of Cause and Effect.',
      'Freedom in Christ',
      'Abba Father',
      'The law And Grace',
      'Beware of yourself',
      'The Other side of God',
      'Baptism',
      'The Sabbath',
      'The Road to hell is paved with good intentions',
      'Only if you knew...',
      'What goes around comes around.',
      'In the line of fire.',
      'In the Crucible with Christ.',
    ]
    const descriptions = [
      '',
    ];  

    return {
      slug: `living-word-episode-${i + 1}`,
      showSlug: 'the-living-word',
      title: titles[i],
      description: descriptions[i],
      videoUrl: '/images/Living-word.jpg',
      thumbnailUrl: '/images/Living-word.jpg',
      thumbnailAlt: 'Pastor preaching with open Bible',
      publishedAt: `2025-06-${String(1 + i).padStart(2, '0')}`,
    };
  }),

  // Family Hub Episodes (14)
  ...[...Array(14)].map((_, i) => {
    const titles = [
      'Foundations of Love – Dating, Courtship, and Preparing for Marriage',
      'The Covenant Begins – Marriage and the Wedding Vows',
      'Building a Home – Communication in Marriage',
      'Intimacy and Romance – God\'s Gift to Marriage',
      'Money Matters – Family Finances and Strategic Planning',
      'The Joy of Parenthood – Raising God-Fearing Children',
      'Sharing the Load – House Chores and Family Activities',
      'Self-Care and Boundaries – Nurturing the Individual',
      'Spiritual Life and Ministry – Balancing Church and Family',
      'In-Laws and Extended Family – Building Bridges',
      'When Love Hurts – Divorce and Marital Breakdown',
      'When Death Strikes – Grief and Loss in the Family',
      'Succession and Estate Planning – Leaving a Legacy',
      'Heaven is Our Home – Preparing the Family for Eternity'
    ];
    const descriptions = [
      'Biblical principles of dating and courtship, cultural expectations vs. spiritual values, emotional and financial preparation, and purposeful wedding planning.',
      'The meaning of marriage vows, roles of spouses, and the spiritual significance of the marriage covenant.',
      'Barriers to communication, active listening, conflict resolution, and respectful dialogue.',
      'Spiritual and emotional connection in intimacy, addressing dysfunction and violence.',
      'Budgeting, tithing, and creating a strategic financial plan as a couple.',
      'Discipline vs. punishment, spiritual education, and child development.',
      'Gender roles, teaching responsibility, and bonding through shared chores and activities.',
      'Importance of rest, personal growth, setting healthy boundaries, and avoiding burnout.',
      'Involving family in ministry, avoiding neglect, and providing spiritual leadership at home.',
      'Building harmony with in-laws, respecting traditions, and handling interference.',
      'Biblical grounds for divorce, church support, and the path to forgiveness.',
      'Stages of grief, supporting children through loss, and hope in resurrection.',
      'Wills, inheritance planning, stewardship, and avoiding family conflict.',
      'Spiritual practices for families, encouragement, and eternal focus.'
    ];
    return {
      slug: `family-hub-episode-${i + 1}`,
      showSlug: 'family-hub',
      title: titles[i],
      description: descriptions[i],
      videoUrl: '/images/Family.jpg',
      thumbnailUrl: '/images/Family.jpg',
      thumbnailAlt: 'Family in discussion around the dinner table',
      publishedAt: `2025-06-${String(2 + i).padStart(2, '0')}`,
    };
  }),

  // Temple of Health Episodes (14)
  ...[...Array(14)].map((_, i) => {
    const titles = [
      'The Master Control – Brain and Nervous System',
      'The Framework – Bones and Skeletal System',
      'The River of Life – Blood and Circulatory System',
      'The Protective Shield – Skin and Integumentary System',
      'The Pump of Life – Heart and Cardiovascular System',
      'The Breath of Life – Respiratory System',
      'The Gateway to Health – Dental Health',
      'The Windows to the Soul – Eyes and Vision',
      'The Digestive Journey – Digestive System',
      'The Body’s Armor – Integumentary System',
      'The Body’s Foundation – Skeletal System',
      'The Power of Movement – Muscular System',
      'The Body’s Communication Network – Nervous System',
      'The Body’s Defense – Immune System'
    ];
    const descriptions = [
      'Understanding the brain and nervous system’s role in coordinating and controlling body functions.',
      'Exploring the skeletal system’s role in providing structural support and protection.',
      'Examining the circulatory system’s role in transporting oxygen, nutrients, and waste products.',
      'Understanding the skin’s role in protecting the body and regulating temperature.',
      'Exploring the heart’s role in pumping blood throughout the body.',
      'Examining the respiratory system’s role in exchanging oxygen and carbon dioxide.',
      'Understanding the importance of dental health in overall well-being.',
      'Exploring the eyes’ role in providing vision and perception.',
      'Examining the digestive system’s role in breaking down food and absorbing nutrients.',
      'Understanding the integumentary system’s role in protection and regulation.',
      'Exploring the skeletal system’s role in structure and movement.',
      'Examining the muscular system’s role in movement and posture.',
      'Understanding how the nervous system coordinates body functions.',
      'Exploring how the immune system protects the body.'
    ];
    return {
      slug: `health-wellness-episode-${i + 1}`,
      showSlug: 'health-wellness',
      title: titles[i],
      description: descriptions[i],
      videoUrl: '/images/Health.jpg',
      thumbnailUrl: '/images/Health.jpg',
      thumbnailAlt: 'Doctor explaining health topic',
      publishedAt: `2025-06-${String(2 + i).padStart(2, '0')}`,
    };
  }),

  // Breath of Praise Episodes (16)
  ...[...Array(16)].map((_, i) => {
    const titles = [
      'This Man, Daniel',
      'The Ten-Day Exam',
      'Nebuchadnezzar’s Dream',
      'The Fourth Man',
      'A Mad King',
      'Writing on the Wall',
      'Hungry Lions That Won’t Eat',
      'Back to the Future',
      'Cleansing of the Sanctuary',
      'Visions and Interpretations',
      'Visions and Interpretations II',
      'Greatly Beloved',
      'Visions and Interpretations III',
      'Current Affairs Predicted Long Ago',
      'The End of History',
      'Choir Practice for Heaven'
    ];
    const descriptions = [
      'Introducing Daniel’s faith and commitment in Babylon.',
      'Daniel and friends stand firm in dietary faithfulness.',
      'God reveals mysteries through dreams to Daniel.',
      'God’s presence in the fiery furnace.',
      'God humbles the proud King Nebuchadnezzar.',
      'God’s judgment on Belshazzar’s arrogance.',
      'Daniel’s protection in the lion’s den.',
      'Prophetic insights into the future.',
      'The meaning and importance of sanctuary cleansing.',
      'First vision of future kingdoms.',
      'Further interpretation and prophetic depth.',
      'Daniel is called “greatly beloved” and receives divine reassurance.',
      'Continuing the prophetic revelations.',
      'Modern relevance of Daniel’s prophecies.',
      'Prophecy about the end times and judgment.',
      'Final encouragement through worship and prophecy.'
    ];
    return {
      slug: `breath-of-praise-episode-${i + 1}`,
      showSlug: 'breath-of-praise',
      title: titles[i],
      description: descriptions[i],
      videoUrl: '/images/Praise.jpg',
      thumbnailUrl: '/images/Praise.jpg',
      thumbnailAlt: 'Musical Bible study performance',
      publishedAt: `2025-06-${String(5 + i).padStart(2, '0')}`,
    };
  }),

  // Children (Little Lights) Episodes (14)
  ...[...Array(14)].map((_, i) => {
    const titles = [
      'The Beginning',
      'Trusting God',
      'Courage in God',
      'Faithfulness',
      'Loving Others',
      'God\'s Provision',
      'God\'s Love',
      'Forgiveness',
      'Spiritual Strength',
      'Living for God',
      'Jesus\' Care',
      'Blessed Living',
      'Talking to God',
      'Sharing Jesus'
    ];
    const descriptions = [
      'Joseph’s dreams and his father’s love (Genesis 37:1–11).',
      'Joseph is sold but continues trusting God (Genesis 37:12–36).',
      'Joseph stands for truth in Potiphar’s house (Genesis 39:1–20).',
      'Joseph stays faithful even in prison (Genesis 39:21–23).',
      'Joseph cares for others while imprisoned (Genesis 40).',
      'Joseph interprets Pharaoh’s dreams and is elevated (Genesis 41).',
      'Joseph’s heart softens toward his brothers (Genesis 42–43).',
      'Joseph forgives his brothers from the heart (Genesis 45).',
      'Joseph recognizes God’s hand in his story (Genesis 45:5–8).',
      'Joseph lives a God-honoring life in Egypt (Genesis 47).',
      'Joseph provides and cares for his family (Genesis 47:11–12).',
      'Jacob blesses Joseph’s sons (Genesis 48).',
      'Joseph continues honoring God in all he does (Genesis 50:19–21).',
      'Joseph testifies to God’s saving plan (Genesis 50:24–26).'
    ];
    return {
      slug: `children-episode-${i + 1}`,
      showSlug: 'children',
      title: titles[i],
      description: descriptions[i],
      videoUrl: '/images/Lights.jpg',
      thumbnailUrl: '/images/Lights.jpg',
      thumbnailAlt: 'Animated story from Joseph\'s life',
      publishedAt: `2025-06-${String(7 + i).padStart(2, '0')}`,
    };
  })
];
