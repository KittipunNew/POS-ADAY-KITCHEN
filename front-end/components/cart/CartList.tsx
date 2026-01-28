'use client';

import { useCartStore } from '@/store/cart.store';

const CartList = () => {
  const cartItem = useCartStore((s) => s.cartItems);
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-2xl mb-5">เมนูที่เลือก</h1>

      <div>
        {cartItem.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 mb-3 p-3 w-full bg-white shadow rounded-xl justify-between"
          >
            <div>
              <h1 className="text-lg">{item.name}</h1>
              <p>x {item.qty}</p>
            </div>
            <div>
              <p>{item.price} ฿</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-32 mt-5"></div>
    </div>
  );
};
export default CartList;
