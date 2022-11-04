import { useEffect, useState } from "react";
import styles from "./offers.module.scss";
import { IOffers, IOffer } from "../../types";
import Card from "../Card";
import SearchBox from "../SearchBox";

function Offers({ offers }: IOffers) {
    const [filteredOffers, setFilteredOffers] = useState<null | IOffer[]>(null);
    const [isFiltered, setIsFiltered] = useState<boolean>(false);

    return (
        <section className={styles["wrapper"]}>
            <h2 className={styles["wrapper-title"]}>Chosen offers for you!</h2>
            <SearchBox
                offers={offers}
                setFilteredOffers={setFilteredOffers}
                setIsFiltered={setIsFiltered}
            />
            <div className={styles["offers"]}>
                {filteredOffers && isFiltered ? (
                    <>
                        {filteredOffers?.map((offer) => (
                            <Card {...offer} key={offer._id} />
                        ))}
                    </>
                ) : (
                    <>
                        {offers.map((offer) => (
                            <Card {...offer} key={offer._id} />
                        ))}
                    </>
                )}
            </div>
        </section>
    );
}

export default Offers;
