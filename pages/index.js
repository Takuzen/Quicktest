import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useCookies } from "react-cookie";

export default function Home() {
  const [cookies] = useCookies([
    "item_sample",
  ]);
  return (
    <div className={styles.container}>
      <Head>
        <title>【公式】QuickTest</title>
        <meta
          name="QuickTest"
          content="簡易コロナ検査キットの「クイックテスト」"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <h3>QuickTest</h3>
          </div>
          <div className={styles.headerRight}>
            <Link href="/cart">
              <a className={styles.card}>
              <Image
                src={cookies.item_sample > 0 ? "/cart-reddot.svg" : "/cart.svg"}
                alt="cart.svg"
                width={30}
                height={30}
              />
              </a>
            </Link>
          </div>
        </header>

        <div>
          <Link href="/antigen">
            <a className={styles.card}>
              <Image
                src="/cart.svg"
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
