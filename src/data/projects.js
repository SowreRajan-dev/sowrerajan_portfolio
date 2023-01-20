import agriConnect from "../Assests/Projects_assets/agriconnect.png";
import ieee_sb from "../Assests/Projects_assets/ieee_sb.png";
import pinterest_clone from "../Assests/Projects_assets/pinterest_clone.png";
import hotstar_clone from "../Assests/Projects_assets/hotstar-clone.png";
import blogb from "../Assests/Projects_assets/BlogB.png";
import koruki from "../Assests/Projects_assets/Koruki.png";
import covidstatus from "../Assests/Projects_assets/covidstatus.png";
import insta_clone from "../Assests/Projects_assets/insta_clone.png";
import educhat from "../Assests/Projects_assets/educhat.png";
import agriconnect_video from "../Assests/Projects_videos/agri_connect.mp4";
import ieee_sb_video from "../Assests/Projects_videos/ieee_sb.mp4";
import pinterest_clone_video from "../Assests/Projects_videos/pintrest.mp4";
import hotstar_clone_video from "../Assests/Projects_videos/hotstar_clone.webm";
import blogb_video from "../Assests/Projects_videos/blog_b.mp4";
import koruki_video from "../Assests/Projects_videos/koruki.mp4";
import insta_clone_video from "../Assests/Projects_videos/insta_clone.mp4";
import educhat_video from "../Assests/Projects_videos/educhat.webm";

