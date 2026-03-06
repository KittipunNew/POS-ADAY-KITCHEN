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
          <ModuleTab label="แผนผังโต๊ะ" href="/admin/tables" />
          <ModuleTab label="ครัว/บาร์" href="/admin/kitchen" />
          <ModuleTab label="จัดการเมนู" href="/admin/manage-menu" />
          <ModuleTab label="จัดการโต๊ะอาหาร" href="/admin/manage-table" />
        </div>
      </div>
      <div>
        <DigitalClock />
      </div>
    </div>
  );
};
export default Navbar;
