import axiosInstance from '../../../services/axiosInstance';
import type { CreateEventData, Event } from '../types/event.types';

export const getEvents = async (): Promise<Event[]> => {
  const response = await axiosInstance.get('/events');
  return response.data;
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

export const registerForEvent = async (
  eventId: number
) => {
  const response = await axiosInstance.post(`/events/${eventId}/register`);
  return response.data;
};