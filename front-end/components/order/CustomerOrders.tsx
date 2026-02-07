import { OrderType } from '@/utils/types';

const CustomerOrders = ({ orders }: { orders: OrderType[] }) => {
  if (orders.length === 0) {
    return <p className="text-center text-gray-400">ยังไม่มีออเดอร์</p>;
  }

  return (
    <div className="bg-white m-3 p-5 rounded-xl shadow">
      {orders.map((item) => (
        <div key={item._id} className="flex flex-col">
          {item.items.map((order) => (
            <h1 key={order.menuId} className="text-lg m-2">
              {order.name}
            </h1>
          ))}
        </div>
      ))}
    </div>
  );
};
export default CustomerOrders;
