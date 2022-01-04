import Head from 'next/head';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Teste</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt perferendis nulla consectetur soluta voluptas cumque ratione voluptates similique beatae sit quam, ea commodi inventore repudiandae facilis reiciendis nobis error et.</p>
          </a>
          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Teste</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt perferendis nulla consectetur soluta voluptas cumque ratione voluptates similique beatae sit quam, ea commodi inventore repudiandae facilis reiciendis nobis error et.</p>
          </a>
          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Teste</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt perferendis nulla consectetur soluta voluptas cumque ratione voluptates similique beatae sit quam, ea commodi inventore repudiandae facilis reiciendis nobis error et.</p>
          </a>
        </div>
      </main>
    </>
  );
}
