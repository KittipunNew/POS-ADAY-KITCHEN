import AddTable from './_components/AddTable';

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="admin-title">จัดการโต๊ะอาหาร</h1>
      <AddTable />
    </div>
  );
};
export default page;
