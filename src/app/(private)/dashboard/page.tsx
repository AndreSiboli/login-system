import styles from "@/styles/pages/Dashboard.module.scss";
import Container from "@/components/layout/Container";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Container>
        <div className={styles.dashboard_container}>
          <h1>If you can see that, you are autenticated.</h1>
        </div>
      </Container>
    </div>
  );
}
