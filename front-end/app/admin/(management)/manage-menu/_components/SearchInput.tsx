import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchInputProps {
  onSearch: (value: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  return (
    <div className="flex gap-3 items-center">
      <Search />
      <Input
        placeholder="ค้นหาเมนู"
        className="max-w-xl"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};
export default SearchInput;
