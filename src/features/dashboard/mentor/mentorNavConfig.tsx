import { Home, Calendar, CalendarCheck, Users, MessageSquare, BookOpen, StickyNote, BarChart3, MessagesSquare, Settings, HeartHandshake } from 'lucide-react';

export const mentorNavSections = [
  {
    title: 'OVERVIEW',
    items: [
      { label: 'Dashboard', icon: Home, path: '/mentor' },
      { label: 'My Sessions', icon: Calendar, path: '/mentor/sessions' },
      { label: 'My Students', icon: Users, path: '/mentor/students' },
      { label: 'Messages', icon: MessageSquare, path: '/mentor/messages' },
    ],
  },
  {
    title: 'TEACHING',
    items: [
      { label: 'My Courses', icon: BookOpen, path: '/mentor/courses' },
      { label: 'Resources', icon: StickyNote, path: '/mentor/resources' },
      { label: 'Student Progress', icon: BarChart3, path: '/mentor/progress' },
    ],
  },
  {
    title: 'COMMUNITY',
    items: [
      { label: 'Events', icon: Calendar, path: '/events' },
      { label: 'My Events', icon: CalendarCheck, path: '/my-events' },
      { label: 'Volunteering', icon: HeartHandshake, path: '/volunteering' },
      { label: 'My Volunteering', icon: HeartHandshake, path: '/my-volunteering' },
      { label: 'Community', icon: MessagesSquare, path: '/community' },
    ],
  },
  {
    title: 'ACCOUNT',
    items: [{ label: 'Settings', icon: Settings, path: '/mentor/settings' }],
  },
];