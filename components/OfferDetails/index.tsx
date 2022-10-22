import styles from './offerDetails.module.scss';

function OfferDetails() {
    return (
        <div className={styles['offer-details']}>
            <h2 className={styles['offer-details__title']}>Offer Details</h2>
            <p className={styles['offer-details__price']}>Price: <span className={styles['offer-details__price--bold']}>$10.000</span></p>
            <p className={styles['offer-details__description']}>
                Description: <span className={styles['offer-details__description--bold']}>Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Laborum facere aut maiores accusamus explicabo eveniet,
                asperiores fugit autem recusandae voluptates, rem tenetur, neque
                laudantium iusto atque nihil! Fugit, explicabo nostrum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci dolorum ducimus laboriosam error! Inventore, labore. Atque mollitia, eveniet sunt vitae earum esse minus facere, dicta similique, quam vero explicabo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, ea a laborum maxime odio excepturi. Sit aliquid, pariatur est, numquam, quaerat ad aspernatur excepturi dolor quisquam vero vel! Placeat, maxime.</span>
            </p>
        </div>
    );
}

export default OfferDetails;
