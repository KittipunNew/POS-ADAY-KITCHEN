import MobileView from './_components/MobileView';
import DesktopView from './_components/DesktopView';

const page = () => {
  return (
    <>
      {/* desktop */}
      <DesktopView />

      {/* mobile */}
      <MobileView />
    </>
  );
};
export default page;
