import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/admin/pos'} className="flex font-extrabold text-xl">
      <h1>ADAY</h1>
      <h1 className="text-yellow-500">KITCHEN</h1>
    </Link>
  );
};
export default Logo;
