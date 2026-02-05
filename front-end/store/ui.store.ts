import { create } from 'zustand';

type ActivePanel = 'MENU' | 'CART' | 'ORDER';

interface UIState {
  activePanel: ActivePanel;
  showMenu: () => void;
  showCart: () => void;
  showOrder: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  activePanel: 'MENU',
  showMenu: () => set({ activePanel: 'MENU' }),
  showCart: () => set({ activePanel: 'CART' }),
  showOrder: () => set({ activePanel: 'ORDER' }),
}));
