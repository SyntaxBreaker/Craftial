import type { NextPage } from "next";
import Ads from "../components/Ads";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Offers from "../components/Offers";

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Ads />
            <Categories />
            <Offers />
        </>
    );
};

export default Home;
