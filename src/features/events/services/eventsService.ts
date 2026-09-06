import axiosInstance from '../../../services/axiosInstance';
import type { CreateEventData, Event } from '../types/event.types';

const asEventArray = (data: unknown): Event[] => {
  return Array.isArray(data) ? data : [];
};

export const getEvents = async (): Promise<Event[]> => {
  const response = await axiosInstance.get('/events');
  return response.data;
};

export const getAdminEvents = async (): Promise<Event[]> => {
  const response = await axiosInstance.get('/events/admin/all');
  return asEventArray(response.data);
};

export const getEventById = async (id: number): Promise<Event> => {
  const response = await axiosInstance.get(`/events/${id}`);
  return response.data;
};

export const createEvent = async (
  eventData: CreateEventData
): Promise<Event> => {
  const response = await axiosInstance.post('/events', eventData);
  return response.data;
};

export const updateEvent = async (
  id: number,
  eventData: CreateEventData
): Promise<Event> => {
  const response = await axiosInstance.put(`/events/${id}`, eventData);
  return response.data.event ?? response.data;
};

export const cancelEvent = async (id: number): Promise<Event> => {
  const response = await axiosInstance.patch(`/events/${id}/cancel`);
  return response.data.event ?? response.data;
};

export const deleteEvent = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/events/${id}`);
};

export const registerForEvent = async (
  eventId: number
) => {
  const response = await axiosInstance.post(`/events/${eventId}/register`);
  return response.data;
};