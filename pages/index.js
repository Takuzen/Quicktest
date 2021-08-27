import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>【公式】QuickTest</title>
        <meta name="Ant" content="簡易コロナ検査キットの「クイックテスト」" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <h3>QuickTest</h3>
          </div>
          <div className={styles.headerRight}>
            <Image
              src="/local_mall_black_24dp.svg"
              alt="cart.svg"
              width={30}
              height={30}
            ></Image>
          </div>
        </header>

        <div>
          <Link href="/antigen">
            <a className={styles.card}>
              <Image
                src="/local_mall_black_24dp.svg"
                alt="cart.svg"
                width={30}
                height={30}
              ></Image>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p href="">Powered by QuickTest</p>
      </footer>
    </div>
  );
}

/* ロゴの著作権明記
 <a href="https://www.vecteezy.com/free-vector/ant">
          Ant Vectors by Vecteezy
 </a> 
*/
