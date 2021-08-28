import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.successMsgDiv}>
      <h1 className={styles.successText}>予約注文が完了しました！</h1>
      <p className={styles.successTextSub}>
        追ってご記入いただいたメールアドレス宛に
        <br />
        確認のメールを差し上げます。
      </p>
      <Link href="/">
        <a className={styles.goBackHomeBtn}>
          ホームへ戻る
        </a>
      </Link>
    </div>
  );
}
