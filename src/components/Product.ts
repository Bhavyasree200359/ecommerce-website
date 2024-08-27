export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  export const products: Product[] = [
    { id: 1, name: 'Product 1', price: 10, description: 'This is product 1' },
    { id: 2, name: 'Product 2', price: 20, description: 'This is product 2' },
    { id: 3, name: 'Product 3', price: 30, description: 'This is product 3' },
  ];
  