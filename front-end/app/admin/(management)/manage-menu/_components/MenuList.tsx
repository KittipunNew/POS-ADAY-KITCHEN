'use client';
import { useMenu } from '@/hooks/useMenu';
import { Button } from '@/components/ui/button';
import { api } from '@/lib/axios';

const MenuList = () => {
  const { data, isLoading } = useMenu();

  if (isLoading) return <p>Loading...</p>;

  const handleDeleteMenu = async (id: string) => {
    try {
      await api.delete('/menu/delete', { data: { id: id } });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-5 grid grid-cols-5 gap-3">
      {data?.map((item) => (
        <div key={item._id} className="border-2 p-5 rounded-2xl">
          <h1 className="text-xl font-bold">{item.name}</h1>
          <div className="flex items-center justify-between">
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
      ))}
    </div>
  );
};

export default MenuList;
