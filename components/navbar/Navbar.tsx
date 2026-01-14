import Logo from '@/components/navbar/Logo';
import ModuleTab from './ModuleTab';

const Navbar = () => {
  return (
    <div className="flex items-center gap-5 bg-white p-5 shadow-lg">
      <Logo />
      <div>
        <ModuleTab label="แผนผังโต๊ะ" />
        <ModuleTab label="ครัว/บาร์" />
        <ModuleTab label="รายงาน&รายสัปดาห์" />
        <ModuleTab label="จัดการเมนู" />
      </div>
    </div>
  );
};
export default Navbar;
