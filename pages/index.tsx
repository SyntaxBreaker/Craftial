import type { NextPage } from "next";
import Ads from "../components/Ads";
import Categories from "../components/Categories";
import Offers from "../components/Offers";

const Home: NextPage = () => {
    return (
        <>
            <Ads />
            <Categories />
            <Offers />
        </>
    );
};

export default Home;
