import styles from './newOffer.module.scss';

function newOffer() {
    return (
        <section className={styles['new-offer']}>
            <h2>Create a new offer</h2>
            <form action='/newoffer' method='post' className={styles['new-offer__form']}>
                <div className={styles['new-offer__item']}>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' id='title' className={styles['new-offer__input']} required />
                </div>
                <div className={styles['new-offer__item']}>
                    <label htmlFor='price'>Price</label>
                    <input type='text' name='price' id='price' className={styles['new-offer__input']} required />
                </div>
                <div className={styles['new-offer__item']}>
                    <label htmlFor='location'>Location</label>
                    <input type='text' name='location' id='location' className={styles['new-offer__input']} required />
                </div>
                <div className={styles['new-offer__item']}>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' id='email' className={styles['new-offer__input']} required />
                </div>
                <div className={`${styles['new-offer__item']} ${styles['new-offer__item--full-width']}`}>
                    <label htmlFor='phone'>Phone number</label>
                    <input type='text' name='phone' id='phone' className={styles['new-offer__input']} required />
                </div>
                <div className={`${styles['new-offer__item']} ${styles['new-offer__item--full-width']}`}>
                    <label htmlFor='description'>Description</label>
                    <textarea name='description' id='description' rows={12} cols={12} className={`${styles['new-offer__input']} ${styles['new-offer__input--textarea']}`} required />
                </div>
                <div className={styles['new-offer__item']}>
                    <input type='submit' value='Create' className={`${styles['new-offer__input']} ${styles['new-offer__input--submit']}`} />
                </div>
            </form>
        </section>
    )
}

export default newOffer;