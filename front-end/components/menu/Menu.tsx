'use client';

import { Category, Menu } from '@/utils/types';
import TableHeader from '../table/header/TableHeader';

import { useState } from 'react';
import MenuGrid from '@/components/menu/MenuGrid';

const MenuClient = ({ menus }: { menus: Menu[] }) => {
  const [category, setCategory] = useState<Category>('ALL');

  const filterMenu =
    category === 'ALL'
      ? menus
      : menus.filter((item) => item.category === category);

  return (
    <div className="xl:w-[70%] h-full flex flex-col bg-white">
      <TableHeader setCategory={setCategory} />
      <MenuGrid menus={filterMenu} />
    </div>
  );
};
export default MenuClient;
