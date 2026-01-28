'use client';

import { Menu } from '@/utils/types';
import TableHeader from '../table/TableHeader';

import { useState } from 'react';
import MenuGrid from '@/components/menu/MenuGrid';

type Category = 'ALL' | 'FOOD' | 'DRINK';

const MenuClient = ({ tableId, menus }: { tableId: string; menus: Menu[] }) => {
  const [category, setCategory] = useState<Category>('ALL');

  const filterMenu =
    category === 'ALL'
      ? menus
      : menus.filter((item) => item.category === category);

  return (
    <div className="md:w-[70%]">
      <TableHeader tableId={tableId} setCategory={setCategory} />
      <MenuGrid menus={filterMenu} />
    </div>
  );
};
export default MenuClient;
