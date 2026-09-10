import { Home, Users, FileText, BookOpen, Calendar, HandHeart, MessagesSquare, Sparkles, BarChart3, Bell, LifeBuoy, Settings, HeartHandshake } from 'lucide-react';

export const adminNavSections = [
  {
    title: 'OVERVIEW',
    items: [{ label: 'Dashboard', icon: Home, path: '/admin' }],
  },
  {
    title: 'MANAGEMENT',
    items: [
      { label: 'Users', icon: Users, path: '/admin/users' },
      { label: 'Contents', icon: FileText, path: '/admin/contents' },
      { label: 'Courses', icon: BookOpen, path: '/admin/courses' },
      { label: 'Events', icon: Calendar, path: '/admin/events' },
      { label: 'Volunteer Management', icon: HeartHandshake, path: '/admin/volunteering' },
      { label: 'Donations', icon: HandHeart, path: '/admin/donations' },
      { label: 'Community', icon: MessagesSquare, path: '/admin/community' },
    ],
  },
  {
    title: 'INTELLIGENCE',
    items: [
      { label: 'AI Analytics', icon: Sparkles, path: '/admin/ai-analytics' },
      { label: 'Reports and Analytics', icon: BarChart3, path: '/admin/reports' },
    ],
  },
  {
    title: 'COMMUNICATION',
    items: [
      { label: 'Notifications', icon: Bell, path: '/admin/notifications' },
      { label: 'Support', icon: LifeBuoy, path: '/admin/support' },
    ],
  },
  {
    title: 'ADMINISTRATION',
    items: [{ label: 'Settings', icon: Settings, path: '/admin/settings' }],
  },
];