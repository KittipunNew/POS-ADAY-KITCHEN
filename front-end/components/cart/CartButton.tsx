'use client';

import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/store/cart.store';
import { useUIStore } from '@/store/ui.store';
import { Button } from '../ui/button';

const CartButton = () => {
  const totalQty = useCartStore((s) => s.getTotalQty());
  const showCart = useUIStore((s) => s.showCart);
  return (
    <Button
      onClick={showCart}
      size={'icon-lg'}
      className="fixed bottom-5 right-5 bg-yellow-500 p-6 rounded-full shadow-xl border"
    >
      <ShoppingCart className="text-white" size={28} />
      <div
        className={`${totalQty === 0 ? 'hidden' : ''} absolute -top-2 -right-2`}
      >
        <Badge className="bg-red-500">{totalQty}</Badge>
      </div>
    </Button>
  );
};
export default CartButton;
