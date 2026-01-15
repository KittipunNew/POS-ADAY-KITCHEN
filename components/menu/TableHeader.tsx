import { Button } from '@/components/ui/button';
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from '@/components/ui/button-group';

const TableHeader = ({ tableId }: { tableId: string }) => {
  return (
    <div className="flex items-center justify-between">
      <h1>โต๊ะ {`T - ${tableId}`}</h1>
      <div>
        <ButtonGroup>
          <Button variant="secondary" size="sm" className="bg-white">
            อาหาร
          </Button>
          <ButtonGroupSeparator />
          <Button variant="secondary" size="sm" className="bg-white">
            เครื่องดื่ม
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};
export default TableHeader;
