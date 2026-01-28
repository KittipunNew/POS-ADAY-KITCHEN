'use client';

import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart.store';
import { useState } from 'react';

const CallStaffButton = () => {
  return (
    <>
      <Button size={'sm'} className="bg-green-500">
        เรียกพนักงาน
      </Button>
    </>
  );
};
export default CallStaffButton;
