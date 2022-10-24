import { useRouter } from "next/router";
import {GetStaticProps} from 'next';
import OfferLayout from "../../components/OfferLayout";
import { IOffer } from "../../types";


function Offer(offer: IOffer) {
    return <OfferLayout {...offer} />;
}

export const getStaticPaths = () => {
    return {
        fallback: true,
        paths: [
            {
                params: {
                    offerId: "1",
                },
            },
        ],
    };
}

export function getStaticProps(context) {
    const { params } = context;
    const offerId = params.offerId;

    return {
        props: {
            id: offerId,
            title: "Lorem ipsum",
            location: "Sandwell, West Midlands",
            price: "10.000",
            email: "test@example.com",
            phoneNumber: "+48 123 456 789",
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Laborum facere aut maiores accusamus explicabo eveniet,
                asperiores fugit autem recusandae voluptates, rem tenetur, neque
                laudantium iusto atque nihil! Fugit, explicabo nostrum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci dolorum ducimus laboriosam error! Inventore, labore. Atque mollitia, eveniet sunt vitae earum esse minus facere, dicta similique, quam vero explicabo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, ea a laborum maxime odio excepturi. Sit aliquid, pariatur est, numquam, quaerat ad aspernatur excepturi dolor quisquam vero vel! Placeat, maxime.`,
        },
    };
}

export default Offer;
