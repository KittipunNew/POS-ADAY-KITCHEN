import TableHeader from './../../../../../components/menu/TableHeader';

const page = async ({ params }: { params: { tableId: string } }) => {
  const { tableId } = await params;
  return (
    <div>
      <div>
        <TableHeader tableId={tableId} />
      </div>
    </div>
  );
};
export default page;
