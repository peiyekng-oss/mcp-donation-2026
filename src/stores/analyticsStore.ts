import {create} from 'zustand';

interface UserGrowth {
  date: string;
  users: number;
}

interface DonationVolume {
  month: string;
  donations: number;
}

interface CategoryDistribution {
  name: string;
  value: number;
}

interface AnalyticsState {
  userGrowth: UserGrowth[];
  donationVolume: DonationVolume[];
  categoryDistribution: CategoryDistribution[];
  loading: boolean;
  fetchUserGrowth: () => Promise<void>;
  fetchDonationVolume: () => Promise<void>;
  fetchCategoryDistribution: () => Promise<void>;
}

const useAnalyticsStore = create<AnalyticsState>((set) => ({
  userGrowth: [],
  donationVolume: [],
  categoryDistribution: [],
  loading: false,
  fetchUserGrowth: async () => {
    set({ loading: true });
    try {
      const response = await fetch('http://localhost:3001/api/analytics/user-growth');
      const userGrowth = await response.json();
      set({ userGrowth, loading: false });
    } catch (error) {
      console.error('Error fetching user growth data:', error);
      set({ loading: false });
    }
  },
  fetchDonationVolume: async () => {
    set({ loading: true });
    try {
      const response = await fetch('http://localhost:3001/api/analytics/donation-volume');
      const donationVolume = await response.json();
      set({ donationVolume, loading: false });
    } catch (error) {
      console.error('Error fetching donation volume data:', error);
      set({ loading: false });
    }
  },
  fetchCategoryDistribution: async () => {
    set({ loading: true });
    try {
      const response = await fetch('http://localhost:3001/api/analytics/category-distribution');
      const categoryDistribution = await response.json();
      set({ categoryDistribution, loading: false });
    } catch (error) {
      console.error('Error fetching category distribution data:', error);
      set({ loading: false });
    }
  },
}));

export default useAnalyticsStore;
