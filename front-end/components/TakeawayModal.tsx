'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart.store';
import { TakeawayModalProps } from '@/utils/types';

const TakeawayModal = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}: TakeawayModalProps) => {
  const totalPrice = useCartStore((s) => s.getTotalPrice());
  const cartItems = useCartStore((s) => s.cartItems);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>สรุปออเดอร์กลับบ้าน</DialogTitle>
        </DialogHeader>

        <div className="py-4 space-y-2">
          <ul className="text-sm text-gray-600 max-h-40 overflow-y-auto">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>{item.price * item.quantity}.-</span>
              </li>
            ))}
          </ul>

          <div className="border-t pt-2 mt-4 flex justify-between text-xl font-bold">
            <span>ยอดสุทธิ</span>
            <span className="text-green-600">{totalPrice} บาท</span>
          </div>

          <div className="bg-gray-100 p-4 rounded text-center text-sm text-gray-500 mt-2">
            (จำลองส่วน Payment Gateway / QR Code)
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={loading}>
            ยกเลิก
          </Button>
          <Button
            className="bg-green-600 hover:bg-green-700"
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? 'กำลังประมวลผล...' : 'ยืนยันการชำระเงิน'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TakeawayModal;
