'use client';
import { Menu } from '@/utils/types';
import { useEffect, useState } from 'react';

import { useIsMobile } from '@/hooks/useIsMobile';
import MenuCard from './MenuCard';
import PaginationPage from './PaginationPage';

const MOBILE_ITEMS = 10;
const DESKTOP_ITEMS = 20;

const MenuGrid = ({
  menus,
  onAdd,
}: {
  menus: Menu[];
  onAdd: (menu: Menu) => void;
}) => {
  const isMobile = useIsMobile();
  const itemsPerPage = isMobile ? MOBILE_ITEMS : DESKTOP_ITEMS;

  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(menus.length / itemsPerPage);

  useEffect(() => {
    setPage(1);
  }, [itemsPerPage]);

  const currentMenus = menus.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  return (
    <div className="mt-4 bg-white p-5 border flex flex-col justify-between">
      <div className="grid grid-cols-2 gap-4 ">
        <MenuCard currentMenus={currentMenus} onAdd={onAdd} />
      </div>

      <div className="mt-4">
        <PaginationPage page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
};
export default MenuGrid;
