import { Button } from '../ui/button';
import { ButtonGroup, ButtonGroupSeparator } from '../ui/button-group';

type Category = 'ALL' | 'FOOD' | 'DRINK';

const CategoryTabs = ({
  active,
  handleClick,
}: {
  active: string;
  handleClick: (category: Category) => void;
}) => {
  return (
    <div>
      <ButtonGroup>
        <Button
          className={
            active === 'ALL'
              ? 'bg-yellow-500'
              : 'bg-white text-black hover:text-white '
          }
          size="sm"
          onClick={() => handleClick('ALL')}
        >
          ทั้งหมด
        </Button>
        <ButtonGroupSeparator />
        <Button
          size="sm"
          className={
            active === 'FOOD'
              ? 'bg-yellow-500'
              : 'bg-white text-black hover:text-white'
          }
          onClick={() => handleClick('FOOD')}
        >
          อาหาร
        </Button>
        <ButtonGroupSeparator />
        <Button
          size="sm"
          className={
            active === 'DRINK'
              ? 'bg-yellow-500'
              : 'bg-white text-black hover:text-white'
          }
          onClick={() => handleClick('DRINK')}
        >
          เครื่องดื่ม
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default CategoryTabs;
