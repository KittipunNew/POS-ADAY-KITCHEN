import { SummaryProps } from '@/utils/types';

const Summary = ({ children, totalQty, label, totalPrice }: SummaryProps) => {
  return (
    <div className="w-full">
      <div className="bg-white p-5 border-t md:border-none md:shadow">
        <h1 className="text-neutral-400 text-end">{totalQty} รายการ</h1>
        <div className="flex justify-between text-2xl">
          <h1>{label}</h1>
          <p>{totalPrice.toLocaleString()} ฿</p>
        </div>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
};
export default Summary;
