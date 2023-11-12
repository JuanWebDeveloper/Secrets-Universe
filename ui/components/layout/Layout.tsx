import { Fragment, ReactNode } from 'react';
import { Raleway } from '@next/font/google';
import { Navbar, Footer } from '@/ui/components';

type LayoutModel = {
 children: ReactNode;
};

const raleway = Raleway({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800', '900'] });

const Layout = ({ children }: LayoutModel) => {
 return (
  <Fragment>
   <main className={`${raleway.className}`}>
    <Navbar />
    {children}
    <Footer />
   </main>
  </Fragment>
 );
};

export default Layout;
