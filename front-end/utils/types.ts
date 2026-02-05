export type Menu = {
  id: number;
  name: string;
  category: 'FOOD' | 'DRINK';
  price: number;
};

export type CartItem = {
  id: number;
  name: string;
  category: 'FOOD' | 'DRINK';
  price: number;
  qty: number;
};

export type CartStore = {
  cartItems: CartItem[];
  addToCart: (menu: Menu) => void;
  getTotalPrice: () => number;
  getTotalQty: () => number;
  clearCart: () => void;
};
