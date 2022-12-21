import Link from "next/link";
import * as React from "react";

const Navbar: React.FC = (): JSX.Element => {
    const [isOpened, setIsOpened] = React.useState<boolean>(false);
    const menu = React.useRef<HTMLUListElement | null>(null);

    // Menu Collapse Handler
    const collapseMenu = () => {
        const elem = menu.current;
        if (elem) {
            if (elem.classList.contains("active")) {
                elem.style.maxHeight = "0px";
            } else {
                elem.style.maxHeight = elem.scrollHeight + "px";
            }
            elem.classList.toggle("active");
            setIsOpened((prev) => !prev);
        }
    };
    return (
        <nav className="flex flex-col md:flex-row items-center justify-between py-4 gap-2">
            <div className="flex justify-between items-center w-full">
                <h2 className="text-xl font-semibold">Mahmoud Ibrahiam</h2>
                <button className="md:hidden" onClick={collapseMenu}>
                    {isOpened ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    )}
                </button>
            </div>
            <ul
                ref={menu}
                className="menu max-h-0 md:max-h-full overflow-hidden flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-6 font-medium w-full"
            >
                <li className="cursor-pointer">
                    <Link href="#about">
                        <a>About</a>
                    </Link>
                </li>
                <li className="cursor-pointer">
                    <Link href="#skills">
                        <a>Skills</a>
                    </Link>
                </li>
                <li className="cursor-pointer">
                    <Link href="https://github.com/cmahmoud" target="_blank">
                        Projects
                    </Link>
                </li>
                <li className="cursor-pointer">Resume</li>
            </ul>
        </nav>
    );
};
export default Navbar;
