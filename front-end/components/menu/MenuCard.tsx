import { Menu } from '@/utils/types';
import { useCartStore } from '@/store/cart.store';

interface MenuCardProps {
  item: Menu;
}

const MenuCard = ({ item }: MenuCardProps) => {
  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <>
      <button
        key={item._id}
        className="bg-white p-4 rounded shadow-sm border flex flex-col"
        onClick={() => addToCart(item)}
      >
        <p>{item.name}</p>
        <p className="text-sm text-neutral-400">{item.price} ฿</p>
      </button>
    </>
  );
};
export default MenuCard;
