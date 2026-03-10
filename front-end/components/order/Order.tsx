'use client';

import OrderPanel from '@/app/(customer)/table/[tableId]/_components/OrderPanel';
import CustomerOrders from './CustomerOrders';
import { useParams } from 'next/navigation';
import { OrderType } from '@/utils/types';
import Summary from './../Summary';
import CheckBillButton from './CheckBillButton';
import { useGetOrders } from '@/hooks/useOrder';

interface OrderSummary {
  totalQty: number;
  totalPrice: number;
}

const Order = () => {
  const params = useParams();
  const tableId = params.tableId as string;
  const { data: orders = [], isLoading } = useGetOrders(tableId);

  const summary = (orders as OrderType[]).reduce<OrderSummary>(
    (acc, order) => {
      order.items.forEach((item) => {
        acc.totalQty += item.quantity;
        acc.totalPrice += item.price * item.quantity;
      });
      return acc;
    },
    { totalQty: 0, totalPrice: 0 },
  );

  console.log(tableId);
  console.log(orders);

  if (isLoading) return <div>กำลังโหลดข้อมูล...</div>;

  return (
    <div className="xl:w-[30%] h-full flex flex-col">
      <OrderPanel />
      <CustomerOrders orders={orders} />
      <Summary
        totalQty={summary.totalQty}
        totalPrice={summary.totalPrice}
        label="ยอดชำระทั้งหมด"
      >
        <CheckBillButton orders={orders} />
      </Summary>
    </div>
  );
};
export default Order;
