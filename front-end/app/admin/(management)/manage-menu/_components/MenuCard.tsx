import { Menu } from '@/utils/types';
import { Button } from '@/components/ui/button';
import { useDeleteMenu } from '@/hooks/useMenu';

interface MenuCardProps {
  item: Menu;
}

const MenuCard = ({ item }: MenuCardProps) => {
  const deleteMenuMutation = useDeleteMenu();

  const handleDeleteMenu = async (id: string) => {
    deleteMenuMutation.mutate(id);
  };

  return (
    <div className="border shadow p-5 rounded-2xl">
      <h1 className="text-xl">{item.name}</h1>
      <div className="flex justify-between items-center">
        <h1>{item.price} ฿</h1>
        <Button
          variant={'outline'}
          className="text-red-500"
          onClick={() => handleDeleteMenu(item._id)}
        >
          ลบ
        </Button>
      </div>
    </div>
  );
};
export default MenuCard;
