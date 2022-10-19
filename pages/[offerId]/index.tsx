import {useRouter} from 'next/router';

function Offer() {
    const router = useRouter();
    const {offerId} = router.query;

    return (
        <>
            <h2>{offerId}</h2>
        </>
    )
}

export default Offer;