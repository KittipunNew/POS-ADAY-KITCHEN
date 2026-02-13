'use client';

import OrderPanel from '@/app/(customer)/tables/[tableId]/menu/_components/OrderPanel';
import CartList from './CartList';
import Summary from '../Summary';
import { useCartStore } from '@/store/cart.store';
import ConfirmOrderButton from './ConfirmOrderButton';
import { useParams } from 'next/navigation';

const Cart = () => {
  const totalQty = useCartStore((s) => s.getTotalQty());
  const totalPrice = useCartStore((s) => s.getTotalPrice());

  const params = useParams();

  console.log(typeof totalPrice, typeof totalQty);
  return (
    <div className="xl:w-[30%] h-full flex flex-col">
      <OrderPanel />
      <CartList />
      {params.tableId ? (
        <Summary
          totalQty={totalQty}
          totalPrice={totalPrice}
          label="ยอดในตะกร้า"
        >
          <ConfirmOrderButton />
        </Summary>
      ) : (
        <Summary totalQty={totalQty} totalPrice={totalPrice} label="ยอดชำระ">
          <ConfirmOrderButton />
        </Summary>
      )}
    </div>
  );
};
export default Cart;
