import AddTable from './_components/AddTable';
import TableList from './_components/TableList';

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="admin-title">จัดการโต๊ะอาหาร</h1>
      <AddTable />
      <TableList />
    </div>
  );
};
export default page;
