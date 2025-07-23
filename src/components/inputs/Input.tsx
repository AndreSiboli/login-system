import styles from "@/styles/inputs/Input.module.scss";
import { ComponentProps } from "react";

interface PropsType extends ComponentProps<"input"> {
  id: string;
  text: string;
  isError?: boolean;
}

export default function Input(props: PropsType) {
  const { text, id, isError, ...rest } = props;

  return (
    <div className={`${styles.input} ${isError ? styles.error : ""}`}>
      <input {...rest} id={id} placeholder=" " />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}
