import './portfolio.css'; 
import PortfolioCard from './PortfolioCard'; 
import { IoLogoGithub, IoLogoTwitter, IoLogoReact } from 'react-icons/io5'; 
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';

export const portfolioData = [

  {
    id: "derma",
    title: "Derma Skin App",
    githubLink:"https://github.com/AkelaDumindu/Derma_Skin_App.git",
    typeName: "Group Project | App",
    demoVideo:"../video/derma_demo.mp4",
    screenshots: ['../images/portfolio/derma/derma_1.jpeg', '../images/portfolio/derma/derma_2.jpeg', '../images/portfolio/derma/derma_3.jpeg', '../images/portfolio/derma/derma_4.jpeg', '../images/portfolio/derma/derma_5.jpeg', '../images/portfolio/derma/derma_6.jpeg', '../images/portfolio/derma/derma_7.jpeg', '../images/portfolio/derma/derma_8.jpeg', '../images/portfolio/derma/derma_9.jpeg', '../images/portfolio/derma/derma_10.jpeg', '../images/portfolio/derma/derma_11.jpeg', '../images/portfolio/derma/derma_12.jpeg', '../images/portfolio/derma/derma_13.jpeg', '../images/portfolio/derma/derma_14.jpeg', '../images/portfolio/derma/derma_15.jpeg', '../images/portfolio/derma/derma_16.jpeg', '../images/portfolio/derma/derma_17.jpeg', '../images/portfolio/derma/derma_18.jpeg', '../images/portfolio/derma/derma_19.jpeg', '../images/portfolio/derma/derma_21.jpeg', '../images/portfolio/derma/derma_22.jpeg', '../images/portfolio/derma/derma_23.jpeg', '../images/portfolio/derma/derma_24.jpeg', '../images/portfolio/derma/derma_25.jpeg', '../images/portfolio/derma/derma_26.jpeg', '../images/portfolio/derma/derma_27.jpeg'],
    category: "app",
    url: "../images/portfolio/derma_mock.png",
    des: "Derma is a mobile app using AI and APIs to assess skin health, predict conditions, and offer personalized care solutions.",
    techStack: [
      { name: 'Flutter', logo: '../images/skillImages/flutter.png' },
      { name: 'Firebase', logo: '../images/skillImages/firebase.png' },
      { name: 'Python', logo: '../images/skillImages/python.png' }],
    teamMembers: ['Mevin Perera', 'Kushan Andarawewa', 'Ishani Samaraweera'],
    role: 'Full Stack Development',
    paragraph_1:"Derma is a mobile application developed as part of the SE5104 Mini Project course at Sabaragamuwa University. It provides users with tools to assess skin health, identify skin conditions, and access preventive care advice. By integrating advanced technologies like machine learning and API integrations, Derma delivers personalized insights and practical solutions for managing skin health effectively.",
    paragraph_2:"Skin diseases affect one in three individuals globally, yet many hesitate to seek medical care due to stigma, time constraints, or unawareness. Derma bridges this gap by offering a private and accessible platform for users. Key features include secure user accounts, skin type detection, disease prediction through photo uploads, dietary recommendations, and real-time UV exposure alerts. Users can also find nearby clinics for professional consultations and customize their profiles for a tailored experience.",
    paragraph_3:"Derma is built with Flutter for the frontend, Python for backend services, Firebase for data management, and machine learning tools like TensorFlow and OpenCV. Additionally, the UV Exposure API ensures real-time environmental updates. By combining innovation with practicality, Derma not only simplifies skin health management but also promotes proactive care, ensuring healthier outcomes for its users.",
    duration: '4 months',
  },

  {
    id: "sujcs-journal",
    title: "SUJCS Journal",
    githubLink:"https://github.com/AkelaDumindu/SUJCS_Web_Project.git",
    typeName: "Group Project | Web Site",
    demoVideo:"../video/sujcs_project_demo.mp4",
    screenshots: ['../images/portfolio/sujcs/sujcs_ss1.jpeg', '../images/portfolio/sujcs/sujcs_ss2.jpeg', '../images/portfolio/sujcs/sujcs_ss3.jpeg', '../images/portfolio/sujcs/sujcs_ss4.jpeg', '../images/portfolio/sujcs/sujcs_ss5.jpeg'],
    category: "web",
    url: "../images/portfolio/sujcs_mock.png",
    des: "Revamping our university's journal website using PHP, MySQL, and SASS to enhance usability, functionality, and academic accessibility.",
    techStack: [
      { name: 'React', logo: '../images/skillImages/php.png' },
      { name: 'Node.js', logo: '../images/skillImages/js.png' },
      { name: 'MySql', logo: '../images/skillImages/mysql.png' },
      { name: 'SASS', logo: '../images/skillImages/sass.png' },
    ],
    teamMembers: ['Tharushi Wijethunga', 'Tharindu Lakamal', 'Kalpani Ariyawansha', 'Buddhini Yallarawewa'],
    role: 'Full Stack Development',
    paragraph_1:"Our team is undertaking the modernization of our university's journal website as a project for the web development course. The primary goal is to create an intuitive and user-friendly platform that improves the accessibility and presentation of academic journals. The revamped website will feature an updated design, seamless navigation, and enhanced functionality to better meet the needs of students, faculty, and researchers.",
    paragraph_2:"As the back-end developer, I focus on ensuring the robustness and efficiency of server-side operations. This involves designing scalable and secure database systems using MySQL, implementing dynamic content rendering through PHP, and integrating back-end logic with the front-end components. My work also includes optimizing the performance of API endpoints and managing user authentication to ensure data security and seamless operation.",
    paragraph_3:"The project employs a stack of modern web technologies, including PHP for server-side logic, MySQL for database management, and SASS for advanced styling. JavaScript is used to enable dynamic functionality, while HTML serves as the backbone of the front-end structure. Our collaborative effort aims to produce a polished, responsive, and accessible website that reflects the university's commitment to academic excellence and digital innovation.",
    duration: '3 months',
  },

  {
    id: "vegesaga",
    title: "VEGESAGA Food Delivery",
    githubLink:"https://github.com/AkelaDumindu/Vegesaga_Food_delivery_application.git",
    typeName: "Group Project | Web Site",
    demoVideo:"../video/vegesaga_demo.mp4",
    screenshots: ['../images/portfolio/vegesaga/vegesaga1.png', '../images/portfolio/sujcs/vegesaga2.png', '../images/portfolio/sujcs/sujcs_ss3.jpeg', '../images/portfolio/vegesaga/vegesaga3.png', '../images/portfolio/vegesaga/vegesaga4.png', '../images/portfolio/vegesaga/vegesaga5.png', '../images/portfolio/vegesaga/vegesaga6.png', '../images/portfolio/vegesaga/vegesaga7.png', '../images/portfolio/vegesaga/vegesaga8.png', '../images/portfolio/vegesaga/vegesaga9.png'],
    category: "web",
    url: "../images/portfolio/vegesaga_mock.png",
    des: "Developed a TypeScript-based MERN food delivery platform with robust testing, secure authentication, real-time updates, and user-friendly management features.",
    techStack: [
      { name: 'React', logo: '../images/skillImages/react.png' },
      { name: 'Node.js', logo: '../images/skillImages/ts.png' },
      { name: 'CSS', logo: '../images/skillImages/mongodb.png' },
      { name: 'CSS', logo: '../images/skillImages/nodeJs.png' },
    ],  
    teamMembers: ['Devini Munasinghe', 'Piyumi Wanigasekara', 'Chamudi Senanayake', 'Buddhini Yallarawewa'],
    role: 'Full Stack Development',
    paragraph_1:"I developed a food delivery platform leveraging TypeScript for both frontend and backend, utilizing the MERN stack (MongoDB, Express.js, React, Node.js). The platform focuses on software testing methodologies, ensuring reliability, security, and performance. The frontend, built with React and styled using CSS modules and Twin.macro, delivers a smooth and responsive user experience, while Axios handles real-time API communication for seamless data management. The backend, created with Node.js and Express.js, integrates MongoDB for a scalable NoSQL database to manage user data, products, and orders, with secure authentication powered by JWT.",
    paragraph_2:"A key aspect of the project is its emphasis on testing, employing comprehensive methodologies across the stack. I implemented unit, integration, and end-to-end tests using tools like Vitest, React Testing Library, and Jest. Mocked API responses and detailed testing of API routes, database operations, and middleware ensure the platform's reliability and robustness. The testing approach guarantees a bug-free experience, validating user interactions, form submissions, and secure data handling.",
    paragraph_3:"The platform features user-friendly order management, secure login and registration, and real-time product updates. Admins can add, edit, and delete products with immediate changes reflected on the site. This project not only demonstrates the practical implementation of a modern food delivery system but also underscores the significance of rigorous testing in delivering a seamless user experience.",
    duration: '3 months'
  },

  
  {
    id: "learn_and_earn",
    title: "Learn & Earn",
    githubLink:"https://github.com/AkelaDumindu/Learn-and-Earn.git",
    typeName: "Group Project | Web Site",
    demoVideo:"../video/learnearn_demo.mp4",
    screenshots: ['../images/portfolio/learn&ern/learnearn1.png', '../images/portfolio/learn&ern/learnearn2.png', '../images/portfolio/learn&ern/learnearn3.png', '../images/portfolio/learn&ern/learnearn4.png', '../images/portfolio/learn&ern/learnearn5.png', '../images/portfolio/learn&ern/learnearn6.png'],
    category: "web",
    url: "../images/portfolio/learn_earn_mock.png",
    des: "Learn&Earn integrates education and e-commerce, offering products and learning opportunities through a robust PHP, MySQL, HTML, and JavaScript platform.",
    techStack: [
      { name: 'React', logo: '../images/skillImages/php.png' },
      { name: 'Node.js', logo: '../images/skillImages/mysql.png' },
      { name: 'CSS', logo: '../images/skillImages/css.png' },
      { name: 'JS', logo: '../images/skillImages/js.png' },
    
    ],
    teamMembers: ['Tharindu Lakamal', 'Hamitha Apsara'],
    role: 'Full Stack Development',
    paragraph_1:"Learn&Earn is a dynamic platform that integrates education and e-commerce into a seamless, enriching experience. It transcends traditional boundaries by offering not just products but valuable learning opportunities, ensuring users benefit holistically.",
    paragraph_2:"The platform's user-friendly front-end, developed with HTML, CSS, and JavaScript, captivates and engages users, while its PHP-powered back-end ensures robust functionality. MySQL handles database management, delivering a reliable and smooth experience. Learn&Earn showcases a diverse product catalog while serving as a hub for personal growth and achievement.",
    paragraph_3:"Explore and contribute to this innovative project on GitHub. Together, let's shape a transformative e-commerce and educational experience that meets current needs and anticipates the future.",
    duration: '4 months',
  },

  {
    id: "Smart_tution_web",
    title: "Smart Tution Web",
    typeName: "Group Project | Web Site",
    demoVideo:"../video/campinga-demo.mp4",
    screenshots: ['../images/portfolio/sujcs/sujcs_ss1.jpeg', '../images/portfolio/sujcs/sujcs_ss2.jpeg', '../images/portfolio/sujcs/sujcs_ss3.jpeg', '../images/portfolio/sujcs/sujcs_ss4.jpeg', '../images/portfolio/sujcs/sujcs_ss5.jpeg'],
    category: "web",
    url: "../images/portfolio/smart_tution_mock.jpg",
    des: "A website is a set of web pages grouped together under one domain.",
    techStack: [
      { name: 'React', logo: '../images/skillImages/react.png' },
      { name: 'Node.js', logo: '../images/skillImages/react.png' },
      { name: 'CSS', logo: '../images/skillImages/react.png' }],
      teamMembers: ['Mevin Perera', 'Kushan Andarawewa', 'Ishani Samaraweera', 'Shabeeb Ishque'],
    role: 'Full Stack Development',
    paragraph_1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    paragraph_2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    paragraph_3:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    duration: '3 months',
  },


  {
    id: "Smart_tution_app",
    title: "Smart Tution App",
    typeName: "Group Project | App",
    demoVideo:"../video/campinga-demo.mp4",
    screenshots: ['../images/portfolio/sujcs/sujcs_ss1.jpeg', '../images/portfolio/sujcs/sujcs_ss2.jpeg', '../images/portfolio/sujcs/sujcs_ss3.jpeg', '../images/portfolio/sujcs/sujcs_ss4.jpeg', '../images/portfolio/sujcs/sujcs_ss5.jpeg'],
    category: "app",
    url: "../images/portfolio/smart_tution_mock.jpg",
    des: "A website is a set of web pages grouped together under one domain.",
    techStack: [
      { name: 'React', logo: '../images/skillImages/react.png' },
      { name: 'Node.js', logo: '../images/skillImages/react.png' },
      { name: 'CSS', logo: '../images/skillImages/react.png' }],
      teamMembers: ['Mevin Perera', 'Kushan Andarawewa', 'Ishani Samaraweera', 'Shabeeb Ishque'],
    role: 'Full Stack Development',
    paragraph_1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    paragraph_2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    paragraph_3:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    duration: '3 months',
  },

  {
    id: "campinga",
    title: "Campinga",
    typeName: "Individual Project | App",
    demoVideo:"../video/campinga-demo.mp4",
    screenshots: ['../images/portfolio/campinga/campinga1.png', '../images/portfolio/campinga/campinga2.png', '../images/portfolio/campinga/campinga3.png', '../images/portfolio/campinga/campinga4.png', '../images/portfolio/campinga/campinga5.png', '../images/portfolio/campinga/campinga6.png', '../images/portfolio/campinga/campinga7.png', '../images/portfolio/campinga/campinga8.png', '../images/portfolio/campinga/campinga9.png', '../images/portfolio/campinga/campinga10.png', '../images/portfolio/campinga/campinga11.png', , '../images/portfolio/campinga/campinga12.png'],
    category: "web",
    url: "../images/portfolio/campinga.png",
    des: "Campinga is a web application connecting camping enthusiasts and sellers, offering item listings, live updates, and seamless transactions.",
    techStack: [
      { name: 'PHP', logo: '../images/skillImages/php.png' },
      { name: 'HTML', logo: '../images/skillImages/html.png' },
      { name: 'MySql', logo: '../images/skillImages/mysql.png' },
      { name: 'CSS', logo: '../images/skillImages/css.png' }
    ],
    teamMembers: ['Mevin Perera', 'Kushan Andarawewa', 'Ishani Samaraweera'],
    paragraph_1:"Campinga is a comprehensive Camping Item Management System designed to cater to the needs of camping enthusiasts and sellers. This web application bridges the gap between buyers and sellers by offering an organized platform to explore and purchase camping essentials. From tents and sleeping bags to backpacks and cooking equipment, Campinga empowers sellers to showcase their products effectively while providing buyers with a seamless shopping experience.",
    paragraph_2:"The system is packed with user-centric features such as secure user registration and authentication, ensuring a personalized experience for sellers and buyers. Sellers can post detailed listings of their items, complete with images, descriptions, and pricing. Buyers benefit from advanced search capabilities, allowing them to filter and sort camping items based on preferences like type, price, and brand. The integrated chat feature promotes real-time communication between users and sellers for inquiries and negotiations, while live location information and temperature updates assist campers in planning safe and enjoyable trips.",
    paragraph_3:"Campinga leverages HTML, CSS, and JavaScript for an intuitive and responsive front-end, while PHP and JavaScript power its robust backend. A MySQL database ensures reliable data management for user accounts, item listings, and transactions. The platform combines e-commerce functionality with essential outdoor planning tools, creating a versatile system that enhances the camping experience for users while offering sellers a streamlined marketplace for their products.",
    role: 'Full Stack Development',
    duration: '3 months',
  },

  {
    id: "eventvibe",
    title: "EventVibe",
    githubLink:"https://github.com/AkelaDumindu/EventVibe.git",
    typeName: "Group Project | web",
    demoVideo:"../video/campinga-demo.mp4",
    screenshots: ['../images/portfolio/eventvibe/eventvibe_1.png', '../images/portfolio/eventvibe/eventvibe_2.png', '../images/portfolio/eventvibe/eventvibe_3.png', '../images/portfolio/eventvibe/eventvibe_4.png', '../images/portfolio/eventvibe/eventvibe_5.png', '../images/portfolio/eventvibe/eventvibe_6.png', '../images/portfolio/eventvibe/eventvibe_7.png', '../images/portfolio/eventvibe/eventvibe_8.png', '../images/portfolio/eventvibe/eventvibe_9.png', '../images/portfolio/eventvibe/eventvibe_10.png', '../images/portfolio/eventvibe/eventvibe_11.png', '../images/portfolio/eventvibe/eventvibe_12.png', '../images/portfolio/eventvibe/eventvibe_13.png', '../images/portfolio/eventvibe/eventvibe_14.png'],
    category: "web",
    url: "../images/portfolio/eventvibe_mock.png",
    des: "EventVibe is an online marketplace connecting event planners and clients, featuring responsive design, seamless booking, and efficient data management.",
    techStack: [
      { name: 'PHP', logo: '../images/skillImages/php.png' },
      { name: 'HTML', logo: '../images/skillImages/html.png' },
      { name: 'MySql', logo: '../images/skillImages/mysql.png' },
      { name: 'CSS', logo: '../images/skillImages/css.png' }
    ],
    teamMembers: ['Mevin Perera', 'Kushan Andarawewa', 'Ishani Samaraweera', 'Shabeeb Ishque'],
    paragraph_1:"EventVibe is a pioneering web application designed to transform the event planning process into a seamless, efficient, and collaborative experience. Developed by a team of four skilled developers, the project leverages a comprehensive technology stack, including HTML, CSS, JavaScript, and Bootstrap for the front-end design, and PHP with MySQL for robust back-end functionality and database management. The platform aspires to become a dynamic online marketplace that bridges the gap between event planners and clients, offering a streamlined approach to finding and managing event services.",
    paragraph_2:"At its core, EventVibe provides a user-friendly and responsive interface that adapts to various devices, ensuring an optimal browsing experience for all users. The platform facilitates direct interaction between event planners and clients, powered by a well-structured back-end system using PHP. This dynamic connectivity simplifies the booking process while enabling event planners to showcase their expertise effectively. With MySQL ensuring secure and efficient data handling, the system guarantees reliability for user profiles, service listings, and booking management.",
    paragraph_3:"EventVibe embodies a mission to enhance the event planning experience by offering a centralized, collaborative platform for clients and service providers. Through its innovative features and intuitive design, the project envisions empowering event planners to expand their reach and enabling clients to find the perfect match for their unique event needs. This collaborative endeavor not only showcases the technical expertise of its developers but also addresses the evolving landscape of event planning in today’s digital age.",
    role: 'Full Stack Development',
    duration: '3 months',
  },
  
  {
    id: "herbacommerce",
    title: "HerbaCommerce",
    githubLink:"https://github.com/AkelaDumindu/laravel_ecommerce_project.git",
    typeName: "Individual Project | web",
    demoVideo:"../video/herbacommerce-demo.mp4",
    screenshots: ['../images/portfolio/herbacommerce/herba1.png', '../images/portfolio/herbacommerce/herba2.png', '../images/portfolio/herbacommerce/herba3.png','../images/portfolio/herbacommerce/herba4.png','../images/portfolio/herbacommerce/herba5.png','../images/portfolio/herbacommerce/herba6.png','../images/portfolio/herbacommerce/herba7.png','../images/portfolio/herbacommerce/herba8.png','../images/portfolio/herbacommerce/herba9.png',],
    category: "web",
    url: "../images/portfolio/herbacommerce_mock.png",
    des: "HerbaCommerce is an online store specializing in plants, offering tea, vegetables, fruits, and flowers, with unique tea categories and discounts.",
    techStack: [
      { name: 'Laravel', logo: '../images/skillImages/laravel.png' },
      { name: 'MySql', logo: '../images/skillImages/mysql.png' },
      { name: 'Tailwind', logo: '../images/skillImages/tailwind.png' }
    ],
    teamMembers: [''],
    paragraph_1:"HerbaCommerce is a unique e-commerce platform dedicated to selling a wide variety of plants, including tea plants, rubber plants, vegetables, fruits, and ornamental home plants such as flowers. With a special focus on tea plants, the platform categorizes tea into diverse options like 20/25, 20/23, and 20/26, providing customers with a rich assortment to choose from. As an individual project, HerbaCommerce showcases a seamless integration of advanced technologies to deliver an exceptional user experience while catering to plant lovers and gardeners alike.",
    paragraph_2:"Developed using Laravel 11, Livewire 3, MySQL, and Tailwind CSS, HerbaCommerce is designed to be both robust and user-friendly. The platform features an admin panel that allows administrators to manually manage plant categories and products, ensuring a well-organized and streamlined database. On the user side, customers can browse all available plants along with their pricing. Registered users can log in to add products to their cart and make purchases. Additionally, the platform offers exclusive discounts and coupons for registered users, enhancing customer satisfaction and encouraging repeat visits.",
    paragraph_3:"HerbaCommerce emphasizes simplicity and accessibility for its users. The application ensures smooth navigation and a visually appealing design, powered by Tailwind CSS. Its robust backend, supported by MySQL, provides a secure and scalable foundation for managing large volumes of products and transactions. By focusing on a niche market and offering a comprehensive catalog of plants, HerbaCommerce bridges the gap between plant sellers and buyers, making it a versatile and innovative solution for the growing demand in the e-commerce space.",
    role: '',
    duration: '3 months',
  },


  {
    id: "chatterPlannet",
    title: "ChatterPlannet",
    githubLink:"https://github.com/AkelaDumindu/chatter_planet_application.git",
    typeName: "Individual Project | App",
    demoVideo:"",
    // screenshots: ['../images/portfolio/eventvibe/eventvibe_1.png', '../images/portfolio/eventvibe/eventvibe_2.png', '../images/portfolio/eventvibe/eventvibe_3.png', '../images/portfolio/eventvibe/eventvibe_4.png', '../images/portfolio/eventvibe/eventvibe_5.png', '../images/portfolio/eventvibe/eventvibe_6.png', '../images/portfolio/eventvibe/eventvibe_7.png', '../images/portfolio/eventvibe/eventvibe_8.png', '../images/portfolio/eventvibe/eventvibe_9.png', '../images/portfolio/eventvibe/eventvibe_10.png', '../images/portfolio/eventvibe/eventvibe_11.png', '../images/portfolio/eventvibe/eventvibe_12.png', '../images/portfolio/eventvibe/eventvibe_13.png', '../images/portfolio/eventvibe/eventvibe_14.png'],
    category: "app",
    url: "../images/portfolio/chatterplannet_mock.png",
    des: "ChatterPlanet is a Flutter-based social media app with Google Authentication, enabling users to share posts, follow others, and connect seamlessly.",
    techStack: [
      { name: 'Flutter', logo: '../images/skillImages/flutter.png' },
      { name: 'Firebase', logo: '../images/skillImages/firebase.png' },
      // { name: 'MySql', logo: '../images/skillImages/mysql.png' },
      // { name: 'CSS', logo: '../images/skillImages/css.png' }
    ],
    // teamMembers: ['Mevin Perera', 'Kushan Andarawewa', 'Ishani Samaraweera', 'Shabeeb Ishque'],
    paragraph_1:"ChatterPlanet is an innovative social media application inspired by platforms like Instagram. Designed for seamless user engagement, the app enables individuals to connect, share, and interact with a global community. Users can effortlessly sign up and log in using their Google accounts, thanks to the integration of Google Authentication. This feature ensures a secure, efficient, and user-friendly onboarding experience.",
    paragraph_2:"The app’s primary functionality revolves around social connectivity. Users can follow others to view their posts, images, and updates directly on their feed. Similarly, their followers can engage with their content, fostering a dynamic and interactive social environment. With real-time updates and smooth navigation, ChatterPlanet provides an immersive experience that keeps users connected.",
    paragraph_3:"ChatterPlanet leverages the power of Flutter for cross-platform development, ensuring a responsive and visually appealing interface. Firebase serves as the robust backend, managing user authentication, data storage, and real-time database interactions. Advanced state management and efficient routing techniques are implemented to enhance application performance, ensuring a seamless and engaging user experience.",
    role: 'Full Stack Development',
    duration: '3 months',
  },


  {
    id: "uniNoteMaster",
    title: "UniNoteMaster",
    githubLink:"https://github.com/AkelaDumindu/flutter_app4_UniNoteMaster.git",
    typeName: "Individual Project | App",
    demoVideo:"",
    screenshots: ['../images/portfolio/uninotemaster/unin1.png', '../images/portfolio/uninotemaster/unin2.png', '../images/portfolio/uninotemaster/unin3.png'],
    category: "app",
    url: "../images/portfolio/uninotemaster_mock.png",
    des: "UniNoteMaster is a Flutter app enabling students to manage assignments, tasks, and notes by semester and subject with progress tracking.",
    techStack: [
      { name: 'Flutter', logo: '../images/skillImages/flutter.png' },
      // { name: 'Firebase', logo: '../images/skillImages/firebase.png' },
      // { name: 'MySql', logo: '../images/skillImages/mysql.png' },
      // { name: 'CSS', logo: '../images/skillImages/css.png' }
    ],
    // teamMembers: ['Mevin Perera', 'Kushan Andarawewa', 'Ishani Samaraweera', 'Shabeeb Ishque'],
    paragraph_1:"UniNoteMaster is a streamlined Flutter-based application designed to help students effectively manage their academic responsibilities. With a focus on organization and usability, the app empowers students to track assignments, tasks, and notes by aligning them with their specific semesters and subjects. Its intuitive interface ensures that users can effortlessly access and update their academic information.",
    paragraph_2:"The app allows students to create and organize notes based on their courses and subjects, ensuring quick retrieval and systematic arrangement. Users can also track their academic progress, with completed tasks visually represented using a progress bar for an easy understanding of their achievements. UniNoteMaster is built with efficient Flutter routing to ensure smooth navigation, offering a seamless user experience.",
    paragraph_3:"UniNoteMaster leverages the power of Flutter for a robust, cross-platform interface and Hive as a lightweight local database for offline data storage. This combination ensures both high performance and flexibility, making UniNoteMaster an indispensable tool for students aiming to optimize their academic journey.",
    role: 'Full Stack Development',
    duration: '3 months',
  },

  {
    id: "react_practice1",
    title: "Small POS System",
    githubLink: "https://github.com/AkelaDumindu/React_Simple_POS_System.git",
    typeName: "Individual Project | Practice",
    demoVideo: "",
    // screenshots: ['../images/portfolio/eventvibe/eventvibe_1.png', '../images/portfolio/eventvibe/eventvibe_2.png', '../images/portfolio/eventvibe/eventvibe_3.png', '../images/portfolio/eventvibe/eventvibe_4.png', '../images/portfolio/eventvibe/eventvibe_5.png', '../images/portfolio/eventvibe/eventvibe_6.png', '../images/portfolio/eventvibe/eventvibe_7.png', '../images/portfolio/eventvibe/eventvibe_8.png', '../images/portfolio/eventvibe/eventvibe_9.png', '../images/portfolio/eventvibe/eventvibe_10.png', '../images/portfolio/eventvibe/eventvibe_11.png', '../images/portfolio/eventvibe/eventvibe_12.png', '../images/portfolio/eventvibe/eventvibe_13.png', '../images/portfolio/eventvibe/eventvibe_14.png'],
    category: "practice",
    url: "../images/portfolio/flutterstatemanagement_mock.jpg",
    des: "A simple POS system built with React and Vite, featuring CRUD operations and user authentication. Check out the .",
    
    techStack: [
        { name: "React", logo: "../images/skillImages/react.png" },
        { name: "Type Script", logo: "../images/skillImages/ts.png" },
        { name: "CSS", logo: "../images/skillImages/mongodb.png" },
        { name: "Node Js", logo: "../images/skillImages/nodeJs.png" },
        { name: "Firebase", logo: "../images/skillImages/firebase.png" },
        { name: "Bootstrap", logo: "../images/skillImages/bootstrap.png" },
        { name: "Express", logo: "../images/skillImages/express.png" }
    ],
    // teamMembers: ["Mevin Perera", "Kushan Andarawewa", "Ishani Samaraweera", "Shabeeb Ishque"],
    paragraph_1: "This project is a simple Point of Sale (POS) system designed to streamline inventory and order management. It features user authentication, allowing users to securely register and log in using their email and password. Once authenticated, users can access a robust set of functionalities, including adding, updating, deleting, and viewing products. The system also tracks user orders, offering a centralized view of all orders along with graphical representations of data for better decision-making and analysis.",
    paragraph_2: "The frontend of the system is built with React using Vite, ensuring a fast and efficient user interface. For navigation, React Router enhances the user experience by providing seamless page transitions. The backend is powered by Node.js and Express, offering a reliable foundation for API development. MongoDB serves as the database, ensuring efficient and scalable data storage, while Firebase handles authentication for secure user management. Axios is used for smooth communication between the frontend and backend.",
    paragraph_3: "This POS system is not only a practical tool for managing products and orders but also a valuable learning experience. By integrating various technologies and implementing CRUD operations, the project demonstrates the power of full-stack development. It serves as a testament to the effectiveness of combining React with modern backend tools to deliver a dynamic and user-friendly application.",
    role: "",
    duration: "3 months"
}
,

{
  id: "angular_practice1",
  title: "Angular Application",
  githubLink: "https://github.com/AkelaDumindu/angular_app/tree/main/app4_firebase_CRUD",
  typeName: "Individual Project | Practice",
  demoVideo: "",
  // screenshots: ['../images/portfolio/eventvibe/eventvibe_1.png', '../images/portfolio/eventvibe/eventvibe_2.png', '../images/portfolio/eventvibe/eventvibe_3.png', '../images/portfolio/eventvibe/eventvibe_4.png', '../images/portfolio/eventvibe/eventvibe_5.png', '../images/portfolio/eventvibe/eventvibe_6.png', '../images/portfolio/eventvibe/eventvibe_7.png', '../images/portfolio/eventvibe/eventvibe_8.png', '../images/portfolio/eventvibe/eventvibe_9.png', '../images/portfolio/eventvibe/eventvibe_10.png', '../images/portfolio/eventvibe/eventvibe_11.png', '../images/portfolio/eventvibe/eventvibe_12.png', '../images/portfolio/eventvibe/eventvibe_13.png', '../images/portfolio/eventvibe/eventvibe_14.png'],
  category: "practice",
  url: "../images/portfolio/flutterstatemanagement_mock.jpg",
  des: "A simple POS system built with React and Vite, featuring CRUD operations and user authentication. Check out the .",
  
  techStack: [
      { name: "Angular", logo: "../images/skillImages/angular.png" },
      { name: "Type Script", logo: "../images/skillImages/ts.png" },
      { name: "Firebase", logo: "../images/skillImages/firebase.png" },
      { name: "Bootstrap", logo: "../images/skillImages/bootstrap.png" },
  ],
  // teamMembers: ["Mevin Perera", "Kushan Andarawewa", "Ishani Samaraweera", "Shabeeb Ishque"],
  paragraph_1: "This project is a simple Point of Sale (POS) system designed to streamline inventory and order management. It features user authentication, allowing users to securely register and log in using their email and password. Once authenticated, users can access a robust set of functionalities, including adding, updating, deleting, and viewing products. The system also tracks user orders, offering a centralized view of all orders along with graphical representations of data for better decision-making and analysis.",
  paragraph_2: "The frontend of the system is built with React using Vite, ensuring a fast and efficient user interface. For navigation, React Router enhances the user experience by providing seamless page transitions. The backend is powered by Node.js and Express, offering a reliable foundation for API development. MongoDB serves as the database, ensuring efficient and scalable data storage, while Firebase handles authentication for secure user management. Axios is used for smooth communication between the frontend and backend.",
  paragraph_3: "This POS system is not only a practical tool for managing products and orders but also a valuable learning experience. By integrating various technologies and implementing CRUD operations, the project demonstrates the power of full-stack development. It serves as a testament to the effectiveness of combining React with modern backend tools to deliver a dynamic and user-friendly application.",
  role: "",
  duration: "3 months"
},

{
  id: "spring_practice1",
  title: "Spring Boot Pos System",
  githubLink: "https://github.com/AkelaDumindu/spring_boot_pos_crud.git",
  typeName: "Individual Project | Practice",
  demoVideo: "",
  // screenshots: ['../images/portfolio/eventvibe/eventvibe_1.png', '../images/portfolio/eventvibe/eventvibe_2.png', '../images/portfolio/eventvibe/eventvibe_3.png', '../images/portfolio/eventvibe/eventvibe_4.png', '../images/portfolio/eventvibe/eventvibe_5.png', '../images/portfolio/eventvibe/eventvibe_6.png', '../images/portfolio/eventvibe/eventvibe_7.png', '../images/portfolio/eventvibe/eventvibe_8.png', '../images/portfolio/eventvibe/eventvibe_9.png', '../images/portfolio/eventvibe/eventvibe_10.png', '../images/portfolio/eventvibe/eventvibe_11.png', '../images/portfolio/eventvibe/eventvibe_12.png', '../images/portfolio/eventvibe/eventvibe_13.png', '../images/portfolio/eventvibe/eventvibe_14.png'],
  category: "practice",
  url: "../images/portfolio/flutterstatemanagement_mock.jpg",
  des: "A simple POS system built with React and Vite, featuring CRUD operations and user authentication. Check out the .",
  
  techStack: [
      { name: "Spring Boot", logo: "../images/skillImages/react.png" },
  ],
  // teamMembers: ["Mevin Perera", "Kushan Andarawewa", "Ishani Samaraweera", "Shabeeb Ishque"],
  paragraph_1: "This project is a simple Point of Sale (POS) system designed to streamline inventory and order management. It features user authentication, allowing users to securely register and log in using their email and password. Once authenticated, users can access a robust set of functionalities, including adding, updating, deleting, and viewing products. The system also tracks user orders, offering a centralized view of all orders along with graphical representations of data for better decision-making and analysis.",
  paragraph_2: "The frontend of the system is built with React using Vite, ensuring a fast and efficient user interface. For navigation, React Router enhances the user experience by providing seamless page transitions. The backend is powered by Node.js and Express, offering a reliable foundation for API development. MongoDB serves as the database, ensuring efficient and scalable data storage, while Firebase handles authentication for secure user management. Axios is used for smooth communication between the frontend and backend.",
  paragraph_3: "This POS system is not only a practical tool for managing products and orders but also a valuable learning experience. By integrating various technologies and implementing CRUD operations, the project demonstrates the power of full-stack development. It serves as a testament to the effectiveness of combining React with modern backend tools to deliver a dynamic and user-friendly application.",
  role: "",
  duration: "3 months"
}
,


  {
    id: "flutter_statemanagemnet",
    title: "Small State Management App",
    githubLink:"https://github.com/AkelaDumindu/flutter_stateManagement.git",
    typeName: "Individual Project | App",
    demoVideo:"",
    // screenshots: ['../images/portfolio/eventvibe/eventvibe_1.png', '../images/portfolio/eventvibe/eventvibe_2.png', '../images/portfolio/eventvibe/eventvibe_3.png', '../images/portfolio/eventvibe/eventvibe_4.png', '../images/portfolio/eventvibe/eventvibe_5.png', '../images/portfolio/eventvibe/eventvibe_6.png', '../images/portfolio/eventvibe/eventvibe_7.png', '../images/portfolio/eventvibe/eventvibe_8.png', '../images/portfolio/eventvibe/eventvibe_9.png', '../images/portfolio/eventvibe/eventvibe_10.png', '../images/portfolio/eventvibe/eventvibe_11.png', '../images/portfolio/eventvibe/eventvibe_12.png', '../images/portfolio/eventvibe/eventvibe_13.png', '../images/portfolio/eventvibe/eventvibe_14.png'],
    category: "practice",
    url: "../images/portfolio/flutterstatemanagement_mock.jpg",
    des: "This is the small application that focus on flutter practice to flutter state management properly",
    techStack: [
      { name: 'Flutter', logo: '../images/skillImages/flutter.png' },
      // { name: 'Firebase', logo: '../images/skillImages/.png' },
      // { name: 'MySql', logo: '../images/skillImages/mysql.png' },
      // { name: 'CSS', logo: '../images/skillImages/css.png' }
    ],
    // teamMembers: ['Mevin Perera', 'Kushan Andarawewa', 'Ishani Samaraweera', 'Shabeeb Ishque'],
    // paragraph_1:"EventVibe is a pioneering web application designed to transform the event planning process into a seamless, efficient, and collaborative experience. Developed by a team of four skilled developers, the project leverages a comprehensive technology stack, including HTML, CSS, JavaScript, and Bootstrap for the front-end design, and PHP with MySQL for robust back-end functionality and database management. The platform aspires to become a dynamic online marketplace that bridges the gap between event planners and clients, offering a streamlined approach to finding and managing event services.",
    // paragraph_2:"At its core, EventVibe provides a user-friendly and responsive interface that adapts to various devices, ensuring an optimal browsing experience for all users. The platform facilitates direct interaction between event planners and clients, powered by a well-structured back-end system using PHP. This dynamic connectivity simplifies the booking process while enabling event planners to showcase their expertise effectively. With MySQL ensuring secure and efficient data handling, the system guarantees reliability for user profiles, service listings, and booking management.",
    // paragraph_3:"EventVibe embodies a mission to enhance the event planning experience by offering a centralized, collaborative platform for clients and service providers. Through its innovative features and intuitive design, the project envisions empowering event planners to expand their reach and enabling clients to find the perfect match for their unique event needs. This collaborative endeavor not only showcases the technical expertise of its developers but also addresses the evolving landscape of event planning in today’s digital age.",
    role: 'Full Stack Development',
    duration: '3 months',
  }

];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredProjects = portfolioData.filter((project) =>
    filter === "all" ? true : project.category === filter
  );

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleSeeMore = () => {
    console.log("See More clicked"); // Debugging
    setVisibleCount(filteredProjects.length);
  };

  const handleShowLess = () => {
    console.log("Show Less clicked"); // Debugging
    setVisibleCount(4);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="portfolio-section">
          <div className="flex flex-col items-center mb-5">
            <h2 className="headline-2">Portfolio</h2>
          </div>

          {/* Filter Buttons */}
          <div className="filter-buttons flex justify-center gap-4 mb-8">
            <button
              className={`${filter === "all" ? "active" : ""}`}
              onClick={() => {
                console.log("All button clicked");
                setFilter("all");
                setVisibleCount(4);
              }}
            >
              All
            </button>
            <button
              className={`${filter === "web" ? "active" : ""}`}
              onClick={() => {
                console.log("Web button clicked");
                setFilter("web");
                setVisibleCount(4);
              }}
            >
              Web
            </button>
            <button
              className={`${filter === "app" ? "active" : ""}`}
              onClick={() => {
                console.log("App button clicked");
                setFilter("app");
                setVisibleCount(4);
              }}
            >
              App
            </button>

            <button
              className={`${filter === "practice" ? "active" : ""}`}
              onClick={() => {
                console.log("Practice button clicked");
                setFilter("practice");
                setVisibleCount(4);
              }}
            >
              Practice
            </button>
          </div>

          <div className="portfolio-outer grid md:grid-cols-1 lg:grid-cols-2 gap-12">
            {visibleProjects.map((project, index) => (
              <PortfolioCard
                key={index}
                projectId={project.id}
                title={project.title}
                typeName={project.typeName}
                githubLink={project.githubLink}
                url={project.url}
                des={project.des}
                icons={project.icons}
              />
            ))}
          </div>

          
          {filteredProjects.length > 4 && (
            <div className="see-more-container">
              {visibleCount < filteredProjects.length ? (
                <button className="see-more-btn" onClick={handleSeeMore}>
                  <div className="flex items-center gap-2">
                    <IoIosArrowDown size={25} /> Show More
                  </div>
                </button>
              ) : (
                <button className="see-more-btn" onClick={handleShowLess}>
                  <div className="flex items-center gap-2">
                    <IoIosArrowUp size={25} /> Show Less
                  </div>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
