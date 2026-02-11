'use client';

import { OrderType } from '@/utils/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const OrderList = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:5000/api/orders');
        setOrders(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, []);

  return (
    <>
      {orders.map((item, index) => (
        <div key={index} className="flex flex-col m-3">
          {/* order card */}
          <div className="p-3 bg-white rounded-2xl shadow">
            <h1 className="text-xl mb-5">โต๊ะ {item.tableId}</h1>
            <div className="flex flex-col gap-3 bg-black">
              {item.items.map((order) => (
                <h1>{order.name}</h1>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default OrderList;
