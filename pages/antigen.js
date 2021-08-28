import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.antigenPageContainer}>
      <Link href="">
        <a>カートに入れる</a>
      </Link>
      <select></select>
    </div>
  );
}
