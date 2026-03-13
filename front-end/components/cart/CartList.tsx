'use client';

import { useCartStore } from '@/store/cart.store';

const CartList = () => {
  const cartItem = useCartStore((s) => s.cartItems);

  if (cartItem.length === 0) {
    return (
      <div className="flex-1 flex flex-col gap-3 py-5 px-3 overflow-y-auto">
        <p className="text-center text-gray-400 mt-10">ยังไม่มีออเดอร์</p>
      </div>
    );
  }
  return (
    <div className="flex-1 flex flex-col gap-3 py-5 px-3 xl:overflow-y-auto">
      {cartItem.map((item, index) => (
        <div
          key={index}
          className="flex p-3 w-full bg-white shadow rounded-xl justify-between"
        >
          <div>
            <h1 className="text-lg">{item.name}</h1>
            <p>x {item.quantity}</p>
          </div>
          <div>
            <p>{item.price} ฿</p>
          </div>
        </div>
      ))}
      <div className="xl:hidden py-16"></div>
    </div>
  );
};
export default CartList;
