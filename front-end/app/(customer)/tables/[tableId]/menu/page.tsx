import Menu from '../../../../../components/menu/Menu';
import { MOCK_MENU } from '@/mock-data/menu';

const page = async ({ params }: { params: { tableId: string } }) => {
  const { tableId } = await params;
  const menu = MOCK_MENU;
  return (
    <div>
      <Menu tableId={tableId} menus={menu} />
    </div>
  );
};
export default page;
