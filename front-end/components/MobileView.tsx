'use client';

import Menu from '@/components/menu/Menu';
import Cart from '@/components/cart/Cart';
import CartButton from '@/components/cart/CartButton';
import { useUIStore } from '@/store/ui.store';
import { CircleArrowLeft } from 'lucide-react';
import Order from '@/components/order/Order';

const MobileView = () => {
  const activePanel = useUIStore((s) => s.activePanel);
  const showMenu = useUIStore((s) => s.showMenu);

  return (
    <div className="xl:hidden h-full">
      {activePanel === 'MENU' && (
        <>
          <Menu />
          <CartButton />
        </>
      )}

      {activePanel === 'CART' && (
        <div className="flex flex-col justify-between">
          <button className="m-5" onClick={showMenu}>
            <div className="flex items-center gap-2">
              <CircleArrowLeft size={30} className="" />
              <p className="text-xl">กลับไปเมนู</p>
            </div>
          </button>
          <Cart />
        </div>
      )}

      {activePanel === 'ORDER' && (
        <>
          <button className="m-5" onClick={showMenu}>
            <div className="flex items-center gap-2">
              <CircleArrowLeft size={30} className="" />
              <p className="text-xl">กลับไปเมนู</p>
            </div>
          </button>
          <Order />
        </>
      )}
    </div>
  );
};

export default MobileView;
