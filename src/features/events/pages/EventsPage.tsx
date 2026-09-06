import { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

import EventCard from '../components/EventCard';
import { getEvents } from '../services/eventsService';
import type { Event } from '../types/event.types';

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (err) {
        console.error(err);
        setError('Unable to load events.');
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F7F4ED] px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F7F4ED] px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F4ED] px-6 py-10">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#8A8F63]">
            Spiritual Events
          </p>

          <h1 className="text-4xl font-semibold text-[#30352A]">
            Upcoming Events
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Explore upcoming spiritual sessions, retreats, workshops and
            gatherings.
          </p>
        </div>

        {events.length === 0 ? (
          <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
            <Calendar className="mx-auto mb-4 h-12 w-12 text-[#8A8F63]" />

            <h2 className="text-xl font-semibold text-[#30352A]">
              No upcoming events
            </h2>

            <p className="mt-2 text-gray-500">
              New events will appear here once they are published.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default EventsPage;