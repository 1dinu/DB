
import { Product, GalleryItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 's1',
    name: 'Modern Kokis Platter',
    category: 'sweet',
    description: 'Traditional crispy rice flour cookies with a chocolate and gold dust drizzle.',
    image: 'https://picsum.photos/seed/kokis/600/400'
  },
  {
    id: 's2',
    name: 'Kavum Medley',
    category: 'sweet',
    description: 'Oil cakes flavored with high-grade treacle and modern aromatic spices.',
    image: 'https://picsum.photos/seed/kavum/600/400'
  },
  {
    id: 'sv1',
    name: 'Spicy Mutton Rolls',
    category: 'savory',
    description: 'Crispy pancakes filled with slow-cooked spicy mutton and potatoes.',
    image: 'https://picsum.photos/seed/rolls/600/400'
  },
  {
    id: 'sv2',
    name: 'Seeni Sambol Buns',
    category: 'savory',
    description: 'Soft brioche buns filled with caramelized onion relish (Seeni Sambol).',
    image: 'https://picsum.photos/seed/bun/600/400'
  },
  {
    id: 'd1',
    name: 'Watalappam Cheesecake',
    category: 'dessert',
    description: 'A fusion of creamy cheesecake and traditional Jaggery pudding.',
    image: 'https://picsum.photos/seed/watalappam/600/400'
  },
  {
    id: 'd2',
    name: 'Curd & Treacle Mousse',
    category: 'dessert',
    description: 'Light buffalo curd mousse topped with Kithul treacle reduction.',
    image: 'https://picsum.photos/seed/curd/600/400'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', title: 'Corporate High Tea', category: 'Events', image: 'https://picsum.photos/seed/event1/800/600' },
  { id: 'g2', title: 'Wedding Dessert Table', category: 'Celebrations', image: 'https://picsum.photos/seed/event2/800/600' },
  { id: 'g3', title: 'Traditional Platter', category: 'Products', image: 'https://picsum.photos/seed/event3/800/600' },
  { id: 'g4', title: 'Artisan Cakes', category: 'Cakes', image: 'https://picsum.photos/seed/event4/800/600' },
  { id: 'g5', title: 'Office Meeting Catering', category: 'Corporate', image: 'https://picsum.photos/seed/event5/800/600' },
  { id: 'g6', title: 'Birthday Savories', category: 'Celebrations', image: 'https://picsum.photos/seed/event6/800/600' },
];
