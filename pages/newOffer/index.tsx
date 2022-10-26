import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import styles from "./newOffer.module.scss";

interface IOffer {
    name: string;
    location: string;
    price: string;
    email: string;
    phoneNumber: string;
    description: string;
}

function NewOffer() {
    const [offer, setOffer] = useState<IOffer>({
        name: "",
        location: "",
        price: "",
        email: "",
        phoneNumber: "",
        description: "",
    });

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        event.preventDefault();
        const { name, value } = event.target;
        setOffer({
            ...offer,
            [name]: value,
        });
    };

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        fetch("api/newOffer", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(offer),
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <section className={styles["new-offer"]}>
            <h2>Create a new offer</h2>
            <form onSubmit={handleSubmit} className={styles["new-offer__form"]}>
                <div className={styles["new-offer__item"]}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className={styles["new-offer__input"]}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles["new-offer__item"]}>
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className={styles["new-offer__input"]}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles["new-offer__item"]}>
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        className={styles["new-offer__input"]}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles["new-offer__item"]}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className={styles["new-offer__input"]}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div
                    className={`${styles["new-offer__item"]} ${styles["new-offer__item--full-width"]}`}
                >
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        className={styles["new-offer__input"]}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div
                    className={`${styles["new-offer__item"]} ${styles["new-offer__item--full-width"]}`}
                >
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        rows={12}
                        cols={12}
                        className={`${styles["new-offer__input"]} ${styles["new-offer__input--textarea"]}`}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles["new-offer__item"]}>
                    <input
                        type="submit"
                        value="Create"
                        className={`${styles["new-offer__input"]} ${styles["new-offer__input--submit"]}`}
                    />
                </div>
            </form>
        </section>
    );
}

export default NewOffer;
