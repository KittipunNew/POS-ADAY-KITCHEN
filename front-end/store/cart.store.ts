import { create } from 'zustand';
import { CartItem, CartStore } from '@/utils/types';

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],

  addToCart: (menu) =>
    set((state) => {
      const exist = state.cartItems.find((item) => item.id === menu.id);

      if (exist) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === menu.id ? { ...item, qty: item.qty + 1 } : item,
          ),
        };
      }

      const newCartItem: CartItem = {
        id: menu.id,
        name: menu.name,
        category: menu.category,
        price: menu.price,
        qty: 1,
      };

      return {
        cartItems: [...state.cartItems, newCartItem],
      };
    }),

  getTotalPrice: () =>
    get().cartItems.reduce((sum, item) => sum + item.price * item.qty, 0),

  getTotalQty: () => get().cartItems.reduce((sum, item) => sum + item.qty, 0),

  clearCart: () => set({ cartItems: [] }),
}));
