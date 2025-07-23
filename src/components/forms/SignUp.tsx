"use client";

import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";
import styles from "@/styles/forms/SignUp.module.scss";

import Input from "../inputs/Input";
import Link from "next/link";
import Submit from "../ui/buttons/Submit";
import { checkEmail, checkName, checkPassword } from "@/utils/inputsManager";

export default function FormSignUp() {
  const [username, setUsername] = useState({
    name: "",
    lastname: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [inputError, setInputError] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  function submit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    resetErrors();
    if (!isDataValid()) return;
    alert("It's just a fictional site, so you can't sign up.");
    router.push("/sign-in");
  }

  function isDataValid() {
    if (
      !checkName(username.name, setErrorMessage) ||
      !checkName(username.lastname, setErrorMessage)
    ) {
      return setInputError((prev) => ({ ...prev, name: true }));
    }
    if (!checkEmail(email, setErrorMessage)) {
      return setInputError((prev) => ({ ...prev, email: true }));
    }
    if (!checkPassword(password, passwordConfirmation, setErrorMessage)) {
      return setInputError((prev) => ({ ...prev, password: true }));
    }
    return true;
  }

  function resetErrors() {
    setInputError({
      name: false,
      email: false,
      password: false,
    });
    setErrorMessage("");
  }

  return (
    <form className={styles.form}>
      <legend>Sign Up</legend>

      <div className={styles.form_inputs}>
        <div className={`${styles.input_container} ${styles.split}`}>
          <Input
            id="first-name"
            name="first-name"
            type="text"
            text="First Name"
            required
            isError={inputError.name}
            value={username.name}
            onChange={(e) =>
              setUsername((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          />
          <Input
            id="last-name"
            name="last-name"
            type="text"
            text="Last Name"
            required
            isError={inputError.name}
            value={username.lastname}
            onChange={(e) =>
              setUsername((prevState) => ({
                ...prevState,
                lastname: e.target.value,
              }))
            }
          />
        </div>
        <div className={styles.input_container}>
          <Input
            id="email"
            name="email"
            type="email"
            text="Email"
            required
            isError={inputError.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input_container}>
          <Input
            id="password"
            name="password"
            type="password"
            text="Password"
            required
            isError={inputError.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.input_container}>
          <Input
            id="password-confirmation"
            name="password-confirmation"
            type="password"
            text="Password Confirmation"
            required
            isError={inputError.password}
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.form_error}>
        <p>{errorMessage}</p>
      </div>

      <div className={styles.form_button}>
        <Submit text="Sign Up" onClick={(e) => submit(e)} variant="v2" />
      </div>

      <div className={styles.form_create}>
        <p>
          Do you have an account? <Link href="/sign-in">Sign in</Link>
        </p>
      </div>
    </form>
  );
}
