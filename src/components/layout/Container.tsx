import { CSSProperties, ReactNode } from "react";
import styles from "@/styles/layout/Container.module.scss";

interface PropsType {
  style?: CSSProperties;
  children: ReactNode;
}

export default function Container({ children, style}: PropsType) {
  return <div className={styles.container} style={style}>{children}</div>;
}
