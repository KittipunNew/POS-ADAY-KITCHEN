import NavbarCustomer from './_components/NavbarCustomer';

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavbarCustomer />
      <div className="my-20">{children}</div>
    </div>
  );
}
