import { Menu } from '@/utils/types';
import { useOrderStore } from '@/store/order.store';

const MenuCard = ({ currentMenus }: { currentMenus: Menu[] }) => {
  const addToOrder = useOrderStore((s) => s.addToOrder);

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
