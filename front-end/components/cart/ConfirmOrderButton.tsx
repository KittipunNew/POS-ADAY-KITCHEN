'use client';

import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart.store';
import { api } from '@/lib/axios';
import { useState } from 'react';
import TakeawayModal from '../TakeawayModal';

const ConfirmOrderButton = ({ tableId }: { tableId: string }) => {
  const cartItems = useCartStore((s) => s.cartItems);
  const clearCart = useCartStore((s) => s.clearCart);

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const submitOrder = async () => {
    if (loading) return;
    setLoading(true);

    const payload = {
      tableId,
      items: cartItems.map((item) => ({
        name: item.name,
        category: item.category.toUpperCase(),
        quantity: item.quantity,
        price: item.price,
      })),
    };

    try {
      await api.post('/order/create', payload);
      clearCart();
      setShowModal(false);
    } catch (err) {
      console.error(err);
      alert('ส่งออเดอร์ไม่สำเร็จ');
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    if (tableId === 'กลับบ้าน') {
      setShowModal(true);
    } else {
      submitOrder();
    }
  };

  return (
    <>
      <Button
        size="lg"
        className="w-full bg-green-500 text-xl"
        onClick={handleButtonClick}
        disabled={loading || cartItems.length === 0}
      >
        {loading
          ? 'กำลังส่ง...'
          : tableId === 'กลับบ้าน'
            ? 'ชำระเงิน'
            : 'ยืนยันการสั่งอาหาร'}
      </Button>

      <TakeawayModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={submitOrder} // ส่งฟังก์ชัน submitOrder ไปให้ Modal กด
        loading={loading}
      />
    </>
  );
};
export default ConfirmOrderButton;
