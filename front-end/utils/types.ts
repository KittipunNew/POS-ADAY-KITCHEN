export type Menu = {
  id: number;
  name: string;
  category: 'FOOD' | 'DRINK';
  price: number;
};

export type OrderItem = {
  id: number;
  name: string;
  category: 'FOOD' | 'DRINK';
  price: number;
  qty: number;
  status: 'PENDING' | 'COOKING' | 'DONE' | 'CANCELLED';
};

export type OrderStore = {
  orderList: OrderItem[];
  addToOrder: (menu: Menu) => void;
  getTotalPrice: () => number;
  getTotalOrder: () => number;
  clearOrder: () => void;
};
