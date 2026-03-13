import { Menu } from '@/utils/types';
import { useCartStore } from '@/store/cart.store';
import Image from 'next/image';
import กระเพรา from '../../public/กะเพรา.png';
import { Plus } from 'lucide-react';
import { Button } from '../ui/button';

interface MenuCardProps {
  item: Menu;
}

const MenuCard = ({ item }: MenuCardProps) => {
  const addToCart = useCartStore((s) => s.addToCart);

  console.log(item);

  return (
    <div className="flex flex-col justify-around md:justify-center items-center border shadow rounded-2xl p-3">
      <div className="relative w-full h-32 md:w-44 md:h-40 xl:w-40 xl:h-32">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cove"
            loading="eager"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-xl">
            <p className="text-gray-400 text-xs">ไม่มีรูปภาพ</p>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="w-full">
          <p className="text-sm md:text-base">{item.name}</p>
          <p className="text-xs md:text-sm text-neutral-400">{item.price} ฿</p>
        </div>
        <Button
          key={item._id}
          variant={'outline'}
          className="bg-yellow-100 text-yellow-500 border-2 border-yellow-500"
          onClick={() => addToCart(item)}
        >
          <Plus strokeWidth={4} />
        </Button>
      </div>
    </div>
  );
};
export default MenuCard;
