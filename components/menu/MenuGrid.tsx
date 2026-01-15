import { Menu } from '@/utils/types';

const MenuGrid = ({ menu }: { menu: Menu[] }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4 bg-white p-5">
      {menu.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded shadow flex flex-col"
        >
          <p>{item.name}</p>
          <p className="text-sm text-neutral-400">{item.price} ฿</p>
        </div>
      ))}
    </div>
  );
};
export default MenuGrid;
