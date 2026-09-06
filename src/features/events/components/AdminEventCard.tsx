import { Calendar, Clock, MapPin, IndianRupee, Users, Video } from 'lucide-react';

import EventStatusBadge from './EventStatusBadge';
import type { Event } from '../types/event.types';
import {
  formatEventDate,
  formatEventFee,
  formatEventTime,
} from '../utils/eventForm';
import './AdminEventCard.css';

interface AdminEventCardProps {
  event: Event;
}

const AdminEventCard = ({ event }: AdminEventCardProps) => {
  const isOnline = event.event_type === 'online';
  const registeredCount = event.registered_count ?? 0;

  return (
    <article
      className={
        event.status === 'cancelled'
          ? 'admin-event-card admin-event-card-cancelled'
          : 'admin-event-card'
      }
    >
      {event.banner_url ? (
        <img
          src={event.banner_url}
          alt=""
          className="admin-event-card-banner"
        />
      ) : (
        <div className="admin-event-card-banner-fallback" aria-hidden="true">
          <Calendar size={40} />
        </div>
      )}

      <div className="admin-event-card-body">
        <div className="admin-event-card-top">
          <span className="admin-event-card-type">
            {isOnline ? <Video size={16} /> : <MapPin size={16} />}
            {isOnline ? 'Online' : 'Offline'}
          </span>
          <EventStatusBadge status={event.status} />
        </div>

        <h2 className="admin-event-card-title">{event.title}</h2>

        <div className="admin-event-card-meta">
          <div className="admin-event-card-meta-row">
            <Calendar size={16} />
            <span>{formatEventDate(event.event_date)}</span>
          </div>

          <div className="admin-event-card-meta-row">
            <Clock size={16} />
            <span>
              {formatEventTime(event.start_time)} · {event.duration_minutes} min
            </span>
          </div>

          <div className="admin-event-card-meta-row">
            <Users size={16} />
            <span>
              {event.capacity === null
                ? `${registeredCount} registered`
                : `${registeredCount} / ${event.capacity} registered`}
            </span>
          </div>

          <div className="admin-event-card-meta-row">
            <IndianRupee size={16} />
            <span>{formatEventFee(event.fee)}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AdminEventCard;
