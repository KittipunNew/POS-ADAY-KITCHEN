import OrderPanel from '@/app/(customer)/tables/[tableId]/menu/_components/OrderPanel';
import CartSummary from '../cart/CartSummary';

const Order = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:border-l lg:w-[30%] relative h-full overflow-hidden">
      <OrderPanel />
      {children}
      <CartSummary />
    </div>
  );
};
export default Order;
