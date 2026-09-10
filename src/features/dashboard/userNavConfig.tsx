import { Home, UserPen, Flower2, LayoutGrid, Smile, BookOpen, Users, Calendar, CalendarCheck, HandHeart, HeartHandshake, Sparkles, UserCog, Settings } from 'lucide-react';

export const userNavSections = [
  {
    title: 'MY SPACE',
    items: [
      { label: 'Dashboard', icon: Home, path: '/dashboard' },
      { label: 'My Journey', icon: UserPen, path: '/dashboard/journey' },
    ],
  },
  {
    title: 'PRACTICE',
    items: [
      { label: 'Meditation', icon: Flower2, path: '/dashboard/meditation' },
      { label: 'Daily Sadhana', icon: LayoutGrid, path: '/dashboard/sadhana' },
      { label: 'Mood Tracking', icon: Smile, path: '/dashboard/mood' },
    ],
  },
  {
    title: 'LEARNING',
    items: [{ label: 'Courses', icon: BookOpen, path: '/dashboard/courses' }],
  },
  {
    title: 'CONNECT',
    items: [
      { label: 'Community', icon: Users, path: '/community' },
      { label: 'Events', icon: Calendar, path: '/events' },
      { label: 'My Events', icon: CalendarCheck, path: '/my-events' },
    ],
  },
  {
    title: 'GIVING',
    items: [
      { label: 'Donations', icon: HandHeart, path: '/dashboard/donations' },
      { label: 'Volunteering', icon: HeartHandshake, path: '/volunteering' },
      { label: 'My Volunteering', icon: HeartHandshake, path: '/my-volunteering' },
    ],
  },
  {
    title: 'AI',
    items: [{ label: 'AI Guide', icon: Sparkles, path: '/dashboard/ai-guide' }],
  },
  {
    title: 'ACCOUNT',
    items: [
      { label: 'Profile', icon: UserCog, path: '/dashboard/profile' },
      { label: 'Settings', icon: Settings, path: '/dashboard/settings' },
    ],
  },
];