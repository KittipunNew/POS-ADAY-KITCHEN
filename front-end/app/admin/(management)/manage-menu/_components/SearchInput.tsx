import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SearchInput = () => {
  return (
    <div className="flex gap-3">
      <Input placeholder="ค้นหาเมนู" className="max-w-xl" />
      <Button className="bg-yellow-500">ค้นหา</Button>
    </div>
  );
};
export default SearchInput;
