import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.antigenPageContainer}>
      <Image src="/vercel.svg" alt="png" width={300} height={150}></Image>
    </div>
  );
}
