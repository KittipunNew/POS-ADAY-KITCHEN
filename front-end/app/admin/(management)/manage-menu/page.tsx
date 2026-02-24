import AddMenu from './_components/AddMenu';
import SearchInput from './_components/SearchInput';
import MenuList from './_components/MenuList';
import MenuContent from './_components/MenuContent';

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="admin-title">ตั้งค่าเมนูอาหาร</h1>
      <AddMenu />
      <MenuContent />
    </div>
  );
};
export default page;
