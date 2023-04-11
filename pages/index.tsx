import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
// import Partners from '@/components/partners';
import Interstitial from '@/components/interstitial';
import QuoteForm from '@/components/quote-form';
import ContactDetails from '@/components/contact-details';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>Bayber Lojistik - Logistics & Transportation</title>
        <meta name="description" content="Bayber - transportation and logistics company." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Hero />
      <About />
      <Services />
      {/* <Partners /> */}
      <Interstitial />
      {/* <QuoteForm /> */}
      <ContactDetails />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};
