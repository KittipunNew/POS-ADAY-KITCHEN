import OrderPanel from '@/app/(customer)/tables/[tableId]/menu/_components/OrderPanel';
import CartSummary from '../cart/CartSummary';

const Order = () => {
  return (
    <div className="lg:w-[30%]">
      <OrderPanel />
      Order
      <CartSummary />
    </div>
  );
};
export default Order;
