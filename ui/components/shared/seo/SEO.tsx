import Head from 'next/head';

interface typeSeoData {
 title: string;
}

export const SEO = ({ title }: typeSeoData) => {
 return (
  <Head>
   <title>{title}</title>
  </Head>
 );
};
