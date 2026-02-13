import Logo from '@/components/navbar/Logo';
import ModuleTab from './ModuleTab';
import DigitalClock from './DigitalClock';

const Navbar = () => {
  return (
    <div className="flex items-cente justify-between gap-5 bg-white p-5 shadow-lg border-b">
      <div className="flex items-center">
        <div className="mr-10">
          <Logo />
        </div>
        <div className="flex gap-5">
          <ModuleTab label="แผนผังโต๊ะ" href="/tables" />
          <ModuleTab label="ครัว/บาร์" href="/kitchen" />
          <ModuleTab label="รายงาน&รายสัปดาห์" href="/report" />
          <ModuleTab label="จัดการเมนู" href="/edit-menu" />
        </div>
      </div>
      <div>
        <DigitalClock />
      </div>
    </div>
  );
};
export default Navbar;
