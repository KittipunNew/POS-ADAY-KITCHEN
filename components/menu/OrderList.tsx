'use client';

import { OrderItem } from '@/utils/types';

const OrderList = ({ orderList }: { orderList: OrderItem[] }) => {
  console.log(orderList);
  return (
    <div>
      <h1 className="text-2xl mb-5">รายการออเดอร์</h1>
      {orderList.map((item, index) => (
        <div
          className="flex gap-5 mb-3 p-3 w-full bg-white shadow rounded-xl justify-between"
          key={index}
        >
          <div>
            <h1 className="text-lg">{item.name}</h1>
            <p>x {item.qty}</p>
          </div>
          <div>
            <p>{item.price} ฿</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default OrderList;
