import type { ReactNode } from 'react';
import Header from './Header';

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      {/* HEADER */}
      <Header />
      <main>{children}</main>
      {/* FOOTER */}
    </>
  );
}
export default Layout;
