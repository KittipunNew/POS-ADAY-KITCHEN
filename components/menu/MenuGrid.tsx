'use client';
import { Menu } from '@/utils/types';
import { useEffect, useState } from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useIsMobile } from '@/hooks/useIsMobile';

const MOBILE_ITEMS = 10;
const DESKTOP_ITEMS = 20;

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
    <div>
      <div className="mt-4 bg-white p-5 border">
        <div className="grid grid-cols-2 gap-4 ">
          {currentMenus.map((item) => (
            <button
              key={item.id}
              className="bg-white p-4 rounded shadow-sm border flex flex-col"
            >
              <p>{item.name}</p>
              <p className="text-sm text-neutral-400">{item.price} ฿</p>
            </button>
          ))}
        </div>

        <div className="mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (page > 1) setPage(page - 1);
                  }}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNumber = i + 1;
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href="#"
                      isActive={page === pageNumber}
                      onClick={(e) => {
                        e.preventDefault();
                        setPage(pageNumber);
                      }}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (page < totalPages) setPage(page + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};
export default MenuGrid;
