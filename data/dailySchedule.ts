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
    startTime: '15:00',
    endTime: '15:30',
    title: 'Breath of Praise',
    description: 'Start your afternoon with uplifting worship and heartfelt praise. Join us in a time of spiritual renewal and joyful song.',
    duration: '30 min',
    mediaSrc: '/images/sample.avif', // Smaller placeholder for preview
    mediaType: 'image',
  },
  {
    startTime: '15:30',
    endTime: '16:15',
    title: 'Health & Wellness',
    description: 'Learn practical tips for a healthier lifestyle, focusing on physical, mental, and spiritual well-being. Empower yourself with knowledge for a balanced life.',
    duration: '45 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '16:15',
    endTime: '16:30',
    title: 'Music Interlude',
    description: 'A short break with serene and inspiring music to reflect and prepare for the next session. A moment of peace and contemplation.',
    duration: '15 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '16:30',
    endTime: '17:15',
    title: 'Children\'s Program',
    description: 'Engaging and educational activities for our young ones, designed to teach valuable lessons in a fun and interactive environment.',
    duration: '45 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '17:15',
    endTime: '17:30',
    title: 'Music Interlude',
    description: 'Another moment of musical reflection and transition, offering a calming atmosphere before the next segment of our program.',
    duration: '15 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '17:30',
    endTime: '18:15',
    title: 'Family Hub',
    description: 'Strengthen family bonds and explore faith-based principles for a harmonious home. Practical advice and discussions for every family member.',
    duration: '45 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '18:15',
    endTime: '18:30',
    title: 'Music Interlude',
    description: 'A final musical pause to set a contemplative mood before the evening\'s main events. Enjoy the peaceful melodies.',
    duration: '15 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '18:30',
    endTime: '18:45',
    title: 'Theme Song',
    description: 'Join us in singing our inspiring theme song, a powerful anthem that encapsulates the spirit and message of our community.',
    duration: '15 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '18:45',
    endTime: '19:45',
    title: 'Sermon: Jesus Saves',
    description: 'An impactful sermon exploring the transformative power of faith and salvation through Jesus Christ. A message of hope and redemption.',
    duration: '60 min',
    mediaSrc: '/images/sample.avif', // Placeholder for video preview
    mediaType: 'video',
  },
  {
    startTime: '19:45',
    endTime: '20:30',
    title: 'Testimonies',
    description: 'Hear inspiring personal stories of faith, healing, and overcoming challenges. Witness the power of God\'s grace in real lives.',
    duration: '45 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '20:30',
    endTime: '21:00',
    title: 'Closing Remarks',
    description: 'Concluding thoughts and blessings for the day, preparing hearts for the evening and the days ahead. A time for reflection and gratitude.',
    duration: '30 min',
    // No media for closing remarks
  },
];