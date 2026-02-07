export type Menu = {
  id: number;
  name: string;
  category: 'FOOD' | 'DRINK';
  price: number;
};

export type CartItem = {
  menuId: number;
  name: string;
  category: 'FOOD' | 'DRINK';
  price: number;
  quantity: number;
};

type OrderStatus = 'PENDING' | 'COOKING' | 'DONE' | 'CANCELLED';

export type OrderType = {
  _id: string;
  tableId: string;
  items: CartItem[];
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
};

export type CartStore = {
  cartItems: CartItem[];
  addToCart: (menu: Menu) => void;
  getTotalPrice: () => number;
  getTotalQty: () => number;
  clearCart: () => void;
};
