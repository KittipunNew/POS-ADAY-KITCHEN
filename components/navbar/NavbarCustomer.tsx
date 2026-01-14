import DigitalClock from './DigitalClock';
import Logo from './Logo';

const NavbarCustomer = () => {
  return (
    <div className="flex items-center justify-between gap-5 bg-white p-5 shadow-lg">
      <Logo />
      <DigitalClock />
    </div>
  );
};
export default NavbarCustomer;
