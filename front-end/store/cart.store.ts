import { create } from 'zustand';
import { CartItem, CartStore } from '@/utils/types';

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],

  addToCart: (menu) =>
    set((state) => {
      const exist = state.cartItems.find((item) => item.menuId === menu.menuId);
      if (exist) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.menuId === menu.menuId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      const newCartItem: CartItem = {
        menuId: menu.menuId,
        name: menu.name,
        category: menu.category,
        price: menu.price,
        quantity: 1,
      };

      return {
        cartItems: [...state.cartItems, newCartItem],
      };
    }),

  getTotalPrice: () =>
    get().cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),

  getTotalQty: () =>
    get().cartItems.reduce((sum, item) => sum + item.quantity, 0),

  clearCart: () => set({ cartItems: [] }),
}));
