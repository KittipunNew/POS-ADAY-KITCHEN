import TableList from './_components/TableList';

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-20 mt-10">
        <h1 className="admin-title">แผนผังโต๊ะ</h1>
        <div className="grid grid-cols-5 gap-5">
          <TableList />
        </div>
      </div>
    </>
  );
};
export default page;
