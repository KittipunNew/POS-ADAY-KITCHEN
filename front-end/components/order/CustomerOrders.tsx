import { OrderType } from '@/utils/types';

const CustomerOrders = ({ orders }: { orders: OrderType[] }) => {
  if (orders.length === 0) {
    return <p className="text-center text-gray-400 mt-10">ยังไม่มีออเดอร์</p>;
  }

  return (
    <div className="m-3">
      {orders.map((item) => (
        <div key={item._id} className="flex flex-col gap-3">
          {item.items.map((order) => (
            <div
              key={order.menuId}
              className="flex items-center justify-between text-lg bg-white p-3 rounded-xl shadow"
            >
              <div className="flex items-center">
                <h1 className="m-2">{order.name}</h1>
                <h1>x {order.quantity}</h1>
              </div>
              <h1>{order.price.toLocaleString()} ฿</h1>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default CustomerOrders;
