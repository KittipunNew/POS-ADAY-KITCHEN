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
    <div className="flex items-center justify-between m-5">
      <h1>โต๊ะ {`T - ${tableId}`}</h1>
      <div className="flex gap-5">
        <CallStaffButton />
        <CategoryTabs active={active} handleClick={handleClick} />
      </div>
    </div>
  );
};
export default TableHeader;
