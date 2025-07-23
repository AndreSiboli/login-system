import { ReactNode } from "react";
import styles from "@/styles/layout/MainContainer.module.scss";

import Navbar from "@/components/navbar/Index";
// import Footer from "@/components/layout/Footer";

interface PropsType {
  children: ReactNode;
}

export default function MainContainer({ children }: PropsType) {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
