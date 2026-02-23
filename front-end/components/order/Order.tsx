'use client';

import OrderPanel from '@/app/(customer)/table/[tableId]/_components/OrderPanel';
import CustomerOrders from './CustomerOrders';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { OrderType } from '@/utils/types';
import Summary from './../Summary';
import CheckBillButton from './CheckBillButton';

const Order = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const params = useParams();
  const tableId = params.tableId as string;

  const summary = orders.reduce(
    (acc, order) => {
      order.items.forEach((item) => {
        acc.totalQty += item.quantity;
        acc.totalPrice += item.price * item.quantity;
      });
      return acc;
    },
    { totalQty: 0, totalPrice: 0 },
  );

  useEffect(() => {
    if (!tableId) return;
    const fetchOrder = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/orders/${tableId}`,
        );
        setOrders(res.data);
      } catch (err) {
        console.error(err);
      } finally {
      }
    };

    fetchOrder();
  }, [tableId]);

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
