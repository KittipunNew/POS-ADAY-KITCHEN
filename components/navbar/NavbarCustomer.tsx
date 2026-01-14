import DigitalClock from './DigitalClock';
import Logo from './Logo';

const NavbarCustomer = () => {
  return (
    <div className="flex items-cente justify-between gap-5 bg-white p-5 shadow-lg">
      <div className="mr-10">
        <Logo />
      </div>

      <div>
        <DigitalClock />
      </div>
    </div>
  );
};
export default NavbarCustomer;
