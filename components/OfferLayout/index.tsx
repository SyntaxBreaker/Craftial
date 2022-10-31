import { useState, useEffect } from "react";
import Gallery from "../Gallery";
import OfferDetails from "../OfferDetails";
import styles from "./offerLayout.module.scss";
import { IOffer } from "../../types";

function OfferLayout(offer: IOffer) {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        Object.keys(offer).length === 0
            ? setIsLoading(true)
            : setIsLoading(false);
    }, [offer]);

    return (
        <section className={styles["offer-layout"]}>
            {isLoading ? (
                <div className={styles["offer-layout__loading"]}>
                    Please be patient, loading...
                </div>
            ) : (
                <>
                    <Gallery />
                    <OfferDetails {...offer} />
                </>
            )}
        </section>
    );
}

export default OfferLayout;