export const projects = [
  {
    id: 1,
    project_name: "Agri Connect",
    tech_stack: [
      {
        name: "Next JS",
        color: "#000000",
      },
      {
        name: "Tailwind",
        color: "#34AEE5",
      },
      {
        name: "MySQL",
        color: "#D0D7DF",
      },
      {
        name: "Prisma",
        color: "#F7FAFC",
      },
      {
        name: "Stripe",
        color: "#635BFF",
      },
      {
        name: "Redux",
        color: "#764ABC",
      },
    ],
    image_bg: "#20E58F",
    imageSrc: agriConnect,
    github_url: "https://github.com/SowreRajan-dev/Agri_connect",
    text_color: "#000000",
    description:
      "Agri connect is the full stack e-commerce application built with Next js which has several capabilities with SEO and server-side renderings. This app is made as PWA to make support as a mobile application. I had a very great experience while building this app. It consists of not only the web page but also external support from our institution and a good team of three who consistently recreate the designs and backend based on necessity. AgriConnect is an e-commerce website specialized for farmers to sell their goods directly without a third party. I have learned more about Next js and implemented several features like Stripe, Redux, and searching functionalities. It consists of a login, and sign in which enables users to enter the application. The user can add-to-cart the products and customize the basket based on their needs. It's a client-based application to buy the products based on the products sold by farmers.",
    videoSrc: agriconnect_video,
  },
  {
    id: 2,
    project_name: "Instagram Clone",
    tech_stack: [
      { name: "React-Typescript", color: "#3178C6" },
      { name: "CSS", color: "#254BDD" },
      { name: "Express", color: "#EEEEEE" },
      { name: "Mongo DB", color: "#023430" },
      { name: "Node JS", color: "#43853D" },
      { name: "Context api", color: "#1054B7" },
    ],
    imageSrc: insta_clone,
    image_bg: "#121212",
    github_url: "https://github.com/SowreRajan-dev/insta_clone",
    text_color: "#ffffff",
    description:
      "Instagram-clone is my self built clone first time with typescript-react.It is a full stack clone which made me to think several ways to refactor the code and make the code reusable. I enjoyed to make api's for integrating with frontend.The clone has a complete login, signup and signoff functionality built as a MERN stack application and also has a image upload with like and comment functionality. ",
    videoSrc: insta_clone_video,
  },
  {
    id: 3,
    project_name: "IEEE Student Branch for SIT",
    tech_stack: [
      { name: "React", color: "#61DAFB" },
      { name: "Styled-Components", color: "#34AEE5" },
    ],
    imageSrc: ieee_sb,
    image_bg: "#005F94",
    github_url: "https://github.com/SowreRajan-dev/ieee_sb",
    description:
      "The IEEE student chapter portfolio is a web page that is built using React. It's a webpage built for our Sairam IEEE Student Branch to showcase the events organized by IEEE. It is used to promote the corresponding webinars and member details to showcase the strength of IEEE at Sri Sairam Institute of Technology.I have learned the new Styled-Component framework for creating web designs.This is my first external project built upon my own interest.It also made me to learn about team work ",
    videoSrc: ieee_sb_video,
    text_color: "#D3D3D3",
  },

  {
    id: 4,
    project_name: "BlogB",
    tech_stack: [
      { name: "React", color: "#61DAFB" },
      { name: "CSS", color: "#254BDD" },
      { name: "Express", color: "#EEEEEE" },
      { name: "Mongo DB", color: "#023430" },
      { name: "Node JS", color: "#43853D" },
      { name: "Context api", color: "#1054B7" },
    ],
    description:
      "BlogB is another full-stack web application used for blogging the thoughts of the user. It provides the basic functionality for creating an account and signing up. A basic CRUD application built using MERN Stack as a primary stack. There are several functionalities like uploading images, adding an empty blog and commenting on the blog, and editing the text. This is my first full stack application done by referencing youtube tutorials and by googling pieces of stuff. This app provides me to give the assurance of creating a full stack using the MERN stack.",
    image_bg: "#D7C0AD",
    text_color: "#000000",
    imageSrc: blogb,
    github_url: "https://github.com/SowreRajan-dev/React_Blog_App",
    videoSrc: blogb_video,
  },

  {
    id: 5,
    project_name: "Pinterest Clone",
    tech_stack: [
      { name: "React", color: "#61DAFB" },
      { name: "CSS", color: "#254BDD" },
    ],
    image_bg: "#DAA6AC",
    imageSrc: pinterest_clone,
    github_url: "https://github.com/SowreRajan-dev/pintrest_clone",
    description:
      "Pinterest 2.0 clone is a simple frontend application that showcases the images in a nice grid manner. I have learned them from youtube. There are a few enhancements needed to be done by adding features like uploading images, Commenting, and adding authentication functionalities to make it a full stack application. ",
    videoSrc: pinterest_clone_video,
    text_color: "#00008B",
  },
  {
    id: 6,
    project_name: "Hotstar Clone",
    tech_stack: [
      { name: "React", color: "#61DAFB" },
      { name: "CSS", color: "#254BDD" },
    ],
    image_bg: "#181B27",
    imageSrc: hotstar_clone,
    github_url: "https://github.com/SowreRajan-dev/Hotstar-Clone",
    description:
      "Hotstar clone is my first React application , i made as a clone.I enjoyed by using functional components and hooks.It was a great experienceto run the React application.",
    videoSrc: hotstar_clone_video,
    text_color: "#ffffff",
  },
  {
    id: 7,
    project_name: "Koruki",
    tech_stack: [
      { name: "HTML", color: "#DD4B25" },
      { name: "CSS", color: "#254BDD" },
    ],
    image_bg: "#79a6d3",
    imageSrc: koruki,
    github_url: "https://github.com/SowreRajan-dev/Koruki-website",
    description:
      "Koruki is the HTML based package documentation portfolio which is made for my dummy frontend learning about html and css.I learned from youtube tutorial and enjoyed the flow of creating the single page frontend application",
    videoSrc: koruki_video,
    text_color: "#000000",
  },
  {
    id: 8,
    project_name: "Covid Tracker",
    tech_stack: [
      { name: "HTML", color: "#DD4B25" },
      { name: "CSS", color: "#254BDD" },
      { name: "JavaScript", color: "#F7DF1E" },
    ],
    image_bg: "#a243da",
    imageSrc: covidstatus,
    github_url: "https://github.com/SowreRajan-dev/Koruki-website",
    description:
      'Covid tracker is my first api based web page in which i had made my first request and response to external API named "covid19api" and "ip-api.com".This project given me a strong belief to make api request between external providers and reading documentation effectively! ',
    videoSrc: "covidstatus_video",
    text_color: "#ffffff",
  },
  {
    id: 9,
    project_name: "Educhat",
    tech_stack: [
      { name: "HTML", color: "#DD4B25" },
      { name: "CSS", color: "#254BDD" },
      { name: "JavaScript", color: "#F7DF1E" },
    ],
    image_bg: "#0E68B2",
    imageSrc: educhat,
    github_url: "https://github.com/SowreRajan-dev/educhat2",
    description:
      "EDUCHAT is our first live-in-lab project which is based on Students and Professionals.It is a frontend which is a chat application helps to learner to gain knowledge from the experts.",
    videoSrc: educhat_video,
    text_color: "#ffffff",
  },
];
