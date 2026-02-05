'use client';

import { useCartStore } from '@/store/cart.store';

const CartList = () => {
  const cartItem = useCartStore((s) => s.cartItems);
  return (
    <>
      <div className="flex flex-col gap-3 py-5 px-3 lg:h-270 xl:h-182.5 2xl:h-195 overflow-hidden overflow-y-scroll">
        {cartItem.map((item, index) => (
          <div
            key={index}
            className="flex p-3 w-full bg-white shadow rounded-xl justify-between"
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
    </>
  );
};
export default CartList;
