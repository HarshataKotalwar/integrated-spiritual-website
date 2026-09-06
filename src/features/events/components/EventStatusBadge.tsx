import type { EventStatus } from '../types/event.types';
import './EventStatusBadge.css';

interface EventStatusBadgeProps {
  status: EventStatus;
}

const EventStatusBadge = ({ status }: EventStatusBadgeProps) => {
  return (
    <span className={`event-status-badge event-status-badge-${status}`}>
      {status}
    </span>
  );
};

export default EventStatusBadge;
