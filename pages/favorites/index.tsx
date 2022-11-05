import { useState, useEffect } from "react";
import styles from "./favorites.module.scss";
import Card from "../../components/Card";
import { IOffer } from "../../types";
import SearchBox from "../../components/SearchBox";
import Head from "next/head";

function Favorites() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [favoriteOffers, setFavoriteOffers] = useState<IOffer[] | null>(null);
    const [filteredOffers, setFilteredOffers] = useState<null | IOffer[]>(null);
    const [isFiltered, setIsFiltered] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const offerID = JSON.parse(
                    localStorage.getItem("favorites") || "[]"
                );
                if (offerID.length === 0) {
                    setIsLoading(false);
                    return;
                }

                const response = await fetch(`api/favorites?ids=${offerID}`);
                const offers = await response.json();
                setFavoriteOffers(offers);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>Favorite offers</title>
            </Head>
            <section className={styles["favorites"]}>
                <h2>Favorites</h2>
                {isLoading ? (
                    <p className={styles["favorites__loading"]}>
                        Please be patient, loading...
                    </p>
                ) : !favoriteOffers ? (
                    <p className={styles["favorites__info"]}>
                        There are no favorite offers.
                    </p>
                ) : (
                    <>
                        <SearchBox
                            offers={favoriteOffers}
                            setFilteredOffers={setFilteredOffers}
                            setIsFiltered={setIsFiltered}
                        />
                        {filteredOffers && isFiltered ? (
                            <div className={styles["offers"]}>
                                {filteredOffers.map((offer) => (
                                    <Card {...offer} key={offer._id} />
                                ))}
                            </div>
                        ) : (
                            <div className={styles["offers"]}>
                                {favoriteOffers?.map((offer) => (
                                    <Card {...offer} key={offer._id} />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </section>
        </>
    );
}

export default Favorites;
