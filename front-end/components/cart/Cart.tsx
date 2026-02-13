'use client';

import OrderPanel from '@/app/(customer)/tables/[tableId]/menu/_components/OrderPanel';
import CartList from './CartList';
import CartSummary from './CartSummary';

const Cart = () => {
  return (
    <div className="xl:w-[30%] h-full flex flex-col">
      <OrderPanel />
      <CartList />
      <CartSummary />
    </div>
  );
};
export default Cart;
