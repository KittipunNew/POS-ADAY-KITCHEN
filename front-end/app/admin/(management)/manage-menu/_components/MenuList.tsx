'use client';
import { useMenu } from '@/hooks/useMenu';

const MenuList = () => {
  const { data, isLoading } = useMenu();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="mt-5">
      {data?.map((item: any) => (
        <div key={item._id}>{item.name}</div>
      ))}
    </div>
  );
};

export default MenuList;
