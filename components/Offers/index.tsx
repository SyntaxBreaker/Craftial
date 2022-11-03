import styles from "./offers.module.scss";
import { IOffers } from "../../types";
import Card from "../Card";

function Offers({ offers }: IOffers) {
    return (
        <section className={styles["wrapper"]}>
            <h2 className={styles["wrapper-title"]}>Chosen offers for you!</h2>
            <div className={styles["offers"]}>
                {offers.map((offer) => (
                    <Card {...offer} key={offer._id} />
                ))}
            </div>
        </section>
    );
}

export default Offers;
