import { useRouter } from "next/router";
import styles from "./offerDetails.module.scss";
import Image from "next/image";
import { IOffer } from "types";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { useState } from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OfferDetails({
    _id,
    name,
    location,
    price,
    email,
    phoneNumber,
    description,
}: IOffer) {
    const { user, error, isLoading } = useUser();
    const router = useRouter();

    function removeOffer() {
        fetch(`api/removeOffer/${_id}`, {
            method: "DELETE",
        });
        router.push("/");
    }

    function handleFavorites() {
        let favoriteList = JSON.parse(
            localStorage.getItem("favorites") || "[]"
        );
        if (favoriteList.includes(_id)) {
            favoriteList.splice(favoriteList.indexOf(_id), 1);
            localStorage.setItem("favorites", JSON.stringify(favoriteList));
            toast.success('The offer has been removed from favorites.', {
                position: 'top-center',
                
            })
        } else {
            favoriteList.push(_id);
            localStorage.setItem("favorites", JSON.stringify(favoriteList));
            toast.success('The offer has been added to favorites.', {
                position: 'top-center'
            })
        }
    }

    return (
        <>
            <ToastContainer
                autoClose={3000}
                theme="colored"
                toastStyle={{
                    backgroundColor: '#6f63ad',
                    color: '#FFF'
                }}
            />
            <div className={styles["offer-details"]}>
            {user?.email === email && (
                <Link href={`/editOffer/${_id}`}>
                    <a
                        className={`${styles["offer-details__link"]} ${styles["offer-details__button"]} ${styles["offer-details__button--edit"]}`}
                    >
                        Edit offer
                    </a>
                </Link>
            )}
            {user?.email === email && (
                <button
                    className={`${styles["offer-details__button"]} ${styles["offer-details__button--remove"]}`}
                    onClick={removeOffer}
                >
                    Remove offer
                </button>
            )}
            <button
                className={`${styles["offer-details__button"]} ${styles["offer-details__button--favorite"]}`}
                onClick={handleFavorites}
            >
                💛
            </button>
            <p
                className={`${styles["offer-details__location"]} ${styles["offer-details__location--bold"]}`}
            >
                📍 {location}
            </p>
            <h2 className={styles["offer-details__name"]}>{name}</h2>
            <p
                className={`${styles["offer-details__price"]} ${styles["offer-details__price--bold"]}`}
            >
                ${price}
            </p>
            <div className={styles["offer-contact"]}>
                <p
                    className={`${styles["offer-contact__email"]} ${styles["offer-contact__email--bold"]}`}
                >
                    ✉️ {email}
                </p>
                <p
                    className={`${styles["offer-contact__phone-number"]} ${styles["offer-contact__phone-number--bold"]}`}
                >
                    📞 {phoneNumber}
                </p>
            </div>
            <p className={styles["offer-details__description"]}>
                Description:{" "}
                <span
                    className={`${styles["offer-details__description--bold"]} ${styles["offer-details__description--green"]}`}
                >
                    {description}
                </span>
            </p>
        </div>
        </>
    );
}

export default OfferDetails;
