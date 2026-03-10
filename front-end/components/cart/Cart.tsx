'use client';

import OrderPanel from '@/app/(customer)/table/[tableId]/_components/OrderPanel';
import CartList from './CartList';
import Summary from '../Summary';
import { useCartStore } from '@/store/cart.store';
import ConfirmOrderButton from './ConfirmOrderButton';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTable } from '@/hooks/useTable';

const Cart = () => {
  const totalQty = useCartStore((s) => s.getTotalQty());
  const totalPrice = useCartStore((s) => s.getTotalPrice());
  const { data } = useTable();
  const [tableName, setTableName] = useState<string>('');

  const params = useParams();
  const tableId = params.tableId as string;

  useEffect(() => {
    const currentTable = data?.find((table) => table._id === tableId);
    if (currentTable) {
      setTableName(currentTable.name);
    }
  }, [data, tableId]);

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
          <ConfirmOrderButton tableName={tableName} tableId={tableId} />
        </Summary>
      ) : (
        <Summary
          totalQty={totalQty}
          totalPrice={totalPrice}
          label="ยอดที่ต้องชำระ"
        >
          <ConfirmOrderButton tableName="กลับบ้าน" tableId={tableId} />
        </Summary>
      )}
    </div>
  );
};
export default Cart;
