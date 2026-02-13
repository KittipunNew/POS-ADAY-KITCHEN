import { Button } from '@/components/ui/button';
import { OrderType } from '@/utils/types';

const CheckBillButton = ({ orders }: { orders: OrderType[] }) => {
  return (
    <Button
      size={'lg'}
      className="bg-green-500 w-full text-xl"
      disabled={orders.length === 0}
    >
      เรียกชำระเงิน
    </Button>
  );
};
export default CheckBillButton;
