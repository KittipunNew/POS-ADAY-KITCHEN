'use client';

import OrderButton from './OrderButton';
import PaymentButton from './PaymentButton';
import { useCartStore } from '@/store/cart.store';

const OrderSummary = () => {
  const totalQty = useCartStore((s) => s.getTotalQty());

  const totalPrice = useCartStore((s) => s.getTotalPrice());

  return (
    <div className="bg-white p-5">
      <h1 className="text-neutral-400 text-end">{totalQty} รายการ</h1>
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
