import * as React from "react";
import User from "data/me";

const Header: React.FC = (): JSX.Element => {
    return (
        <header
            id="about"
            className="flex flex-col md:flex-row items-center gap-2 md:gap-8 mb-8"
        >
            <section className="order-2 flex flex-col w-full md:w-1/2 h-auto overflow-hidden">
                <h1 className="text-4xl font-bold mb-1">
                    {"Hi, I'am Mahmoud"}
                </h1>
                <h2 className="text-xl font-medium mb-3 text-opacity-40 text-gray-900">
                    {User.title}
                </h2>
                <p className="break-words text-opacity-70 text-gray-900 mb-6">
                    {User.description}
                </p>
                <a
                    href="mailto:cmahmoudv@gmail.com"
                    className="inline-flex w-full md:w-fit text-center px-8 py-2 bg-primary text-white font-medium rounded-lg"
                >
                    Contact Me
                </a>
            </section>
            <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="blob order-1 md:order-last w-full md:w-1/2 h-fit"
            >
                <defs>
                    <clipPath id="user-avatar" clipPathUnits="userSpaceOnUse">
                        <path
                            fill="#FF0066"
                            d="M51,-65.8C61.5,-52,62.2,-31.5,64.8,-12.1C67.5,7.3,72,25.7,66.4,41.2C60.9,56.6,45.3,69.1,29.4,70.5C13.4,71.8,-2.8,62.1,-18.9,54.9C-34.9,47.7,-50.8,43.1,-62.7,31.7C-74.6,20.3,-82.5,2.2,-79.5,-13.8C-76.4,-29.8,-62.4,-43.7,-47.3,-56.7C-32.2,-69.7,-16.1,-81.8,2.1,-84.3C20.2,-86.8,40.5,-79.6,51,-65.8Z"
                            transform="translate(100 100)"
                        />
                    </clipPath>
                </defs>
                <image
                    x="0"
                    y="10"
                    width="100%"
                    height="100%"
                    clipPath="url(#user-avatar)"
                    xlinkHref={User.photo}
                    preserveAspectRatio="xMinYMin slice"
                />
            </svg>
        </header>
    );
};
export default Header;
