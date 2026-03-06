export type Category = 'ALL' | 'FOOD' | 'DRINK';

export interface Menu {
  _id: string;
  name: string;
  category: Category;
  price: number;
}

export type TableStatus = 'AVAILABLE' | 'OCCUPIED';

export interface Table {
  _id: string;
  name: string;
  status: TableStatus;
}

export interface CartItem extends Menu {
  quantity: number;
}

export type OrderStatus = 'PENDING' | 'COOKING' | 'DONE' | 'CANCELLED';

export interface OrderType {
  _id: string;
  tableId: string;
  items: CartItem[];
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CartStore {
  cartItems: CartItem[];
  addToCart: (menu: Menu) => void;
  getTotalPrice: () => number;
  getTotalQty: () => number;
  clearCart: () => void;
}

export interface TakeawayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export interface SummaryProps {
  children: React.ReactNode;
  totalQty: number;
  label: string;
  totalPrice: number;
}
