import { useUIStore } from '@/store/ui.store';
import { useParams } from 'next/navigation';

const OrderPanel = () => {
  const activePanel = useUIStore((s) => s.activePanel);
  const showCart = useUIStore((s) => s.showCart);
  const showOrder = useUIStore((s) => s.showOrder);
  const params = useParams();

  return (
    <>
      {params.tableId ? (
        <div className="flex bg-white">
          <button
            className={`${activePanel === 'CART' || activePanel === 'MENU' ? 'bg-yellow-500 text-white shadow-inner' : 'shadow'} w-full p-5 `}
            onClick={showCart}
          >
            ตะกร้าอาหาร
          </button>
          <button
            className={`${activePanel === 'ORDER' ? 'bg-yellow-500 text-white shadow-inner' : 'shadow'} w-full p-5 `}
            onClick={showOrder}
          >
            รายการออเดอร์
          </button>
        </div>
      ) : (
        <>
          <div className="bg-yellow-500 text-white shadow-inner p-5 w-full text-center">
            รายการสั่งอาหาร
          </div>
        </>
      )}
    </>
  );
};
export default OrderPanel;
