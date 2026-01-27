'use client';

import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart.store';
import { useState } from 'react';

const PaymentButton = () => {
  const cartItems = useCartStore((s) => s.cartItems);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Button
        size={'lg'}
        className="w-[50%] bg-green-500 text-xl"
        disabled={loading || cartItems.length === 0}
      >
        เรียกเก็บเงิน
      </Button>
    </>
  );
};
export default PaymentButton;
