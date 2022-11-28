import Offers from "components/Offers";
import connectToMongoDB from "utils/mongoDB";
import offer from "models/offer";
import { IOffers } from "types";
import Head from "next/head";

function Home({ offers }: IOffers) {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
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
