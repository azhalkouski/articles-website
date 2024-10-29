import Image from 'next/image';

import styles from "../../page.module.css";

export default async function Article({params}) {
  console.log(await params);

  return (
    <main>
      <article>
        <div className={styles.page}>
          <header>
            <h2>Article title</h2>
          </header>
          <figure>
            <Image
              src="/hero-desktop.png"
              width={500}
              height={380}
              alt="A description of the article image"
            />
            <figcaption>This image is directly related to the topic of the article</figcaption>
          </figure>
          <section>
            <div>article.contnet</div>
          </section>
          <footer>Related articles: ...</footer>
        </div>
      </article>
    </main>
  );
}