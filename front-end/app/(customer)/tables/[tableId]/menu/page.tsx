import Cart from '@/components/cart/Cart';
import Menu from '../../../../../components/menu/Menu';
import { MOCK_MENU } from '@/mock-data/menu';

import MobileView from './_components/MobileView';
import DesktopView from './_components/DesktopView';

const page = async ({ params }: { params: { tableId: string } }) => {
  const { tableId } = await params;

  const menu = MOCK_MENU;

  return (
    <>
      {/* desktop */}
      <DesktopView tableId={tableId} />

      {/* mobile */}
      <MobileView tableId={tableId} />
    </>
  );
};
export default page;
