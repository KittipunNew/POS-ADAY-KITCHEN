'use client';
import { Menu } from '@/utils/types';
import { useEffect, useState } from 'react';

import { useIsMobile } from '@/hooks/useIsMobile';
import MenuCard from './MenuCard';
import PaginationPage from './PaginationPage';

const MOBILE_ITEMS = 10;
const DESKTOP_ITEMS = 6;

const MenuGrid = ({ data }: { data: Menu[] }) => {
  const isMobile = useIsMobile();
  const itemsPerPage = isMobile ? MOBILE_ITEMS : DESKTOP_ITEMS;

  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  useEffect(() => {
    setPage(1);
  }, [itemsPerPage]);

  const currentMenus = data?.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="grid grid-cols-2 gap-4 p-3 flex-1">
        {currentMenus?.map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>

      <PaginationPage page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};
export default MenuGrid;
