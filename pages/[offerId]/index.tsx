import {useRouter} from 'next/router';
import Gallery from '../../components/Gallery';
import OfferDetails from '../../components/OfferDetails';

function Offer() {
    const router = useRouter();
    const {offerId} = router.query;

    return (
        <>
            <Gallery />
            <OfferDetails />
        </>
    )
}

export default Offer;