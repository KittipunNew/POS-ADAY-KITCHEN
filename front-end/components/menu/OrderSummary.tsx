import OrderButton from './OrderButton';
import PaymentButton from './PaymentButton';
import { useOrderStore } from '@/store/order.store';

const OrderSummary = () => {
  const totalOrder = useOrderStore((s) => s.getTotalOrder());

  const totalPrice = useOrderStore((s) => s.getTotalPrice());

  return (
    <div className="bg-white p-5">
      <h1 className="text-neutral-400 text-end">{totalOrder} รายการ</h1>
      <div className="flex justify-between text-2xl">
        <h1>ยอดรวม</h1>
        <p>{totalPrice.toLocaleString()} ฿</p>
      </div>
      <div className="flex justify-between gap-3 my-3">
        <OrderButton />
        <PaymentButton />
      </div>
    </div>
  );
};
export default OrderSummary;
