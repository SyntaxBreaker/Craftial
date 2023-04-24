import { useEffect, useState } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

function Header() {
  const { user } = useUser();
  const roles: string[] | undefined = user && user['roles/roles'] as string[];
  const isAdmin = roles?.includes('Admin');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 960) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return (
    <header className={styles["header"]}>
      <Link href="/" className={styles["header__logo"]}>
        <a className={styles["header__link"]} tabIndex={1}>
          Craftial
        </a>
      </Link>
      <button className={styles['header__button']} onClick={() => setIsOpen(!isOpen)}>&#9776;</button>
      {isOpen && <nav className={styles["header__nav"]} onClick={() => setIsOpen(!isOpen)}>
        <Link href="/newOffer">
          <a className={`${styles["header__link"]} ${styles["header__link--small"]} ${styles["header__link--hamburger"]}`} tabIndex={2}>
            Create a new offer
          </a>
        </Link>
        <Link href="/favorites">
          <a className={`${styles["header__link"]} ${styles["header__link--small"]} ${styles["header__link--hamburger"]}`} tabIndex={3}>
            Favorite offers
          </a>
        </Link>
        {user ? (
          <>
            {isAdmin && <Link href="/admin"><a
              className={`${styles["header__link"]} ${styles["header__link--small"]} ${styles["header__link--hamburger"]}`}
              tabIndex={4}
            >
              Admin panel
            </a></Link>}
            <Link href="/api/auth/logout">
              <a
                className={`${styles["header__link"]} ${styles["header__link--small"]} ${styles["header__link--hamburger"]}`}
                tabIndex={4}
              >
                Sign out
              </a>
            </Link>
          </>
        ) : (
          <Link href="/api/auth/login">
            <a
              className={`${styles["header__link"]} ${styles["header__link--small"]} ${styles["header__link--hamburger"]}`}
              tabIndex={4}
            >
              Sign in
            </a>
          </Link>
        )}
      </nav>}
    </header>
  );
}

export default Header;
