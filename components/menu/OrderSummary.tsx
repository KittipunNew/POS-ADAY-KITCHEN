import { OrderItem } from '@/utils/types';
import { useMemo } from 'react';
import { Button } from '@/components/ui/button';

const OrderSummary = ({ orderList }: { orderList: OrderItem[] }) => {
  const totalPrice = useMemo(() => {
    return orderList.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [orderList]);

  const totalOrder = useMemo(() => {
    return orderList.reduce((sum, item) => sum + item.qty, 0);
  }, [orderList]);

  return (
    <div className="bg-white p-5">
      <h1 className="text-neutral-400 text-end">{totalOrder} รายการ</h1>
      <div className="flex justify-between text-2xl">
        <h1>ยอดรวม</h1>
        <p>{totalPrice.toLocaleString()} ฿</p>
      </div>
      <div className="flex justify-between gap-3 my-3">
        <Button size={'lg'} className="w-[50%] bg-yellow-500 text-xl">
          สั่งอหาร
        </Button>
        <Button size={'lg'} className="w-[50%] bg-green-500 text-xl">
          เรียกเก็บเงิน
        </Button>
      </div>
    </div>
  );
};
export default OrderSummary;
