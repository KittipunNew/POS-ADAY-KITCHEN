import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SelectCategory = ({
  onValueChange,
}: {
  onValueChange: (value: string) => void;
}) => {
  return (
    <Select onValueChange={onValueChange} defaultValue="FOOD">
      <SelectTrigger className="w-full max-w-xl">
        <SelectValue placeholder="ประเภท" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="FOOD">อาหาร</SelectItem>
          <SelectItem value="DRINK">เครื่องดื่ม</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default SelectCategory;
