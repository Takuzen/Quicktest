import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

export default function Home() {
  const router = useRouter();
  const [, , removeCookie] = useCookies(["item_sample"]);
  const sessionId = router.query.session_id;
  if (sessionId) {
    removeCookie("item_sample");
  }
  return (
    <div className={styles.successMsgDiv}>
      <Image src="/success.png" alt="success" width={294} height={812}></Image>
    </div>
  );
}
