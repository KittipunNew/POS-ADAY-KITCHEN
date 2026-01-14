import { Button } from '../ui/button';

type props = {
  label: string;
};

const ModuleTab = (props: props) => {
  const { label } = props;
  return (
    <Button variant={'ghost'} className="text-lg">
      {label}
    </Button>
  );
};
export default ModuleTab;
