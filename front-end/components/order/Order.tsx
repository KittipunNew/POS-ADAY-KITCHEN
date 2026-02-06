import OrderPanel from '@/app/(customer)/tables/[tableId]/menu/_components/OrderPanel';
import CartSummary from '../cart/CartSummary';

const Order = () => {
  return (
    <div className="lg:border-l lg:w-[30%] relative h-full overflow-hidden">
      <OrderPanel />
      Order
      <CartSummary />
    </div>
  );
};
export default Order;
