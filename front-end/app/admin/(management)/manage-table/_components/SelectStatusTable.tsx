import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SelectStatusTable = ({
  onValueChange,
  value,
}: {
  onValueChange: (value: string) => void;
  value: string;
}) => {
  return (
    <Select onValueChange={onValueChange} value={value}>
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
