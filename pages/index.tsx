import Ads from "../components/Ads";
import Categories from "../components/Categories";
import Offers from "../components/Offers";
import connectToMongoDB from "../utils/mongoDB";
import offer from "../models/offer";
import { IOffers } from "../types";

function Home({ offers }: IOffers) {
    return (
        <>
            <Ads />
            <Categories />
            <Offers offers={offers} />
        </>
    );
}

export async function getServerSideProps() {
    try {
        await connectToMongoDB();

        const offers = await offer.find({});

        return {
            props: {
                offers: JSON.parse(JSON.stringify(offers)),
            },
        };
    } catch (err) {
        console.log(err);
    }
}

export default Home;
