import AdminEventCard from './AdminEventCard';
import type { Event } from '../types/event.types';
import './AdminEventList.css';

interface AdminEventListProps {
  events: Event[];
}

const AdminEventList = ({ events }: AdminEventListProps) => {
  return (
    <div className="admin-event-list">
      {events.map((event) => (
        <AdminEventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default AdminEventList;
