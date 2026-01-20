'use client';

import { Menu, OrderItem } from '@/utils/types';
import TableHeader from './TableHeader';

import { useState } from 'react';
import MenuGrid from '@/components/menu/MenuGrid';
import OrderList from './OrderList';
import OrderSummary from './OrderSummary';

type Category = 'all' | 'food' | 'drink';

const MenuClient = ({ tableId, menus }: { tableId: string; menus: Menu[] }) => {
  const [category, setCategory] = useState<Category>('all');
  const [orderList, setOrderList] = useState<OrderItem[]>([]);

  const addToOrder = (menu: Menu) => {
    setOrderList((prev) => {
      const exist = prev.find((item) => item.id === menu.id);

      if (exist) {
        return prev.map((item) =>
          item.id === menu.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }

      return [...prev, { ...menu, qty: 1 }];
    });
  };

  const filterMenu =
    category === 'all'
      ? menus
      : menus.filter((item) => item.category === category);

  return (
    <div className="flex flex-col md:flex-row h-screen md:overflow-hidden">
      <div className="md:w-[70%] md:overflow-y-auto">
        <TableHeader tableId={tableId} setCategory={setCategory} />
        <MenuGrid menus={filterMenu} onAdd={addToOrder} />
      </div>

      <div className="md:border-l md:w-[30%] flex flex-col relative h-full">
        <div className="flex-1 overflow-y-auto m-5 pb-32">
          <OrderList orderList={orderList} />
        </div>

        <div className="fixed bottom-0 md:w-[30%] w-full bg-white">
          <OrderSummary orderList={orderList} />
        </div>
      </div>
    </div>
  );
};
export default MenuClient;
