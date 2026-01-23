import NavbarCustomer from './_components/NavbarCustomer';

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavbarCustomer />
      <div className="bg-[#f1f5f9] w-full h-20"></div>
      <div>{children}</div>
    </div>
  );
}
