import type { NextPage } from "next";
import Ads from "../components/Ads";
import Categories from "../components/Categories";
import Header from "../components/Header";

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Ads />
            <Categories />
        </>
    );
};

export default Home;
