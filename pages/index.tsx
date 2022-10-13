import type { NextPage } from "next";
import Navbar from "@components/Navbar";
import Header from "@components/Header";

const Home: NextPage = () => {
    return (
        <div className="container mx-auto px-4 md:px-16">
            <Navbar />
            <main>
                <Header />
            </main>
        </div>
    );
};

export default Home;
