import { Courier_Prime } from "next/font/google";
import styles from "@/styles/layout/Logo.module.scss";

import Link from "next/link";

const courier = Courier_Prime({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export default function Logo() {
  return (
    <Link href="/#home" className={`${courier.className} ${styles.logo}`}>
      <h1>Logo</h1>
    </Link>
  );
}
