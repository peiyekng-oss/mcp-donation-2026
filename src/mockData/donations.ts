
export interface Donation {
  id: string;
  title: string;
  category: string;
  quantity: number;
  description: string;
  imageUrl: string;
  donor: {
    name: string;
    location: string;
  };
}

export const mockDonations: Donation[] = [
  {
    id: '1',
    title: 'Surplus Office Chairs',
    category: 'Furniture',
    quantity: 15,
    description: 'Lightly used ergonomic office chairs. All in good condition. Must be picked up by Friday.',
    imageUrl: 'https://images.unsplash.com/photo-1580480072931-6151216b3576?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    donor: {
      name: 'Tech Solutions Inc.',
      location: 'Downtown Core',
    },
  },
  {
    id: '2',
    title: 'Canned Goods',
    category: 'Food',
    quantity: 250,
    description: 'A variety of canned vegetables and soups. Expiry dates are all 6+ months away.',
    imageUrl: 'https://images.unsplash.com/photo-1560067252-390555ab38a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    donor: {
      name: 'Global Foods Co.',
      location: 'Jurong East',
    },
  },
  {
    id: '3',
    title: 'Winter Jackets',
    category: 'Clothing',
    quantity: 80,
    description: 'Brand new winter jackets in various sizes for adults and children.',
    imageUrl: 'https://images.unsplash.com/photo-1603205315889-4188b3a0c4f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    donor: {
      name: 'Fashion Forward LLP',
      location: 'Paya Lebar',
    },
  },
  {
    id: '4',
    title: 'Used Laptops',
    category: 'Electronics',
    quantity: 25,
    description: '5-year-old business laptops. All have been wiped clean and are in working order. Chargers included.',
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7ef675155531?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    donor: {
      name: 'Innovatech',
      location: 'one-north',
    },
  },
];
