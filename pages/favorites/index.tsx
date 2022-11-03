import { useState, useEffect } from "react";
import styles from "./favorites.module.scss";

function Favorites() {
    const [favoriteOffers, setFavoriteOffers] = useState(null);

    useEffect(() => {
        const offerID = JSON.parse(localStorage.getItem("favorites") || "[]");

        async function fetchData() {
            try {
                const response = await fetch(`api/favorites?ids=${offerID}`);
                const offers = await response.json();
                setFavoriteOffers(offers);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);

    return (
        <section className={styles["favorites"]}>
            <h2>Favorites</h2>
            {favoriteOffers && "exist"}
        </section>
    );
}

export default Favorites;
