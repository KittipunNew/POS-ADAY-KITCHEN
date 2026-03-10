'use client';

import { useEffect, useState } from 'react';
import CallStaffButton from './CallStaffButton';
import CategoryTabs from './CategoryTabs';
import { useParams } from 'next/navigation';
import { useTable } from '@/hooks/useTable';

type Category = 'ALL' | 'FOOD' | 'DRINK';

const TableHeader = ({
  setCategory,
}: {
  setCategory: (category: Category) => void;
}) => {
  const { data } = useTable();
  const [active, setActive] = useState<Category>('ALL');
  const [tableName, setTableName] = useState<string>('');
  const params = useParams();
  const tableId = params.tableId as string;

  useEffect(() => {
    const currentTable = data?.find((table) => table._id === tableId);
    if (currentTable) {
      setTableName(currentTable.name);
    }
  }, [data, tableId]);

  const handleClick = (category: Category) => {
    setActive(category);
    setCategory(category);
  };

  return (
    <div className="flex flex-col items-end gap-5 lg:flex-row lg:items-center lg:justify-between p-5 bg-[#f1f5f9]">
      <h1 className="text-xl">{tableName}</h1>
      <div className="flex gap-5">
        <CallStaffButton />
        <CategoryTabs active={active} handleClick={handleClick} />
      </div>
    </div>
  );
};
export default TableHeader;
