import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const range = (n) => Array.from(Array(n), (_, k) => k+1);

export default function Home() {
  const [cookies, setCookie] = useCookies([]);
  const updateCookie = (item, _count) => {
    const current = parseInt(cookies[`item_${item}`]);
    const count = parseInt(_count);
    setCookie(
      `item_${item}`,
      current && current ? current + count : count
    );
  };
  const [count, setCount] = useState(1);
  const router = useRouter();
  return (
    <div className={styles.antigenPageContainer}>
      <button onClick={() => {
        updateCookie('sample', count);
        router.push('/cart');
      }}>カートに入れる</button>
      <select
        value={count}
        onChange={(e) => {
          setCount(e.target.value);
        }}
      >
        {range(10).map((i) => (
          <option key={`sample-${i}`}>{i}</option>
        ))}
      </select>
    </div>
  );
}
