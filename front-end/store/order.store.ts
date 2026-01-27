import { create } from 'zustand';
import { OrderItem, OrderStore } from '@/utils/types';

export const useOrderStore = create<OrderStore>((set, get) => ({
  orderList: [],

  addToOrder: (menu) =>
    set((state) => {
      const exist = state.orderList.find((item) => item.id === menu.id);

      if (exist) {
        return {
          orderList: state.orderList.map((item) =>
            item.id === menu.id ? { ...item, qty: item.qty + 1 } : item,
          ),
        };
      }

      const newOrderItem: OrderItem = {
        id: menu.id,
        name: menu.name,
        category: menu.category,
        price: menu.price,
        qty: 1,
        status: 'PENDING',
      };

      return {
        orderList: [...state.orderList, newOrderItem],
      };
    }),

  getTotalPrice: () =>
    get().orderList.reduce((sum, item) => sum + item.price * item.qty, 0),

  getTotalOrder: () => get().orderList.reduce((sum, item) => sum + item.qty, 0),

  clearOrder: () => set({ orderList: [] }),
}));
