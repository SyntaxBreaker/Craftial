import Gallery from '../Gallery';
import OfferDetails from '../OfferDetails';
import styles from './offerLayout.module.scss';
import { IOffer } from '../../types';


function OfferLayout({...offer}: IOffer) {
    return (
        <section className={styles['offer-layout']}>
            <Gallery />
            <OfferDetails {...offer} />
        </section>
    )
}

export default OfferLayout;