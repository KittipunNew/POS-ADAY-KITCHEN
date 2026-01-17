'use client';

import { OrderItem } from '@/utils/types';

const OrderList = ({ orderList }: { orderList: OrderItem[] }) => {
  console.log(orderList);
  return <div>OrderList</div>;
};
export default OrderList;
