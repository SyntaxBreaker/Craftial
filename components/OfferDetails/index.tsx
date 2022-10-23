import styles from './offerDetails.module.scss';

function OfferDetails() {
    return (
        <div className={styles['offer-details']}>
            <h2 className={styles['offer-details__title']}>Lorem ipsum</h2>
            <p className={styles['offer-details__price']}>$10.000</p>
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
