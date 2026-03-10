'use client';

import { useDeleteTable, useTable } from '@/hooks/useTable';
import SelectStatusTable from './SelectStatusTable';
import TableCard from './TableCard';

const TableList = () => {
  const { data, isLoading } = useTable();

  if (isLoading) return <p>Loading...</p>;

  if (data?.length === 0) return <h1>ไม่มีข้อมูล</h1>;

  return (
    <div className="p-5 bg-white rounded-2xl">
      <h1 className="text-xl">รายการ โต๊ะอาหาร</h1>
      <ul className="flex flex-col gap-5 mt-5">
        {data?.map((item) => (
          <TableCard key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
};
export default TableList;
