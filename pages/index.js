import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useCookies } from "react-cookie";

export default function Home() {
  const [cookies] = useCookies(["item_sample"]);
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
            <Image
              className={styles.textLogoContainer}
              src="/logo-text.png"
              alt="logo-text"
              width={150}
              height={40}
            ></Image>
          </div>
          <div className={styles.headerRight}>
            <Link href="/cart">
              <a className={styles.card}>
                <Image
                  src={
                    cookies.item_sample > 0 ? "/cart-reddot.svg" : "/cart.svg"
                  }
                  alt="cart.svg"
                  width={30}
                  height={30}
                />
              </a>
            </Link>
          </div>
        </header>

        <section className={styles.campaignLine}>
          <p>現在予約受付中！</p>
        </section>

        <section className={styles.productName}>
          <p className={styles.PNFirstLine}>新型コロナウィルス</p>
          <p className={styles.PNSecondLine}>抗原検査キット</p>
        </section>

        <div>
          <Link href="/antigen">
            <a className={styles.card}>
              <Image
                src="/icheck.png"
                alt="icheck"
                width={300}
                height={150}
              ></Image>
            </a>
          </Link>
        </div>

        <section className={styles.productFeatures}>
          <p className={styles.whatAreQTFeatures}>クイックテストの特徴</p>

          <div className={styles.featuresColumns}>
            <Image
              className={styles.feature}
              src="/feature1.png"
              alt="feature1"
              width={75}
              height={135}
            ></Image>
            <Image
              className={styles.feature}
              src="/feature2.png"
              alt="feature2"
              width={75}
              height={135}
            ></Image>
            <Image
              className={styles.feature}
              src="/feature3.png"
              alt="feature3"
              width={75}
              height={135}
            ></Image>
            <Image
              className={styles.feature}
              src="/feature4.png"
              alt="feature4"
              width={75}
              height={135}
            ></Image>
          </div>

          <Image
            className={styles.weWillAnswer}
            src="/wewillanswer.png"
            alt="wewillanswer"
            width={240}
            height={45}
          ></Image>

          <Image
            className={styles.weShip365}
            src="/weship365.png"
            alt="weship365"
            width={160}
            height={45}
          ></Image>
        </section>
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
