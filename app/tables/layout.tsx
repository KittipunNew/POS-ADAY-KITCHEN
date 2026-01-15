import Navbar from '@/components/navbar/Navbar';

export default function TablesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="m-5">{children}</div>
    </div>
  );
}
