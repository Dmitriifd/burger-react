export interface ProductModal {
  calories: number;
  category: string;
  description: string;
  id: string;
  image: string;
  ingredients: string[];
  price: number;
  title: string;
  weight: number;
}

export interface Product extends ProductModal {
  count: number
}
