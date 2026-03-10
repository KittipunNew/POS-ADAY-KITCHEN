'use client';

import { useTable } from '@/hooks/useTable';
import SelectStatusTable from './SelectStatusTable';

const TableList = () => {
  const { data, isLoading } = useTable();

  const handleStatusChange = (value: string) => {};

  if (isLoading) return <p>Loading...</p>;

  if (data?.length === 0) return <h1>ไม่มีข้อมูล</h1>;

  return (
    <div className="p-5 bg-white rounded-2xl">
      <h1 className="text-xl">รายการ โต๊ะอาหาร</h1>
      <ul className="flex flex-col gap-5 mt-5">
        {data?.map((item) => (
          <li
            key={item._id}
            className="border shadow p-5 rounded-2xl flex items-center justify-between"
          >
            <p className="text-lg">{item.name}</p>

            <SelectStatusTable
              value={item.status}
              onValueChange={handleStatusChange}
            />

            <button className="text-red-500">ลบ</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TableList;
