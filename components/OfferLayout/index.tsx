import Gallery from '../Gallery';
import OfferDetails from '../OfferDetails';
import styles from './offerLayout.module.scss';

function OfferLayout({offerId}: {offerId?: string}) {
    return (
        <section className={styles['offer-layout']}>
            <Gallery />
            <OfferDetails />
        </section>
    )
}

export default OfferLayout;