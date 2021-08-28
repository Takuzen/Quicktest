import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

export default function Home() {
  const router = useRouter();
  const [,, removeCookie] = useCookies([
    "item_sample",
  ]);
  const sessionId = router.query.session_id;
  if (sessionId) {
    removeCookie("item_sample");
  }
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
