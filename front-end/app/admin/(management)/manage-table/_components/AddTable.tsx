import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AddTable = () => {
  return (
    <form className="p-5 border shadow max-w-xl bg-white rounded-2xl">
      <Input
        type="text"
        placeholder="เลขที่โต๊ะ"
        name="name"
        className="w-full"
      />

      <Button type="submit" className="w-full mt-5 bg-yellow-500" size={'lg'}>
        เพิ่มโต๊ะ
      </Button>
    </form>
  );
};
export default AddTable;
