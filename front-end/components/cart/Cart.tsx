'use client';

import OrderPanel from '@/app/(customer)/tables/[tableId]/menu/_components/OrderPanel';
import CartList from './CartList';
import CartSummary from './CartSummary';

const Cart = () => {
  return (
    <div className="lg:border-l lg:w-[30%] relative h-full overflow-hidden">
      <OrderPanel />
      <CartList />
      <CartSummary />
    </div>
  );
};
export default Cart;
