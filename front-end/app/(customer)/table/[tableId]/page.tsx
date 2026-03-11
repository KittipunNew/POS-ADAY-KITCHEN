import CartButton from '@/components/cart/CartButton';
import DesktopView from '@/components/DesktopView';
import MobileView from '@/components/MobileView';

const page = () => {
  return (
    <>
      {/* desktop */}
      <DesktopView />

      {/* mobile */}
      <MobileView />
    </>
  );
};
export default page;
