import Navbar from '@/components/navbar/Navbar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="m-10">{children}</div>
    </>
  );
};
export default layout;
