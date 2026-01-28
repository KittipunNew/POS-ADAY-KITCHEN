import CartList from '@/components/cart/CartList';
import Menu from '../../../../../components/menu/Menu';
import { MOCK_MENU } from '@/mock-data/menu';
import CartSummary from '@/components/cart/CartSummary';

const page = async ({ params }: { params: { tableId: string } }) => {
  const { tableId } = await params;
  const menu = MOCK_MENU;
  return (
    <div className="flex flex-col md:flex-row ">
      <Menu tableId={tableId} menus={menu} />
      <div className="md:border-l md:w-[30%] flex flex-col relative h-screen">
        <div className="m-5">
          <CartList />
        </div>

        <div className="fixed bottom-0 md:w-[30%] w-full bg-whit">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};
export default page;
