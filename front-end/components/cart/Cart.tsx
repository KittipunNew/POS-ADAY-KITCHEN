'use client';

import OrderPanel from '@/app/(customer)/table/[tableId]/_components/OrderPanel';
import CartList from './CartList';
import Summary from '../Summary';
import { useCartStore } from '@/store/cart.store';
import ConfirmOrderButton from './ConfirmOrderButton';
import { useParams } from 'next/navigation';

const Cart = () => {
  const totalQty = useCartStore((s) => s.getTotalQty());
  const totalPrice = useCartStore((s) => s.getTotalPrice());

  const params = useParams();
  const tableId =
    (Array.isArray(params.tableId) ? params.tableId[0] : params.tableId) ?? '';

  console.log(typeof tableId);

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
          <ConfirmOrderButton tableId={tableId} />
        </Summary>
      ) : (
        <Summary
          totalQty={totalQty}
          totalPrice={totalPrice}
          label="ยอดที่ต้องชำระ"
        >
          <ConfirmOrderButton tableId="กลับบ้าน" />
        </Summary>
      )}
    </div>
  );
};
export default Cart;
