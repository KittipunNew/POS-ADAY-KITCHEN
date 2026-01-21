'use client';

import { Button } from '@/components/ui/button';
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from '@/components/ui/button-group';
import { useState } from 'react';

type Category = 'all' | 'food' | 'drink';

const TableHeader = ({
  tableId,
  setCategory,
}: {
  tableId: string;
  setCategory: (category: Category) => void;
}) => {
  const [active, setActive] = useState<Category>('all');

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
              active === 'all'
                ? 'bg-yellow-500'
                : 'bg-white text-black hover:text-white '
            }
            size="sm"
            onClick={() => handleClick('all')}
          >
            ทั้งหมด
          </Button>
          <ButtonGroupSeparator />
          <Button
            size="sm"
            className={
              active === 'food'
                ? 'bg-yellow-500'
                : 'bg-white text-black hover:text-white'
            }
            onClick={() => handleClick('food')}
          >
            อาหาร
          </Button>
          <ButtonGroupSeparator />
          <Button
            size="sm"
            className={
              active === 'drink'
                ? 'bg-yellow-500'
                : 'bg-white text-black hover:text-white'
            }
            onClick={() => handleClick('drink')}
          >
            เครื่องดื่ม
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};
export default TableHeader;
