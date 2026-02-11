'use client';

import ConfirmOrderButton from './ConfirmOrderButton';

import { useCartStore } from '@/store/cart.store';

const CartSummary = () => {
  const totalQty = useCartStore((s) => s.getTotalQty());
  const totalPrice = useCartStore((s) => s.getTotalPrice());

  return (
    <>
      <div className="h-35 xl:hidden"></div>
      <div className="fixed w-full bottom-0 xl:w-[30%]">
        <div className="bg-white p-5 border-t md:border-none md:shadow">
          <h1 className="text-neutral-400 text-end">{totalQty} รายการ</h1>
          <div className="flex justify-between text-2xl">
            <h1>ยอดในตะกร้า</h1>
            <p>{totalPrice.toLocaleString()} ฿</p>
          </div>

          <div className="mt-3">
            <ConfirmOrderButton />
          </div>
        </div>
      </div>
    </>
  );
};
export default CartSummary;
