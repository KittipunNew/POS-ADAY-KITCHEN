'use client';

import { useState } from 'react';
import CallStaffButton from './CallStaffButton';
import CategoryTabs from './CategoryTabs';

type Category = 'ALL' | 'FOOD' | 'DRINK';

const TableHeader = ({
  tableId,
  setCategory,
}: {
  tableId: string;
  setCategory: (category: Category) => void;
}) => {
  const [active, setActive] = useState<Category>('ALL');

  const handleClick = (category: Category) => {
    setActive(category);
    setCategory(category);
  };

  return (
    <div className="flex flex-col items-end gap-5 lg:flex-row lg:items-center lg:justify-between p-5 bg-[#f1f5f9]">
      <h1>โต๊ะ {`T - ${tableId}`}</h1>
      <div className="flex gap-5">
        <CallStaffButton />
        <CategoryTabs active={active} handleClick={handleClick} />
      </div>
    </div>
  );
};
export default TableHeader;
