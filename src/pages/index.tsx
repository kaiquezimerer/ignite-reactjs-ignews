// import { GetServerSideProps } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { stripe } from '../services/stripe';

import { SubscribeButton  } from '../components/SubscribeButton';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: string;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

// CSR (Client Server Rendering): fetch data where the content does not need to be indexed

// SSR Props (dynamic data fetching)
// export const getServerSideProps: GetServerSideProps = async () => {
//   // Stripe SDK
//   const price = await stripe.prices.retrieve('price_1K9kzdJBZZDXIB5eN66icTu3');

//   const product = {
//     priceId: price.id,
//     amount: new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//     }).format(price.unit_amount / 100),
//   }

//   return {
//     props: {
//       product,
//     }
//   };
// };

// SSG Props (static data fetching)
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1K9kzdJBZZDXIB5eN66icTu3');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours (regenerate statis file)
  };
};

