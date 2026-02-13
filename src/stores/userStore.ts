import {create} from 'zustand';

interface User {
  id: string;
  name: string;
  type: 'Donor' | 'NGO';
  email: string;
  registrationDate: string;
  status: 'Active' | 'Suspended' | 'Pending';
}

interface UserState {
  users: User[];
  loading: boolean;
  fetchUsers: () => Promise<void>;
}

const useUserStore = create<UserState>((set) => ({
  users: [],
  loading: false,
  fetchUsers: async () => {
    set({ loading: true });
    try {
      const response = await fetch('http://localhost:3001/api/users');
      const users = await response.json();
      set({ users, loading: false });
    } catch (error) {
      console.error('Error fetching users:', error);
      set({ loading: false });
    }
  },
}));

export default useUserStore;
