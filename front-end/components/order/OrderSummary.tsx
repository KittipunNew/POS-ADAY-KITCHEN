import { OrderType } from '@/utils/types';
import CheckBillButton from './CheckBillButton';

const OrderSummary = ({ orders }: { orders: OrderType[] }) => {
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

  console.log(summary.totalQty, summary.totalPrice);
  console.log(orders);

  return (
    <>
      <div className="h-35 xl:hidden"></div>
      <div className="fixed w-full bottom-0 xl:w-[30%]">
        <div className="bg-white p-5 border-t md:border-none md:shadow">
          <h1 className="text-neutral-400 text-end">
            {summary.totalQty} รายการ
          </h1>
          <div className="flex justify-between text-2xl">
            <h1>ยอดชำระทั้งหมด</h1>
            <p>{summary.totalPrice.toLocaleString()} ฿</p>
          </div>
          <div className="mt-3">
            <CheckBillButton />
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderSummary;
