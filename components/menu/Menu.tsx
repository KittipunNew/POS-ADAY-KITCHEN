'use client';

import { Menu } from '@/utils/types';
import TableHeader from './TableHeader';

import { useState } from 'react';
import MenuGrid from '@/components/menu/MenuGrid';
import OrderList from './OrderList';

type Category = 'all' | 'food' | 'drink';

const MenuClient = ({ tableId, menu }: { tableId: string; menu: Menu[] }) => {
  const [category, setCategory] = useState<Category>('all');

  const filterMenu =
    category === 'all'
      ? menu
      : menu.filter((item) => item.category === category);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-[60%]">
        <TableHeader tableId={tableId} setCategory={setCategory} />
        <MenuGrid menu={filterMenu} />
      </div>
      <div className="border-l p-5">
        <OrderList />
      </div>
    </div>
  );
};
export default MenuClient;
