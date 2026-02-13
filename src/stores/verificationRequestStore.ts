import {create} from 'zustand';

interface VerificationRequest {
  id: string;
  ngoName: string;
  registrationNumber: string;
  submittedDate: string;
  documentUrl: string;
}

interface VerificationRequestState {
  requests: VerificationRequest[];
  loading: boolean;
  fetchRequests: () => Promise<void>;
}

const useVerificationRequestStore = create<VerificationRequestState>((set) => ({
  requests: [],
  loading: false,
  fetchRequests: async () => {
    set({ loading: true });
    try {
      const response = await fetch('http://localhost:3001/api/verification-requests');
      const requests = await response.json();
      set({ requests, loading: false });
    } catch (error) {
      console.error('Error fetching verification requests:', error);
      set({ loading: false });
    }
  },
}));

export default useVerificationRequestStore;
