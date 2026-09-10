import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getEvents } from '@/features/events/services/eventsService';
import type { Event } from '@/features/events/types/event.types';
import { formatEventTime } from '@/features/events/utils/eventForm';
import { getApiErrorMessage } from '@/features/events/utils/getApiErrorMessage';

const MONTHS = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

const todayIsoDate = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const eventDateParts = (eventDate: string) => {
  const isoDay = eventDate.slice(0, 10);
  const [year, month, day] = isoDay.split('-').map(Number);

  if (!year || !month || !day) {
    return { monthLabel: '', dayLabel: isoDay };
  }

  return {
    monthLabel: MONTHS[month - 1] ?? '',
    dayLabel: String(day),
  };
};

const UpcomingEventsWidget = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await getEvents();
        const today = todayIsoDate();
        const upcoming = data
          .filter((event) => event.event_date.slice(0, 10) >= today)
          .slice(0, 2);

        setEvents(upcoming);
      } catch (err) {
        setError(getApiErrorMessage(err, 'Unable to load upcoming events.'));
      } finally {
        setLoading(false);
      }
    };

    void loadEvents();
  }, []);

  return (
    <div className="dash-widget-card">
      <div className="dash-widget-header-row">
        <h3 className="dash-widget-title">Upcoming Events</h3>
        <Link to="/events" className="dash-widget-link">
          View Calendar →
        </Link>
      </div>

      {loading ? (
        <p className="dash-widget-subtext">Loading upcoming events...</p>
      ) : null}

      {!loading && error ? (
        <p className="dash-event-error">{error}</p>
      ) : null}

      {!loading && !error && events.length === 0 ? (
        <p className="dash-widget-subtext">No upcoming events yet.</p>
      ) : null}

      {!loading && !error
        ? events.map((event) => {
            const { monthLabel, dayLabel } = eventDateParts(event.event_date);
            const typeLabel = event.event_type === 'online' ? 'Online' : 'Offline';

            return (
              <div key={event.id} className="dash-event-row">
                <div className="dash-event-date">
                  <span>{monthLabel}</span>
                  <strong>{dayLabel}</strong>
                </div>
                <div className="dash-event-info">
                  <p className="dash-event-title">{event.title}</p>
                  <p className="dash-event-meta">
                    {formatEventTime(event.start_time)} · {typeLabel}
                  </p>
                </div>
                <Link to={`/events/${event.id}`} className="dash-event-register-btn">
                  Register
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default UpcomingEventsWidget;
