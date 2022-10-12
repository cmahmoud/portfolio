import type { NextPage } from "next";
import Navbar from "@components/Navbar";
import About from "@components/About";

const Home: NextPage = () => {
    return (
        <div className="container mx-auto px-4 md:px-16">
            <Navbar />
            <main>
                <About />
            </main>
        </div>
    );
};

export default Home;
