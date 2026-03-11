'use client';

import { useTable } from '@/hooks/useTable';
import TableCard from './TableCard';
import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';

const TableList = () => {
  const { data, isLoading } = useTable();

  if (isLoading) return <p>Loading...</p>;

  if (data?.length === 0) return <h1>ไม่มีข้อมูล</h1>;

  return (
    <div className="p-5 bg-white rounded-2xl">
      <div className="flex items-center gap-5">
        <h1 className="text-xl">รายการ โต๊ะอาหาร</h1>
        <Button variant={'outline'} onClick={() => window.location.reload()}>
          <RefreshCcw />
        </Button>
      </div>
      <ul className="flex flex-col gap-5 mt-5">
        {data?.map((item) => (
          <TableCard key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
};
export default TableList;
