import styles from './offerDetails.module.scss';
import Image from 'next/image';

function OfferDetails() {
    return (
        <div className={styles['offer-details']}>
            <h2 className={styles['offer-details__title']}>Lorem ipsum</h2>
            <p className={`${styles['offer-details__location']} ${styles['offer-details__location--bold']}`}>Sandwell, West Midlands</p>
            <p className={`${styles['offer-details__price']} ${styles['offer-details__price--bold']}`}>$10.000</p>
            <div className={styles['offer-contact']}>
                    <p className={`${styles['offer-contact__email']} ${styles['offer-contact__email--bold']}`}>test@example.com</p>
                    <p className={`${styles['offer-contact__phone-number']} ${styles['offer-contact__phone-number--bold']}`}>+48 123 456 789</p>
            </div>
            <p className={styles['offer-details__description']}>
                Description: <span className={`${styles['offer-details__description--bold']} ${styles['offer-details__description--green']}`}>Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Laborum facere aut maiores accusamus explicabo eveniet,
                asperiores fugit autem recusandae voluptates, rem tenetur, neque
                laudantium iusto atque nihil! Fugit, explicabo nostrum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci dolorum ducimus laboriosam error! Inventore, labore. Atque mollitia, eveniet sunt vitae earum esse minus facere, dicta similique, quam vero explicabo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, ea a laborum maxime odio excepturi. Sit aliquid, pariatur est, numquam, quaerat ad aspernatur excepturi dolor quisquam vero vel! Placeat, maxime.</span>
            </p>
        </div>
    );
}

export default OfferDetails;
