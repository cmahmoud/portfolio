import type { NextPage } from "next";
import Navbar from "@components/Navbar";
import Header from "@components/Header";
import About from "@components/About";
import Head from "next/head";
import User from "data/me";
import Skills from "@components/Skills";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>{User.name}</title>
                <meta charSet="UTF-8" />
                <meta name="owner" content={User.name} />
                <meta name="language" content="EN" />
                <meta name="reply-to" content={User.email} />
                <meta content={User.description} name="description" />
                <meta name="pagename" content={User.name} />
            </Head>
            <div className="container mx-auto px-4 md:px-16">
                <Navbar />
                <Header />
                <main>
                    <About />
                    <Skills />
                </main>
            </div>
        </>
    );
};

export default Home;
