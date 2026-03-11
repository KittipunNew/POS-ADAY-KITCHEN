import { Table } from '@/utils/types';
import SelectStatusTable from './SelectStatusTable';
import { useDeleteTable, useUpdateTable } from '@/hooks/useTable';
import { Button } from '@/components/ui/button';
interface TableCardProp {
  item: Table;
}

const TableCard = ({ item }: TableCardProp) => {
  const updateTableMutation = useUpdateTable();
  const deleteTableMutation = useDeleteTable();

  const handleStatusChange = (value: Table['status']) => {
    updateTableMutation.mutate({ id: item._id, status: value });
  };

  const handleDeleteMenu = async (id: string) => {
    deleteTableMutation.mutate(id);
  };

  return (
    <li
      key={item._id}
      className="border shadow p-5 rounded-2xl flex items-center justify-between"
    >
      <p className="text-lg">{item.name}</p>

      <SelectStatusTable
        value={item.status}
        onValueChange={handleStatusChange}
      />

      <Button
        variant={'outline'}
        className="text-red-500"
        onClick={() => handleDeleteMenu(item._id)}
      >
        ลบ
      </Button>
    </li>
  );
};
export default TableCard;
