export interface ScheduleItem {
  startTime: string;
  endTime: string;
  title: string;
  description: string;
  duration: string;
  mediaSrc?: string;
  mediaType?: 'image' | 'video';
}

export const dailyScheduleData: ScheduleItem[] = [
  {
    startTime: '16:30',
    endTime: '17:00',
    title: 'Little Lights Children\'s Program',
    description: 'Engaging and educational activities for our young ones, designed to teach valuable lessons in a fun and interactive environment.',
    duration: '30 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  
  {
    startTime: '17:00',
    endTime: '17:30',
    title: 'Health Presentation',
    description: 'Learn practical tips for a healthier lifestyle, focusing on physical, mental, and spiritual well-being. Empower yourself with knowledge for a balanced life.',
    duration: '30 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },  
  {
    startTime: '17:30',
    endTime: '17:35',
    title: 'Music Interlude',
    description: 'Another moment of musical reflection and transition, offering a calming atmosphere before the next segment of our program.',
    duration: '5 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '17:35',
    endTime: '18:20',
    title: 'Family Hub',
    description: 'Strengthen family bonds and explore faith-based principles for a harmonious home. Practical advice and discussions for every family member.',
    duration: '45 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '18:20',
    endTime: '18:25',
    title: 'Theme Song - Ancient Words',
    description: 'Join us in singing our inspiring theme song, a powerful anthem that encapsulates the spirit and message of our community.',
    duration: '5 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '18:25',
    endTime: '18:55',
    title: 'Sermon: The living Word',
    description: 'An impactful sermon exploring the transformative power of faith and salvation through Jesus Christ. A message of hope and redemption.',
    duration: '30 min',
    mediaSrc: '/images/sample.avif', // Placeholder for video preview
    mediaType: 'video',
  },
  {
    startTime: '18:55',
    endTime: '19:00',
    title: 'Music Interlude',
    description: 'A final musical pause to set a contemplative mood before the evening\'s main events. Enjoy the peaceful melodies.',
    duration: '5 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '19:00',
    endTime: '19:05',
    title: 'Closing Segment',
    description: 'Concluding thoughts and blessings for the day, preparing hearts for the evening and the days ahead. A time for reflection and gratitude.',
    duration: '5 min',
    // No media for closing remarks
  },
  {
    startTime: '19:05',
    endTime: '20:05',
    title: 'Breath of Praise',
    description: 'A Bible study based on the Book of Daniel with songs and performances. This segment explores the prophecies of Daniel, emphasizing their relevance today and encouraging worship through music.',
    duration: '1Hr',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
];