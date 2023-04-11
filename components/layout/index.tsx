import type { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      {/* HEADER */}
      <Header />
      <main>{children}</main>
      <Footer />
      {/* FOOTER */}
    </>
  );
}

export default Layout;
