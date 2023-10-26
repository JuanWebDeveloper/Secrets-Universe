import type { AppProps } from 'next/app';
import { Layout } from '@/ui/components';
import '@/ui/scss/styles.scss';

const App = ({ Component, pageProps }: AppProps) => {
 return (
  <Layout>
   <Component {...pageProps} />
  </Layout>
 );
};

export default App;
