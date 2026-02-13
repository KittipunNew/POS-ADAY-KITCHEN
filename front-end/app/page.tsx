import DesktopView from '@/components/DesktopView';
import MobileView from '@/components/MobileView';
import Navbar from '@/components/navbar/Navbar';

const page = () => {
  return (
    <div className="flex flex-col xl:h-screen xl:overflow-hidden">
      <Navbar />
      {/* desktop */}
      <div className="flex-1 overflow-hidden">
        <DesktopView />

        {/* mobile */}
        <MobileView />
      </div>
    </div>
  );
};
export default page;
