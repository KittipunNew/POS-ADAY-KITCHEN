import { useUIStore } from '@/store/ui.store';

const OrderPanel = () => {
  const activePanel = useUIStore((s) => s.activePanel);
  const showCart = useUIStore((s) => s.showCart);
  const showOrder = useUIStore((s) => s.showOrder);

  return (
    <div className="flex bg-white">
      <button
        className={`${activePanel === 'CART' || activePanel === 'MENU' ? 'bg-yellow-500 text-white shadow-inner' : 'shadow'} w-full p-5 `}
        onClick={showCart}
      >
        ตะกร้าอาหาร
      </button>
      <button
        className={`${activePanel === 'ORDER' ? 'bg-yellow-500 text-white' : 'shadow'} w-full p-5 `}
        onClick={showOrder}
      >
        รายการออเดอร์
      </button>
    </div>
  );
};
export default OrderPanel;
