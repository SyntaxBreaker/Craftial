import styles from './header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <h1>Craftial</h1>
            <form className={styles.form}>
                <input
                    type="search"
                    placeholder="Search for..."
                    className={styles.input}
                />
            </form>
            <div className={styles.div}>
                <span>Favorites</span>
                <span>Avatar</span>
            </div>
        </header>
    )
}

export default Header;