export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "prioritizing client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-5 lg:row-span-2 md:col-span-6 row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-start",
      img: "https://media.githubusercontent.com/media/aditya-supare/art-portfolio/main/public/soul.gif",
      spareImg: "",
    },
    {
      id: 2,
      title: "flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 lg:row-span-1 md:col-span-3 md:row-span-2",
      imgClassName: "w-full h-50 sm:h-full sm:object-cover sm:object-center",
      titleClassName: "justify-start",
      img: "/sky.png",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "constantly trying to improve",
      className: "lg:col-span-2 lg:row-span-1 md:col-span-3 md:row-span-2",
      imgClassName: "w-100 h-full fade-right sm:w-70 sm:h-full",
      titleClassName: "justify-center",
      img: "https://media.githubusercontent.com/media/aditya-supare/art-portfolio/main/public/grassvend.gif",
      spareImg: "",
    },
    {
      id: 4,
      title: "3D enthusiast with a passion for web development",
      description: "",
      className: "lg:col-span-2 lg:row-span-1 md:col-span-3 md:row-span-1",
      imgClassName: "w-full h-full object-cover sm:h-full sm:object-cover",
      titleClassName: "justify-start",
      img: "https://media.githubusercontent.com/media/aditya-supare/art-portfolio/main/public/sea.gif",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building scripts for optimise pipelines in 3D softwares",
      description: "The Inside Scoop",
      className: "lg: col-span-1 md:col-span-3 md:row-span-2",
      imgClassName: "absolute left-0 bottom-0 md:w-96 w-60 fade-right",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "https://media.githubusercontent.com/media/aditya-supare/art-portfolio/main/public/ramen.gif",
      spareImg: "/grid.svg",
    },
    {
      id: 7,
      title: "With a passion of making amazing visuals",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "w-full h-full sm:h-full sm:object-cover sm:object-center",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "https://media.githubusercontent.com/media/aditya-supare/art-portfolio/main/public/joji.gif",
      spareImg: "",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
    {
      id: 8,
      title: "30+ clients across the globe",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "h-50 w-50 fade-down",
      titleClassName: "justify-center md:max-w-full max-w-60 text-zinc",
      img: "/anotar.gif",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "GrantX",
      des: "API Key Management System with PNPM Package",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/openheart-apps/grantx",
    },
    {
      id: 2,
      title: "CineSync",
      des: "featuring trending and top-rated movies, where users can rate films individually.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/aditya-supare/Cine-SyncV2",
    },
    {
      id: 3,
      title: "Cosmic-Calm",
      des: "Developed a personalized meditation platform which gives users access to the pleasing audios and images.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/aditya-supare/Cosmic-Calm",
    },
    {
      id: 4,
      title: "Exam-gpt",
      des: "AI bot to assist individuals in exam preparation by offering resources, identifying top coaching institutes in their area, outlining exam criteria, and providing specific syllabi for their exams.",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/aditya-supare/Ed-GPT",
    },
  ];


  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];