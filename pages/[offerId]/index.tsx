import {useRouter} from 'next/router';
import OfferLayout from '../../components/OfferLayout';

function Offer() {
    const router = useRouter();
    const offerId = router.query.offerId as string;

    return (
        <OfferLayout offerId={offerId} />
    )
}

export default Offer;