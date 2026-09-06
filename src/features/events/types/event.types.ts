export type EventType = 'online' | 'offline';

export type EventStatus = 'draft' | 'published' | 'cancelled';

export interface Event {
  id: number;
  title: string;
  description: string | null;
  banner_url: string | null;
  event_type: EventType;
  event_date: string;
  start_time: string;
  duration_minutes: number;
  location: string | null;
  meeting_url: string | null;
  capacity: number | null;
  fee: number;
  status: EventStatus;
  created_by: number;
  created_by_name?: string;
  registered_count?: number;
  created_at: string;
  updated_at: string;
}

export interface EventRegistration {
  id: number;
  event_id: number;
  user_id: number;
  registered_at: string;
}

export interface CreateEventData {
  title: string;
  description?: string;
  banner_url?: string;
  event_type: EventType;
  event_date: string;
  start_time: string;
  duration_minutes: number;
  location?: string;
  meeting_url?: string;
  capacity?: number;
  fee?: number;
  status?: EventStatus;
}

export type EventFormStatus = 'draft' | 'published';

export interface EventFormValues {
  title: string;
  description: string;
  banner_url: string;
  event_type: EventType;
  event_date: string;
  start_time: string;
  duration_minutes: string;
  location: string;
  meeting_url: string;
  capacity: string;
  fee: string;
  status: EventFormStatus;
}

export type EventFormErrors = Partial<Record<keyof EventFormValues, string>>;