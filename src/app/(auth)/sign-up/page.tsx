import styles from "@/styles/pages/sign/Sign.module.scss";

import Container from "@/components/layout/Container";
import FormSignUp from "@/components/forms/SignUp";
import Img from "@/components/utils/Img";

import wallpaper from "@/assets/sign-up.jpg";

export default function SignUp() {
  return (
    <div className={styles.sign}>
      <figure className={styles.sign_image}>
        <Img
          src={wallpaper}
          styles={{ objectPosition: "50% 28%" }}
        />
      </figure>

      <Container>
        <div className={styles.sign_container}>
          <FormSignUp />
        </div>
      </Container>
    </div>
  );
}
