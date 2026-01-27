'use client';

import { Button } from '@/components/ui/button';
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from '@/components/ui/button-group';
import { useState } from 'react';

type Category = 'ALL' | 'FOOD' | 'DRINK';

const TableHeader = ({
  tableId,
  setCategory,
}: {
  tableId: string;
  setCategory: (category: Category) => void;
}) => {
  const [active, setActive] = useState<Category>('ALL');

  const handleClick = (category: Category) => {
    setActive(category);
    setCategory(category);
  };

  return (
    <div className="flex items-center justify-between m-5">
      <h1>โต๊ะ {`T - ${tableId}`}</h1>
      <div>
        <ButtonGroup>
          <Button
            className={
              active === 'ALL'
                ? 'bg-yellow-500'
                : 'bg-white text-black hover:text-white '
            }
            size="sm"
            onClick={() => handleClick('ALL')}
          >
            ทั้งหมด
          </Button>
          <ButtonGroupSeparator />
          <Button
            size="sm"
            className={
              active === 'FOOD'
                ? 'bg-yellow-500'
                : 'bg-white text-black hover:text-white'
            }
            onClick={() => handleClick('FOOD')}
          >
            อาหาร
          </Button>
          <ButtonGroupSeparator />
          <Button
            size="sm"
            className={
              active === 'DRINK'
                ? 'bg-yellow-500'
                : 'bg-white text-black hover:text-white'
            }
            onClick={() => handleClick('DRINK')}
          >
            เครื่องดื่ม
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};
export default TableHeader;
