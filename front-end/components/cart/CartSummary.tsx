'use client';

import ConfirmOrderButton from './ConfirmOrderButton';
import CallStaffButton from '../table/CallStaffButton';
import { useCartStore } from '@/store/cart.store';

const CartSummary = () => {
  const totalQty = useCartStore((s) => s.getTotalQty());

  const totalPrice = useCartStore((s) => s.getTotalPrice());

  return (
    <div className="bg-white p-5">
      <h1 className="text-neutral-400 text-end">{totalQty} รายการ</h1>
      <div className="flex justify-between text-2xl">
        <h1>ยอดรวม</h1>
        <p>{totalPrice.toLocaleString()} ฿</p>
      </div>

      <div className="mt-3">
        <ConfirmOrderButton />
      </div>
    </div>
  );
};
export default CartSummary;
