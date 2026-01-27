import { Menu } from '@/utils/types';
import { useCartStore } from '@/store/cart.store';

const MenuCard = ({ currentMenus }: { currentMenus: Menu[] }) => {
  const addToOrder = useCartStore((s) => s.addToCart);

  return (
    <>
      {currentMenus.map((item) => (
        <button
          key={item.id}
          className="bg-white p-4 rounded shadow-sm border flex flex-col"
          onClick={() => addToOrder(item)}
        >
          <p>{item.name}</p>
          <p className="text-sm text-neutral-400">{item.price} ฿</p>
        </button>
      ))}
    </>
  );
};
export default MenuCard;
