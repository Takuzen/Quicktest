import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

export default function Home() {
  const [cookies, setCookie] = useCookies(["item_sample"]);
  const updateCookie = (item, _count) => {
    const current = parseInt(cookies[`item_${item}`]);
    const count = parseInt(_count);
    setCookie(`item_${item}`, current && current ? current + count : count);
  };
  const [count] = useState(1);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <html lang="ja">
        <Head>
          <title>【公式】QuickTest</title>
          <meta
            name="description"
            content="新型コロナウィルスに対応した抗原検査キットの「クイックテスト」製品の紹介。子供でも自分でできるイラスト使用ガイド付き。最速10分で、変異株をも見逃さず、PCR検査に劣らない特異度の正確判定。陰性であった場合、無料で即日スマホからずっと見せられる、デジタル陰性証明書をお送りします。365日発送対応いたします。"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <header className={styles.header}>
            <div className={styles.headerLeft}>
              <Image
                className={styles.textLogoContainer}
                src="/logo.png"
                alt="logo"
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

          {/* 

        <section className={styles.campaignLine}>
          <p>🔥 23区内は18時までのご注文で当日お届け 🔥</p>
        </section>

        */}

          <section className={styles.productName}>
            <p className={styles.PNFirstLine}>新型コロナウィルス</p>
            <p className={styles.PNSecondLine}>抗原検査キット</p>
          </section>

          <div>
            <Link href="/antigen">
              <a className={styles.card}>
                <Image
                  className={styles.productImg}
                  src="/LionRun-antigen-box.png"
                  alt="LionRun-antigen-box"
                  width={350}
                  height={180}
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

            <div className={styles.otherTwoFeatures}>
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
            </div>
          </section>

          <button
            className={styles.applyBtn}
            onClick={() => {
              updateCookie("sample", count);
              router.push("/cart");
            }}
          >
            今すぐ申し込む
          </button>
        </main>
      </html>
    </div>
  );
}
