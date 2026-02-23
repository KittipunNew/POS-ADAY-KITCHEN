import AddMenu from './_components/AddMenu';
import SearchInput from './_components/SearchInput';
import MenuList from './_components/MenuList';

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="admin-title">ตั้งค่าเมนูอาหาร</h1>
      <AddMenu />
      <div className="bg-white p-5 rounded-xl">
        <SearchInput />
        <MenuList />
      </div>
    </div>
  );
};
export default page;
