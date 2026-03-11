import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Table } from '@/utils/types';

const SelectStatusTable = ({
  onValueChange,
  value,
}: {
  onValueChange: (value: Table['status']) => void;
  value: Table['status'];
}) => {
  return (
    <Select
      onValueChange={(val) => onValueChange(val as Table['status'])}
      value={value}
    >
      <SelectTrigger className="w-full max-w-xl">
        <SelectValue placeholder="สถานะ" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="AVAILABLE">ว่าง</SelectItem>
          <SelectItem value="OCCUPIED">ไม่ว่าง</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default SelectStatusTable;
