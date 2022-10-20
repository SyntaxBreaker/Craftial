import styles from "./offers.module.scss";
import Image from "next/image";
import Link from "next/link";

interface IOffer {
    id: number;
    name: string;
    price: number;
    location: string;
    publicationDate: Date;
}

const offers: IOffer[] = [
    {
        id: 1,
        name: "Natural Barrel Bung Plug Stopper",
        price: 13,
        location: "Zalaegerszeg, Csavargyár u. 97",
        publicationDate: new Date(),
    },
    {
        id: 2,
        name: "Solid Reclaimed Wood Desk",
        price: 275,
        location: "Giza, 1 Essam El Dally St., DOKKI",
        publicationDate: new Date(),
    },
    {
        id: 3,
        name: "Premium Arabic Sofa Set",
        price: 650,
        location: "São José Dos Campos, Praça Antilhas 59",
        publicationDate: new Date(),
    },
    {
        id: 4,
        name: "Personalized Photo Frames | Best Gift",
        price: 20,
        location: "809-1413 Sociis Road",
        publicationDate: new Date(),
    },
    {
        id: 5,
        name: "Hand Embroidered Sunflowers Bucket Hat",
        price: 32,
        location: "324-5100 A Rd.",
        publicationDate: new Date(),
    },
    {
        id: 6,
        name: "Hand Embroidered Colorful Flowers & Butterfly Tote Bag",
        price: 58,
        location: "170-8775 Lacinia St.",
        publicationDate: new Date(),
    },
];

function Offers() {
    return (
        <section className={styles["wrapper"]}>
            <h2 className={styles["wrapper-title"]}>Chosen offers for you!</h2>
            <div className={styles["offers"]}>
                {offers.map((offer) => (
                    <Link href={`/${offer.id}`} key={offer.id}>
                        <div className={styles["offer-card"]}>
                            <div className={styles["offer-card__header"]}>
                                <Image
                                    src="https://cdn.pixabay.com/photo/2015/07/28/20/55/tools-864983_960_720.jpg"
                                    alt=""
                                    width="100%"
                                    height="50px"
                                    sizes="(min-width: 768px) 960px, 720px"
                                    className={styles["offer-card__image"]}
                                />
                            </div>
                            <div className={styles["offer-card__body"]}>
                                <h3
                                    className={`${styles["offer-card__name"]} ${styles["offer-card__name--golden"]}`}
                                >
                                    {offer.name}
                                </h3>
                                <p className={styles["offer-card__price"]}>
                                    Price:{" "}
                                    <span
                                        className={`
                                        ${styles["offer-card__price--bold"]}
                                        ${styles["offer-card__price--golden"]}
                                    `}
                                    >
                                        ${offer.price}
                                    </span>
                                </p>
                                <p className={styles["offer-card__location"]}>
                                    Location:{" "}
                                    <span
                                        className={`
                                        ${styles["offer-card__location--bold"]}
                                        ${styles["offer-card__location--golden"]}
                                    `}
                                    >
                                        {offer.location}
                                    </span>
                                </p>
                                <p className={styles["offer-card__date"]}>
                                    Publication date:{" "}
                                    <span
                                        className={`
                                    ${styles["offer-card__date--bold"]}
                                    ${styles["offer-card__date--golden"]}
                                `}
                                    >
                                        {offer.publicationDate.toLocaleDateString()}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Offers;
