import styles from "@/styles/pages/sign/Sign.module.scss";

import Container from "@/components/layout/Container";
import FormLogin from "@/components/forms/SignIn";
import Img from "@/components/utils/Img";

import wallpaper from "@/assets/sign-in.jpg";

export default function SignIn() {
  return (
    <div className={styles.sign}>
      <Container>
        <div className={styles.sign_container}>
          <FormLogin />
        </div>
      </Container>

      <figure className={styles.sign_image}>
        <Img src={wallpaper} styles={{objectPosition: '50% 40%'}}/>
      </figure>
    </div>
  );
}
