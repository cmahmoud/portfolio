interface IUser {
    fname: string;
    name: string;
    description: string;
    title: string;
    email: string;
    linkedin: string;
    github: string;
    photo: string;
}

const User: IUser = {
    fname: "Mahmoud",
    name: "Mahmoud Ibrahiam",
    description:
        "Junior full stack developer with a passion for learning new technologies and working with teams to create user-friendly web applications",
    title: "Full-Stack Developer",
    email: "cmahmoudv@gmail.com",
    linkedin: "https://www.linkedin/in/mahmoud-ibrahiam",
    github: "https://www.github.com/cmahmoud",
    photo: "/mahmoud.jpg",
};
export default User;
