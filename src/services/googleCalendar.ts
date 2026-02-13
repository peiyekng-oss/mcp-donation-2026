
// This is a placeholder for a frontend service that would interact with a real backend.
// In this simulation, we're directly calling the "server-side" logic for simplicity.

interface CalendarEvent {
  summary: string;
  description: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  attendees: Array<{ email: string }>;
}

export const googleCalendarService = {
  createEvent: async (event: CalendarEvent): Promise<void> => {
    try {
      const response = await fetch('http://localhost:3001/api/calendar/create-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });

      if (!response.ok) {
        throw new Error('Failed to create event');
      }

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error scheduling event:', error);
      alert('Failed to schedule in Google Calendar.');
    }
  },
};
