import Navbar from '@/components/navbar/Navbar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};
export default layout;
