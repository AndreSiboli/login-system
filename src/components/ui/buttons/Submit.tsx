import { ComponentProps } from "react";
import styles from "@/styles/ui/buttons/Submit.module.scss";

interface PropsType extends ComponentProps<"button"> {
  text: string;
  variant?: "v1" | "v2";
}

export default function Submit(props: PropsType) {
  const { text, variant = "v1", ...rest } = props;

  return (
    <button {...rest} className={`${styles.button} ${styles[variant]}`}>
      {text}
    </button>
  );
}
