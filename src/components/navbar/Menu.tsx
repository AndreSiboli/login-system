import styles from "@/styles/navbar/Menu.module.scss";
import Link from "next/link";
import Logo from "../layout/Logo";

import {
  PiInstagramLogo,
  PiPinterestLogo,
  PiXLogo,
  PiFacebookLogo,
} from "react-icons/pi";

interface PropsType {
  isOpen: boolean;
}

export default function Menu(props: PropsType) {
  const { isOpen } = props;
  const social = [
    {
      icon: <PiInstagramLogo />,
      label: "Instagram",
      href: "https://instagram.com",
    },
    {
      icon: <PiPinterestLogo />,
      label: "Pinterest",
      href: "https://pinterest.com",
    },
    {
      icon: <PiFacebookLogo />,
      label: "Facebook",
      href: "https://facebook.com",
    },
    {
      icon: <PiXLogo />,
      label: "X",
      href: "https://x.com",
    },
  ];

  return (
    <div className={`${styles.menu} ${isOpen && styles.opened}`} id="menu">
      <aside className={styles.menu_container}>
        <header className={styles.menu_header}>
          <Logo />
        </header>
        <div className={styles.menu_overflow}>
          <nav className={styles.menu_navigation}>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
          <footer className={styles.menu_footer}>
            {social.map((soc) => (
              <Link
                href={soc.href}
                target="_blank"
                aria-label={soc.label}
                key={soc.label}
              >
                {soc.icon}
              </Link>
            ))}
          </footer>
        </div>
      </aside>
    </div>
  );
}
