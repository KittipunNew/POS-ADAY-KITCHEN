'use client';

import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart.store';
import { api } from '@/lib/axios';
import { useState } from 'react';

const ConfirmOrderButton = ({ tableId }: { tableId: string }) => {
  const cartItems = useCartStore((s) => s.cartItems);
  const clearCart = useCartStore((s) => s.clearCart);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (loading) return;
    setLoading(true);

    const payload = {
      tableId,
      items: cartItems.map((item) => ({
        menuId: item.menuId,
        name: item.name,
        category: item.category.toUpperCase(),
        quantity: item.quantity,
        price: item.price,
      })),
    };

    try {
      setLoading(true);
      await api.post('/order/create', payload);
      clearCart();
    } catch (err) {
      console.error(err);
      alert('ส่งออเดอร์ไม่สำเร็จ');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      size="lg"
      className="w-full bg-green-500 text-xl"
      onClick={handleSubmit}
      disabled={loading || cartItems.length === 0}
    >
      {loading ? 'กำลังส่ง...' : 'ยืนยันการสั่งอาหาร'}
    </Button>
  );
};
export default ConfirmOrderButton;
