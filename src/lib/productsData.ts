import { StaticImageData } from 'next/image';
import merchandise_1 from '@/assets/images/home-6/merchandise-1.png';
import merchandise_2 from '@/assets/images/home-6/merchandise-2.png';
import merchandise_3 from '@/assets/images/home-6/merchandise-3.png';
import merchandise_4 from '@/assets/images/home-6/merchandise-4.png';

export interface ProductItem {
  id: number;
  name: string;
  img: StaticImageData;
  price: string;
  link: string;
}

export const productData: ProductItem[] = [
  {
    id: 1,
    name: 'White T-Shirt',
    img: merchandise_1,
    price: '24.99',
    link: '#',
  },
  {
    id: 2,
    name: 'White Cap',
    img: merchandise_2,
    price: '24.99',
    link: '#',
  },
  {
    id: 3,
    name: 'Black T-Shirt',
    img: merchandise_3,
    price: '24.99',
    link: '#',
  },
  {
    id: 4,
    name: 'Black T-Shirt',
    img: merchandise_4,
    price: '24.99',
    link: '#',
  },
];