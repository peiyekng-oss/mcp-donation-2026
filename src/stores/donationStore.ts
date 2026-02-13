import {create} from 'zustand';

interface Donation {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  location: string;
  donor: any; // Consider creating a more specific type for donor
  quantity?: number; // Make quantity optional as it is not in all mock data
  imageUrl?: string; // Make imageUrl optional
}

interface DonationState {
  donations: Donation[];
  selectedDonation: Donation | null;
  loading: boolean;
  fetchDonations: () => Promise<void>;
  fetchDonationById: (id: string) => Promise<void>;
  createDonation: (newDonation: Omit<Donation, 'id'>) => Promise<void>;
}

const useDonationStore = create<DonationState>((set) => ({
  donations: [],
  selectedDonation: null,
  loading: false,
  fetchDonations: async () => {
    set({ loading: true });
    try {
      const response = await fetch('http://localhost:3001/api/donations');
      const donations = await response.json();
      set({ donations, loading: false });
    } catch (error) {
      console.error('Error fetching donations:', error);
      set({ loading: false });
    }
  },
  fetchDonationById: async (id: string) => {
    set({ loading: true });
    try {
      const response = await fetch(`http://localhost:3001/api/donations/${id}`);
      const donation = await response.json();
      set({ selectedDonation: donation, loading: false });
    } catch (error) {
      console.error(`Error fetching donation with id ${id}:`, error);
      set({ loading: false });
    }
  },
  createDonation: async (newDonation: Omit<Donation, 'id'>) => {
    set({ loading: true });
    try {
      const response = await fetch('http://localhost:3001/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDonation),
      });
      const createdDonation = await response.json();
      set((state) => ({
        donations: [createdDonation, ...state.donations],
        loading: false,
      }));
    } catch (error) {
      console.error('Error creating donation:', error);
      set({ loading: false });
    }
  },
}));

export default useDonationStore;
