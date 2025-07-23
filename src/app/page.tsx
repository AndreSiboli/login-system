import Container from "@/components/layout/Container";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Container>
        <div className={styles.page_container}>
          <div className={styles.card}>
            <h1>Here is the home</h1>
            <p>
              The main focus of this site is to implement a login system based
              in JWT. No emphasis on design
            </p>
            <p>
              This is mocked, because host a database is expensive: <br />
              <strong>Email:</strong> email@test.com
              <br />
              <strong>Password:</strong> Test123@
            </p>

            <div className={styles.card_tips}>
              <h2>What can you test?</h2>
              <ul>
                <li>Access dashboard with/without a login</li>
                <li>Acess sign-in while auntenticated</li>
                <li>Try to manipulate JWT</li>
                <li>Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
