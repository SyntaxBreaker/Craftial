import Gallery from '../Gallery';
import OfferDetails from '../OfferDetails';
import styles from './offerLayout.module.scss';

function OfferLayout({offerId}: {offerId?: string}) {
    return (
        <main className={styles['offer-layout']}>
            <Gallery />
            <OfferDetails />
        </main>
    )
}

export default OfferLayout;