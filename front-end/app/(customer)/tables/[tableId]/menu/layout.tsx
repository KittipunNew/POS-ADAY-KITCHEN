import NavbarCustomer from './_components/NavbarCustomer';

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col xl:h-screen xl:overflow-hidden">
      <NavbarCustomer />
      <div className="bg-[#f1f5f9] w-full h-20 shrink-0"></div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
