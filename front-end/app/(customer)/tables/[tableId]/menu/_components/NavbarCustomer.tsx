import DigitalClock from '../../../../../../components/navbar/DigitalClock';
import Logo from '../../../../../../components/navbar/Logo';

const NavbarCustomer = () => {
  return (
    <div className="flex items-center justify-between gap-5 bg-white p-5 border-b">
      <Logo />
      <DigitalClock />
    </div>
  );
};
export default NavbarCustomer;
