import AddMenu from './_components/AddMenu';

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="admin-title">ตั้งค่าเมนูอาหาร</h1>
      <div className="flex flex-col">
        <AddMenu />
      </div>
    </div>
  );
};
export default page;
