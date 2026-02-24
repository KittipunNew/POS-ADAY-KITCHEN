'use client';

import { useUIStore } from '@/store/ui.store';
import Cart from '@/components/cart/Cart';
import Menu from '@/components/menu/Menu';
import Order from '@/components/order/Order';

const DesktopView = () => {
  const activePanel = useUIStore((s) => s.activePanel);

  return (
    <div className="hidden xl:flex xl:flex-row h-full">
      {activePanel === 'MENU' || activePanel === 'CART' ? (
        <>
          <Menu />
          <Cart />
        </>
      ) : (
        <>
          <Menu />
          <Order />
        </>
      )}
    </div>
  );
};
export default DesktopView;
