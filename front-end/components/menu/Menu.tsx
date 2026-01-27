'use client';

import { Menu } from '@/utils/types';
import TableHeader from './TableHeader';

import { useState } from 'react';
import MenuGrid from '@/components/menu/MenuGrid';
import OrderList from './OrderList';
import OrderSummary from './OrderSummary';

type Category = 'ALL' | 'FOOD' | 'DRINK';

const MenuClient = ({ tableId, menus }: { tableId: string; menus: Menu[] }) => {
  const [category, setCategory] = useState<Category>('ALL');

  const filterMenu =
    category === 'ALL'
      ? menus
      : menus.filter((item) => item.category === category);

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="md:w-[70%]">
        <TableHeader tableId={tableId} setCategory={setCategory} />
        <MenuGrid menus={filterMenu} />
      </div>

      <div className="md:border-l md:w-[30%] flex flex-col relative">
        <div className="m-5">
          <OrderList />
        </div>

        <div className="fixed bottom-0 md:w-[30%] w-full bg-whit">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};
export default MenuClient;
