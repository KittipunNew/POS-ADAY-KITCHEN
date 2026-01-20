'use client';

import { OrderItem } from '@/utils/types';

const OrderList = ({ orderList }: { orderList: OrderItem[] }) => {
  console.log(orderList);
  return (
    <>
      {orderList.map((item, index) => (
        <div
          className="flex gap-5 mb-3 p-3 w-full bg-white rounded-xl justify-between"
          key={index}
        >
          <div>
            <h1>{item.name}</h1>
            <p>x {item.qty}</p>
          </div>
          <div>
            <p>{item.price} ฿</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default OrderList;
