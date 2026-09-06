import { Calendar, Clock, MapPin, Users, Video } from 'lucide-react';
import type { Event } from '../types/event.types';

interface EventCardProps {
  event: Event;
  onView?: (event: Event) => void;
  showStatus?: boolean;
  showActions?: boolean;
}

const EventCard = ({
  event,
  onView,
  showStatus = false,
  showActions = false,
}: EventCardProps) => {
  const isOnline = event.event_type === 'online';

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md">
      {event.banner_url ? (
        <img
          src={event.banner_url}
          alt={event.title}
          className="h-48 w-full object-cover"
        />
      ) : (
        <div className="flex h-48 items-center justify-center bg-[#E8E8D8]">
          <Calendar className="h-14 w-14 text-[#8A8F63]" />
        </div>
      )}

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-[#69734A]">
            {isOnline ? (
              <>
                <Video className="h-4 w-4" />
                Online
              </>
            ) : (
              <>
                <MapPin className="h-4 w-4" />
                Offline
              </>
            )}
          </div>

          {showStatus && (
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium capitalize text-gray-600">
              {event.status}
            </span>
          )}
        </div>

        <h2 className="text-xl font-semibold text-[#30352A]">
          {event.title}
        </h2>

        {event.description && (
          <p className="mt-2 line-clamp-2 text-sm text-gray-600">
            {event.description}
          </p>
        )}

        <div className="mt-5 space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#69734A]" />
            <span>{event.event_date}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#69734A]" />
            <span>
              {event.start_time} · {event.duration_minutes} minutes
            </span>
          </div>

          {event.capacity !== null && (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-[#69734A]" />
              <span>
                {event.registered_count ?? 0} / {event.capacity} registered
              </span>
            </div>
          )}

          {event.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#69734A]" />
              <span>{event.location}</span>
            </div>
          )}
        </div>

        {showActions && (
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={() => onView?.(event)}
              className="flex-1 rounded-xl border border-[#69734A] px-4 py-3 font-medium text-[#69734A] transition hover:bg-[#F4F3EA]"
            >
              View
            </button>

            <button
              type="button"
              className="flex-1 rounded-xl bg-[#69734A] px-4 py-3 font-medium text-white transition hover:bg-[#59613F]"
            >
              Manage
            </button>
          </div>
        )}

        {!showActions && (
          <button
            type="button"
            onClick={() => onView?.(event)}
            className="mt-6 w-full rounded-xl bg-[#69734A] px-4 py-3 font-medium text-white transition hover:bg-[#59613F]"
          >
            View Event
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;