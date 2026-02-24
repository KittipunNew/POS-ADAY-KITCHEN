import Navbar from '@/components/navbar/Navbar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col xl:h-screen xl:overflow-hidden">
      <Navbar />
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
};
export default layout;
