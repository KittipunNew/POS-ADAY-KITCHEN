import NavbarCustomer from '@/components/navbar/NavbarCustomer';

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavbarCustomer />
      <div className="m-5">{children}</div>
    </div>
  );
}
