'use client';

import { useUIStore } from '@/store/ui.store';
import { MOCK_MENU } from '@/mock-data/menu';
import Cart from '@/components/cart/Cart';
import Menu from '@/components/menu/Menu';
import Order from '@/components/order/Order';

const DesktopView = () => {
  const activePanel = useUIStore((s) => s.activePanel);

  return (
    <>
      {activePanel === 'MENU' || activePanel === 'CART' ? (
        <>
          <div className="hidden lg:flex lg:flex-row lg:h-320 xl:h-235 2xl:h-250">
            <Menu menus={MOCK_MENU} />
            <Cart />
          </div>
        </>
      ) : (
        <></>
      )}

      {activePanel === 'ORDER' && (
        <>
          <div className="hidden lg:flex lg:flex-row lg:h-320 xl:h-235 2xl:h-250">
            <Menu menus={MOCK_MENU} />
            <Order />
          </div>
        </>
      )}
    </>
  );
};
export default DesktopView;
