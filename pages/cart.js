import { loadStripe } from "@stripe/stripe-js";
import { useCookies } from "react-cookie";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const range = (n) => Array.from(Array(n), (_, k) => k + 1);

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(["item_sample"]);
  if (!cookies) return;

  const Select = (props) => {
    return (
      <select
        className={styles.select}
        id={props.id}
        name={props.id}
        value={cookies[props.id]}
        onChange={(e) => {
          setCookie(props.id, e.target.value);
        }}
      >
        {range(10).map((i) => (
          <option key={props.id + i}>{i}</option>
        ))}
      </select>
    );
  };
  return (
    <div>
      <header className={styles.cartHeader}>
        <Link href="/">
          <Image
            className={styles.backArrow}
            src="/arrow-back-outline.svg"
            alt="arrow-back-outline"
            width={30}
            height={30}
          ></Image>
        </Link>
      </header>
      <main className={styles.main}>
        <h1 className={styles.cartTitle}>カート</h1>
        <form
          className={styles.cartForm}
          action="/api/checkout_sessions"
          method="POST"
        >
          <div className={styles.cartItemRow}>
            {cookies.item_sample && (
              <p className={styles.cartItemRow}>
                <Image
                  className={styles.cartItemName}
                  src="/cart-item-name-antigen.png"
                  alt="cart-item-name-antigen"
                  width={130}
                  height={50}
                ></Image>

                {cookies.item_sample && (
                  <Select
                    className={styles.select}
                    id="item_sample"
                    selectedCount={cookies.item_sample}
                  />
                )}
                <span
                  className={styles.cartItemRemoveBtn}
                  onClick={() => {
                    removeCookie("item_sample");
                  }}
                >
                  <span className={styles.deleteText}>削除</span>
                </span>
              </p>
            )}
          </div>
          {cookies.item_sample ? (
            <button type="submit" className={styles.checkoutBtn}>
              決済に進む
            </button>
          ) : (
            <p>カートに商品が入っていません。</p>
          )}
        </form>
        <hr />
        <p></p>
        <p></p>
      </main>
      <footer className={styles.footer}>
        <p href="">Powered by QuickTest</p>
      </footer>
    </div>
  );
}
