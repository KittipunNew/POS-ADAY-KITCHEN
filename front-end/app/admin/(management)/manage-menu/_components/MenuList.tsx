'use client';
import { useMenu } from '@/hooks/useMenu';
import { useDeleteMenu } from '@/hooks/useMenu';
import MenuCard from './MenuCard';

interface MenuListProps {
  searchQuery: string;
}

const MenuList = ({ searchQuery }: MenuListProps) => {
  const { data, isLoading } = useMenu();
  const deleteMenuMutation = useDeleteMenu();

  if (isLoading) return <p>Loading...</p>;

  const filteredData = data?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (filteredData?.length === 0)
    return <h1 className="mt-10 text-xl">ไม่พบข้อมูล</h1>;

  const foods = filteredData?.filter((item) => item.category === 'FOOD');
  const drinks = filteredData?.filter((item) => item.category === 'DRINK');

  const handleDeleteMenu = async (id: string) => {
    deleteMenuMutation.mutate(id);
  };

  return (
    <div className="flex flex-col gap-20">
      {!!foods?.length && (
        <section>
          <h1 className="text-3xl my-5">อาหาร</h1>
          <div className="grid grid-cols-2 gap-3">
            {foods.map((item) => (
              <MenuCard
                key={item._id}
                item={item}
                onDelete={handleDeleteMenu}
              />
            ))}
          </div>
        </section>
      )}

      {!!drinks?.length && (
        <section>
          <h1 className="text-3xl my-5">เครื่องดื่ม</h1>
          <div className="grid grid-cols-2 gap-3">
            {drinks.map((item) => (
              <MenuCard
                key={item._id}
                item={item}
                onDelete={handleDeleteMenu}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default MenuList;
