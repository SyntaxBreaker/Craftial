import styles from "./header.module.scss";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

function Header() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <header className={styles["header"]}>
            <h1 className={styles["header__logo"]}>
                <Link href="/">
                    <a className={styles["header__link"]}>Craftial</a>
                </Link>
            </h1>
            <form className={styles["form"]}>
                <input
                    type="search"
                    placeholder="Search for..."
                    className={styles["form__input"]}
                />
                <input
                    type="submit"
                    value="🔍"
                    className={styles["form__input--submit"]}
                />
            </form>
            <div className={styles["account"]}>
                <span className={styles["account__item"]}>
                    <Link href="/newOffer">
                        <a className={styles["account__link"]}>➕</a>
                    </Link>
                </span>
                <span className={styles["account__item"]}>
                    <p>💙</p>
                </span>
                {user ? (
                    <>
                        <span className={styles["account__item"]}>
                            <p>🧔</p>
                        </span>
                        <a
                            href="/api/auth/logout"
                            className={styles["account__link"]}
                        >
                            Logout
                        </a>
                    </>
                ) : (
                    <a
                        href="/api/auth/login"
                        className={styles["account__link"]}
                    >
                        Login
                    </a>
                )}
            </div>
        </header>
    );
}

export default Header;
