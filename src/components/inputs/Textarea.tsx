import { ComponentProps } from "react";
import styles from "@/styles/inputs/Textarea.module.scss";

interface PropsType extends ComponentProps<"textarea"> {
  id: string;
  text: string;
  isError?: boolean;
}

export default function Textarea(props: PropsType) {
  const { id, text, isError, ...rest } = props;

  return (
    <div className={`${styles.textarea} ${isError ? styles.error : ""}`}>
      <textarea {...rest} id={id} placeholder=""></textarea>

      <label htmlFor={id}>{text}</label>
    </div>
  );
}
