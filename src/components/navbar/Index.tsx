"use client";

import { use, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "@/styles/navbar/Index.module.scss";

import Link from "next/link";
import Logo from "@/components/layout/Logo";
import Container from "@/components/layout/Container";
import Menu from "@/components/navbar/Menu";

import { UserContext } from "@/context/userContext";
import UserProfile from "./UserProfile";

export default function Navbar() {
  const path = usePathname();
  const { userData } = use(UserContext);
  const [isOnTop, setIsOnTop] = useState(true);
  const [isLight, setIsLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollOpen, setIsCollOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false);

  useEffect(() => {
    function top() {
      const scrollY = window.scrollY;
      if (scrollY === 0) return setIsOnTop(true);
      setIsOnTop(false);
    }

    window.addEventListener("scroll", top);

    return () => {
      window.removeEventListener("scroll", top);
    };
  }, [isOnTop]);

  useEffect(() => {
    function resize() {
      const windowWidth = window.innerWidth;

      if (windowWidth > 768) setIsMenuOpen(false);
      if (windowWidth <= 767) {
        setIsMenuOpen(false);
        setIsCollOpen(false);
        setIsStoreOpen(false);
      }
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    checkLightPages();
    closeAllTabs();
  }, [path]);

  function checkLightPages() {
    const paths = ["/collections", "/store"];
    const isValidPath = paths.some((str) => path.startsWith(str));
    setIsLight(isValidPath);
  }

  function closeAllTabs() {
    setIsMenuOpen(false);
    setIsCollOpen(false);
    setIsStoreOpen(false);
    document.body.style.overflow = "auto";
  }

  function defineIsMenuOpen() {
    if (isMenuOpen) document.body.style.overflow = "auto";
    else document.body.style.overflow = "cllp";

    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <header
      className={`${styles.header} ${isOnTop && styles.onTop} ${
        isMenuOpen && styles.open
      } ${isLight && styles.light} 
      ${(isCollOpen || isStoreOpen || isMenuOpen) && styles.drop}`}
    >
      <Container style={{ position: "static" }}>
        <div className={styles.header_container}>
          <section className={styles.header_start}>
            <nav className={styles.header_logo}>
              <Logo />
            </nav>

            <nav className={styles.header_links}>
              <Link href={"/dashboard"}>Dashboard</Link>
            </nav>
          </section>

          <section className={styles.header_end}>
            {userData ? (
              <UserProfile />
            ) : (
              <Link href="/sign-in" aria-label="Sign In/Sign up">
                Sign In/Up
              </Link>
            )}

            <div className={styles.header_menu} onClick={defineIsMenuOpen}>
              <span className={styles.trace}></span>
              <span className={styles.trace}></span>
              <span className={styles.trace}></span>
            </div>
          </section>
        </div>
      </Container>

      <Menu isOpen={isMenuOpen} />
    </header>
  );
}
