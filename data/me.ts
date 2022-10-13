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
    description:
        "Junior full stack developer with a passion for learning new technologies and working with teams to create user-friendly web applications.",
    summary:
        "Experienced Full Stack Developer with over 1 year of experience in Web development using Node.js, Express.js, MongoDB, React.js and, Redux, Common.JS, Babel+ES6, NEXT JS and Webpack for Single Page Application development.",
};
export default User;
