import AddMenu from './_components/AddMenu';
import MenuContent from './_components/MenuContent';

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="admin-title">จัดการเมนูอาหาร</h1>
      <AddMenu />
      <MenuContent />
    </div>
  );
};
export default page;
