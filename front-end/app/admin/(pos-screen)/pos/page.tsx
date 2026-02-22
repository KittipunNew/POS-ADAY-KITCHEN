import DesktopView from '@/components/DesktopView';
import MobileView from '@/components/MobileView';

const page = () => {
  return (
    <div className="flex flex-col xl:h-screen xl:overflow-hidden">
      <div className="flex-1 overflow-hidden">
        <DesktopView />
        <MobileView />
      </div>
    </div>
  );
};
export default page;
