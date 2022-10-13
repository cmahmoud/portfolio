import * as React from "react";
import User from "data/me";

const Skills: React.FC = (): JSX.Element => {
    return (
        <section id="skills" className="w-full">
            <h2 className="text-4xl text-center font-bold mb-8">About Me</h2>
            <main className="flex flex-col md:flex-row gap-4">
                <section className="w-full md:w-1/2 flex items-center justify-center">
                    <svg className="max-w-fit h-52 rounded-lg">
                        <image
                            xlinkHref={User.photo}
                            x="0"
                            y="0"
                            width="100%"
                        />
                    </svg>
                </section>
                <section className="w-1/2">
                    <header>
                        <p className="font-medium text-gray-900/70">
                            {User.summary}
                        </p>
                    </header>
                    <main></main>
                    <footer>
                        <a>Download CV</a>
                    </footer>
                </section>
            </main>
        </section>
    );
};
export default Skills;
