export interface OrderList {
  count: number;
  id: string;
}

export interface OrderGoods {
  id: string;
  title: string;
  price: number;
  weight: number;
  calories: number;
  description: string;
  category: string;
  ingredients: string[];
  image: string;
  count: number;
}
