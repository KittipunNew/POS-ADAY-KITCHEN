import NavbarCustomer from './_components/NavbarCustomer';

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen xl:overflow-hidden">
      <NavbarCustomer />
      <div className="flex-1 overflow-x-hidden xl:overflow-hidden h-full">
        {children}
      </div>
    </div>
  );
}
