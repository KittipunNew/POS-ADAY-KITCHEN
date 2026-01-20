import { Menu } from '@/utils/types';

const MenuCard = ({
  currentMenus,
  onAdd,
}: {
  currentMenus: Menu[];
  onAdd: (menu: Menu) => void;
}) => {
  return (
    <>
      {currentMenus.map((item) => (
        <button
          key={item.id}
          className="bg-white p-4 rounded shadow-sm border flex flex-col"
          onClick={() => onAdd(item)}
        >
          <p>{item.name}</p>
          <p className="text-sm text-neutral-400">{item.price} ฿</p>
        </button>
      ))}
    </>
  );
};
export default MenuCard;
