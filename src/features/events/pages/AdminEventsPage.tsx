import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Plus } from 'lucide-react';

import AdminEventList from '../components/AdminEventList';
import AdminEventsShell from '../components/AdminEventsShell';
import { getEvents } from '../services/eventsService';
import type { Event } from '../types/event.types';
import { getApiErrorMessage } from '../utils/getApiErrorMessage';
import './AdminEventsPage.css';

const AdminEventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadEvents = useCallback(async () => {
    setLoading(true);
    setError('');

    try {
      const data = await getEvents();
      setEvents(data);
    } catch (err) {
      setError(getApiErrorMessage(err, 'Unable to load events.'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadEvents();
  }, [loadEvents]);

  return (
    <AdminEventsShell>
      <div className="admin-events-toolbar">
        <div>
          <p className="admin-events-kicker">Admin</p>
          <h1 className="admin-events-title">Events Management</h1>
          <p className="admin-events-description">
            Create and oversee spiritual gatherings, workshops, and sessions.
            Mentors cannot create or manage events.
          </p>
        </div>

        <Link to="/admin/events/create" className="admin-events-create-btn">
          <Plus size={18} />
          Create Event
        </Link>
      </div>

      {loading ? (
        <div className="admin-events-state">
          <p className="admin-events-state-text">Loading events...</p>
        </div>
      ) : null}

      {!loading && error ? (
        <div className="admin-events-state">
          <h2 className="admin-events-state-title">Unable to load events</h2>
          <p className="admin-events-error-text">{error}</p>
          <button type="button" className="admin-events-retry" onClick={() => void loadEvents()}>
            Try again
          </button>
        </div>
      ) : null}

      {!loading && !error && events.length === 0 ? (
        <div className="admin-events-empty">
          <Calendar className="admin-events-empty-icon" size={48} />
          <h2 className="admin-events-empty-title">No events yet</h2>
          <p className="admin-events-empty-text">
            Create your first event to publish retreats, workshops, and live sessions.
          </p>
          <Link to="/admin/events/create" className="admin-events-create-btn">
            <Plus size={18} />
            Create Event
          </Link>
        </div>
      ) : null}

      {!loading && !error && events.length > 0 ? (
        <AdminEventList events={events} />
      ) : null}
    </AdminEventsShell>
  );
};

export default AdminEventsPage;
