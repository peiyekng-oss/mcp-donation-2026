
import { syncToHubSpot } from '../server/hubspot';

interface ContactPayload {
  email: string;
  firstName: string;
  lastName: string;
  companyName: string;
}

export const hubspotService = {
  syncContact: async (payload: ContactPayload) => {
    try {
      const hubspotContact = {
        email: payload.email,
        firstname: payload.firstName,
        lastname: payload.lastName,
        company: payload.companyName,
      };

      const response = await syncToHubSpot(hubspotContact);

      if (!response.success) {
        throw new Error(response.message);
      }

      return response;
    } catch (error) {
      console.error('Error syncing contact to HubSpot:', error);
      // In a real application, you might want to handle this error more gracefully
      // For example, by showing a notification to the user
      return { success: false, message: 'Failed to sync contact to HubSpot.' };
    }
  },
};
