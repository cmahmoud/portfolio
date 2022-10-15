export type Skill = {
    name: string;
    value: string;
};
interface IUser {
    fname: string;
    name: string;
    description: string;
    summary: string;
    title: string;
    email: string;
    linkedin: string;
    github: string;
    photo: string;
    expYears: number;
    projectsCompleted: number;
    frontendSkills: Skill[];
    backendSkills: Skill[];
}

const User: IUser = {
    fname: "Mahmoud",
    name: "Mahmoud Ibrahiam",
    title: "Full-Stack Developer",
    email: "cmahmoudv@gmail.com",
    linkedin: "https://www.linkedin/in/mahmoud-ibrahiam",
    github: "https://www.github.com/cmahmoud",
    photo: "/mahmoud.jpg",
    expYears: 1,
    projectsCompleted: 5,
    frontendSkills: [
        {
            name: "HTML",
            value: "80%",
        },
        {
            name: "Css",
            value: "70%",
        },
        {
            name: "Bootstrap",
            value: "55%",
        },
        {
            name: "Tailwindcss",
            value: "80%",
        },
        {
            name: "Styled Components",
            value: "40%",
        },
        {
            name: "JavaScript",
            value: "60%",
        },
        {
            name: "React.js",
            value: "65%",
        },
        {
            name: "Next.js",
            value: "45%",
        },
        {
            name: "Redux",
            value: "75%",
        },
    ],
    backendSkills: [
        {
            name: "Node.js",
            value: "40%",
        },
        {
            name: "Express.js",
            value: "65%",
        },
        {
            name: "Python",
            value: "50%",
        },
        {
            name: "Django",
            value: "40%",
        },
        {
            name: "MongoDB",
            value: "70%",
        },
        {
            name: "Wepback",
            value: "50%",
        },
        {
            name: "Git",
            value: "55%",
        },
    ],
    description:
        "Junior full stack developer with a passion for learning new technologies and working with teams to create user-friendly web applications.",
    summary:
        "Experienced Full Stack Developer with over 1 year of experience in Web development using Node.js, Express.js, MongoDB, React.js and, Redux, Common.JS, Babel+ES6, NEXT JS and Webpack for Single Page Application development.",
};
export default User;
