// export interface Product {
//     id: number;
//     title: string;
//     description: string;
//     price: number;
//     discountPercentage?: number;
//     rating?: number;
//     stock?: number;
//     brand?: string;
//     category?: string;
//     thumbnail: string;
//     images?: string[];
//   }
export interface Inventor {
  id: number;
  first: string;
  last: string;
  year: number;
  passed: number;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
