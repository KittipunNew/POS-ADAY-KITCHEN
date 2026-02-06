'use client';

import Menu from '@/components/menu/Menu';
import Cart from '@/components/cart/Cart';
import CartButton from '@/components/cart/CartButton';
import { useUIStore } from '@/store/ui.store';
import { MOCK_MENU } from '@/mock-data/menu';

import { CircleArrowLeft } from 'lucide-react';
import Order from '@/components/order/Order';
import CustomerOrders from './CustomerOrders';

const MobileView = () => {
  const activePanel = useUIStore((s) => s.activePanel);
  const showMenu = useUIStore((s) => s.showMenu);

  return (
    <div className="lg:hidden">
      {activePanel === 'MENU' && (
        <div className="h-screen">
          <Menu menus={MOCK_MENU} />
          <CartButton />
        </div>
      )}

      {activePanel === 'CART' && (
        <>
          <button className="m-5" onClick={showMenu}>
            <div className="flex items-center gap-2">
              <CircleArrowLeft size={30} className="" />
              <p className="text-xl">กลับไปเมนู</p>
            </div>
          </button>
          <Cart />
        </>
      )}

      {activePanel === 'ORDER' && (
        <>
          <button className="m-5" onClick={showMenu}>
            <div className="flex items-center gap-2">
              <CircleArrowLeft size={30} className="" />
              <p className="text-xl">กลับไปเมนู</p>
            </div>
          </button>
          <Order>
            <CustomerOrders />
          </Order>
        </>
      )}
    </div>
  );
};

export default MobileView;
