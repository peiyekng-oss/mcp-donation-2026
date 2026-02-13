
interface ContactPayload {
  email: string;
  firstName: string;
  lastName: string;
  companyName: string;
}

export const hubspotService = {
  syncContact: async (payload: ContactPayload) => {
    try {
      const response = await fetch('http://localhost:3001/api/hubspot/sync-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to sync contact');
      }

      return await response.json();
    } catch (error) {
      console.error('Error syncing contact to HubSpot:', error);
      return { success: false, message: 'Failed to sync contact to HubSpot.' };
    }
  },
};
