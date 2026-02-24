'use client';

import { Category, Menu } from '@/utils/types';
import TableHeader from '../table/header/TableHeader';
import { useState } from 'react';
import MenuGrid from '@/components/menu/MenuGrid';
import { useMenu } from '@/hooks/useMenu';

const MenuClient = () => {
  const [category, setCategory] = useState<Category>('ALL');
  const { data, isLoading } = useMenu();

  const filterMenu =
    category === 'ALL'
      ? (data ?? [])
      : (data?.filter((item) => item.category === category) ?? []);

  return (
    <div className="xl:w-[70%] h-full flex flex-col bg-white">
      <TableHeader setCategory={setCategory} />
      <MenuGrid data={filterMenu} />
    </div>
  );
};
export default MenuClient;
