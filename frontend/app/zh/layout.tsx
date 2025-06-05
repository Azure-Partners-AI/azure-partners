import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavbarChinese from '@/components/Chinese/NavbarChinese';

export default function ChineseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarChinese />
      {children}
    </>
  );
}