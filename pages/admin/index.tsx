import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { IOffer, IUser } from 'types';
import styles from './admin.module.scss';
import Image from "next/image";
import connectToMongoDB from "utils/mongoDB";
import offer from "models/offer";
import Link from "next/link";
import removeOffer from "utils/toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default withPageAuthRequired(function Admin({ user, version, offers }: { user: IUser, version: number | undefined, offers: IOffer[] }) {
    const STATS = [
        {
            id: 0,
            title: 'Registered users',
            value: 3
        },
        {
            id: 1,
            title: 'Available offers',
            value: offers.length
        },
        {
            id: 2,
            title: 'Current version',
            value: version
        }
    ];

    const router = useRouter();

    useEffect(() => {
        if ((!user['roles/roles'].includes('Admin'))) {
            router.push('/');
        }
    }, [user]);

    return (
        <>
            <ToastContainer
                autoClose={3000}
                theme="colored"
                toastStyle={{
                    backgroundColor: "#6f63ad",
                    color: "#FFF",
                }}
            />
            <section className={styles['admin']}>
                <section className={styles['admin__cards']}>
                    {STATS.map(stat => (
                        <article key={stat.id} className={`${styles['admin__card']} ${styles['admin__card--stats']}`}>
                            <h3 className={styles['admin__title']}>{stat.title}</h3>
                            <p className={styles['admin__amount']}>{stat.value}</p>
                        </article>
                    ))}
                </section>
                <section className={styles['admin__cards']}>
                    {offers.map(offer => (
                        <article key={offer._id} className={`${styles['admin__card']} ${styles['admin__card--full']}`}>
                            <div className={styles['admin__header']}>
                                <Link href={`/${offer._id}`}><h3 className={styles['admin__title']}>{offer.name}</h3></Link>
                                <p className={styles['admin__price']}>${offer.price}</p>
                            </div>
                            <div className={styles['admin__body']}>
                                <p className={styles['admin__description']}>{offer.description}</p>
                                <p className={styles['admin__email']}><Image src='/email.svg' height={14} width={14} alt='Email icon' /> {offer.email}</p>
                                <p className={styles['admin__location']}><Image src='/location.svg' height={14} width={14} alt='Location icon' /> {offer.location}</p>
                                <p className={styles['admin__phoneNumber']}><Image src='/phone.svg' height={14} width={14} alt='Phone icon' /> {offer.phoneNumber}</p>
                                <div className={styles['admin__images']}>
                                    {offer.images.map(image => (
                                        <Image key={image.id} src={image.url} height={100} width={100} alt='' />
                                    ))}
                                </div>
                                <p className={styles['admin__publicationDate']}>Publication date: {offer.createdAt.split("T")[0]}</p>
                            </div>
                            <div className={styles['admin__footer']}>
                                <div className={styles['admin__buttons']}>
                                    <Link href={`/editOffer/${offer._id}`}>
                                        <button className={styles['admin__button']}>Edit</button>
                                    </Link>
                                    <button className={`${styles['admin__button']} ${styles['admin__button--remove']}`} onClick={() => removeOffer(offer._id, router)}>Delete</button>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </>
    )
});

export async function getServerSideProps() {
    try {
        const { version } = require('../../package.json');
        await connectToMongoDB();
        const offers = await offer.find({})

        return {
            props: {
                offers: JSON.parse(JSON.stringify(offers)),
                version: version
            }
        }

    } catch (err) {
        console.log(err);
    }
}