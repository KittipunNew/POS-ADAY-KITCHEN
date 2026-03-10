'use client';

import { useTable } from '@/hooks/useTable';
import Link from 'next/link';

const TableList = () => {
  const { data, isLoading } = useTable();

  if (isLoading) return <p>Loading...</p>;

  if (data?.length === 0) return <p>ไม่พบข้อมูล</p>;

  return (
    <>
      {data?.map((item) => (
        <Link
          href={`/table/${item._id}`}
          key={item._id}
          className={`border-3 rounded-2xl p-5 flex flex-col gap-5 ${item.status === 'AVAILABLE' ? 'border-green-600 bg-green-300 text-green-900' : 'border-red-600 bg-red-300 text-red-900'} `}
        >
          <p className="text-xl">{item.name}</p>
          <p className="text-sm">
            {item.status === 'AVAILABLE' ? 'ว่าง' : 'ไม่ว่าง'}
          </p>
        </Link>
      ))}
    </>
  );
};
export default TableList;
