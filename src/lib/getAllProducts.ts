// Product interface based on DummyJSON API response
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export default async function getAllProduct(): Promise<ProductsResponse> {
  const result = await fetch('https://dummyjson.com/products');
  return result.json();
}