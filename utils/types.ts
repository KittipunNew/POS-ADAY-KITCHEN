export type Menu = {
  id: number;
  name: string;
  category: 'food' | 'drink';
  price: number;
};

export type OrderItem = {
  id: number;
  name: string;
  category: 'food' | 'drink';
  price: number;
  qty: number;
  status: 'pending' | 'cooking' | 'done';
};
