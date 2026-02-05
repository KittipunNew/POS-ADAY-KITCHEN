'use client';
import { Menu } from '@/utils/types';
import { useEffect, useState } from 'react';

import { useIsMobile } from '@/hooks/useIsMobile';
import MenuCard from './MenuCard';
import PaginationPage from './PaginationPage';

const MOBILE_ITEMS = 10;
const DESKTOP_ITEMS = 6;

const MenuGrid = ({ menus }: { menus: Menu[] }) => {
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
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="flex-1 overflow-y-auto grid grid-cols-2 gap-4 p-3">
        <MenuCard currentMenus={currentMenus} />
      </div>

      <div className="shrink-0">
        <PaginationPage page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
};
export default MenuGrid;
