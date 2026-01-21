
export type Page = 'home' | 'products' | 'gallery' | 'contact' | 'quote';

export interface Product {
  id: string;
  name: string;
  category: 'sweet' | 'savory' | 'dessert';
  description: string;
  price?: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}
