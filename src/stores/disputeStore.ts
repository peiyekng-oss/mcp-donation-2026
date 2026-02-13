import {create} from 'zustand';

interface Dispute {
  id: string;
  donationId: string;
  ngoName: string;
  donorName: string;
  disputeDate: string;
  reason: string;
  photoUrl: string;
}

interface DisputeState {
  disputes: Dispute[];
  loading: boolean;
  fetchDisputes: () => Promise<void>;
}

const useDisputeStore = create<DisputeState>((set) => ({
  disputes: [],
  loading: false,
  fetchDisputes: async () => {
    set({ loading: true });
    try {
      const response = await fetch('http://localhost:3001/api/disputes');
      const disputes = await response.json();
      set({ disputes, loading: false });
    } catch (error) {
      console.error('Error fetching disputes:', error);
      set({ loading: false });
    }
  },
}));

export default useDisputeStore;
