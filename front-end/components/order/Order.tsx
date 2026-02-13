'use client';

import OrderPanel from '@/app/(customer)/tables/[tableId]/menu/_components/OrderPanel';
import CustomerOrders from './CustomerOrders';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import OrderSummary from './OrderSummary';
import { OrderType } from '@/utils/types';

const Order = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const params = useParams();
  const tableId = params.tableId as string;

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
      <OrderSummary orders={orders} />
    </div>
  );
};
export default Order;
