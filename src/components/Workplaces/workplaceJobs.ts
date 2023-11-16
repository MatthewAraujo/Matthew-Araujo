export const jobs = [
  {
    id: 1,
    title: "Full Stack Engineer",
    job: "internit",
    year: "2022 - Present",
    src: "/internit.jpeg",
    href: "/work/internit",
    description:
      "Responsible for the development of various websites and features using JavaScript, Next.js, and PHP. Demonstrated skills in both back-end (PHP) and front-end (Next.js) development. Worked in environments for code testing and version control with Git (Bitbucket). Actively participated in daily stand-ups and maintained codes in various websites and systems.",
    stacks: [
      "wordpress",
      "php",
      "nextjs",
      "react",
      "javascript",
      "html",
      "css",
      "Git",
      "Bitbucket",
      "Linux",
    ],
    projects: [
      {
        id: 1,
        title: "Cool Travel",
        description: {
          first:
            "Cool Travel is an exciting project crafted with headless WordPress, incorporating GraphQL custom fields and powered by Next.js on the frontend. Notably, dynamic routes have been implemented to provide a personalized user experience. ",
          second:
            "Additionally, I have integrated forms with validation to ensure data accuracy and security, enhancing the interactivity and usability of the project. The project also features a custom CMS, allowing the client to easily manage content and update the website.",
        },
      },
      {
        id: 2,
        title: "Dynamic Warranty System Documentation",
        description: {
          first:
            "The Apartment and Common Areas Warranty System streamlines the warranty management process for both tenants and sindicos, providing a user-friendly interface for warranty selection and a convenient email communication feature. ",
          second:
            "This ensures effective communication between clients and property developers or managers, contributing to a transparent and efficient warranty management system for apartments and common areas.",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Back End Engineer",
    job: "iuul",
    year: "2023 - Present",
    src: "/iuul.jpeg",
    href: "/work/iuul",
    description:
      "IUUL provides an all-encompassing residency program focused on systems development, designed to equip students with the practical skills and knowledge needed to address real-world challenges in the dynamic technology market. Through this program, participants gain hands-on experience, honing their abilities to navigate and solve complex issues, ultimately preparing them for success in the rapidly evolving tech industry.",
    stacks: [
      "node.js",
      "express",
      "puppeteer",
      "sequelize",
      "javascript",
      "postgress",
      "jest",
      "Git",
      "Azure",
    ],
    projects: [
      {
        id: 1,
        title: "Bicycle Rental System",
        description: {
          first:
            "The Bicycle Rental System is a Node.js-based project that leverages technologies such as Express, Sequelize, Docker, and adheres to SOLID principles. Inspired by Itaú's bicycle rental service, this system provides a web-based platform for users to seamlessly rent and return bicycles. JavaScript is employed for its versatility, and Docker ensures consistent deployment across various environments. ",
          second:
            "The project integrates SOLID principles, prioritizing a modular and maintainable codebase through design patterns and best practices. The system allows users to browse available bicycles, rent them with specified durations, and securely return them. User authentication, transaction logging, and a user-centric design draw inspiration from Itaú's approach, aiming to deliver a familiar and efficient bicycle rental experience.",
        },
      },
      {
        id: 2,
        title: "Web Scraping Product Data from E-commerce Websites",
        description: {
          first:
            "This project employs Puppeteer, Express, and Sequelize to perform web scraping of product information from various online stores. Puppeteer, a headless browser automation tool, facilitates the extraction of product details such as name, price, and availability. The server-side functionality is implemented using Express.js, providing a robust framework for handling HTTP requests and responses, while Sequelize serves as the ORM for seamless interaction with the database. ",
          second:
            "The application's workflow involves Puppeteer scraping product data, which is then stored in a structured manner in the database using Sequelize. Express defines routes to handle operations such as triggering new web scraping sessions, updating the database, and fetching product data. Additionally, cron jobs are employed for scheduled updates, ensuring the regular and automated refresh of product information in the database. This integration of technologies creates a comprehensive system for efficient and periodic web scraping of product data, providing an organized and up-to-date repository.",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Scrum Master - Science Project Research",
    job: "smartCare Iot",
    year: "2021 - Present",
    src: "/smartcare.png",
    href: "/work/smartCare Iot",
    description:
      "The role of the Scrum Master is pivotal in scientific projects with international publications, utilizing React and the Scrum methodology. In this specific project, I contribute to the development of stress detection sensors for elderly individuals with Alzheimer's, integrating them into residential environments to create a calmer space. My leadership in applying agile practices accelerates development, ensuring quality and fostering a collaborative and innovative environment in advancing scientific and technological research.",
    stacks: [
      "React",
      "Arduino",
      "Scrum",
      "Notion",
      "Trello",
      "Python",
      "JavaScript",
      "C++",
      "Git",
    ],
    projects: [
      {
        id: 1,
        title: "Arduino Stress Detection Sensor",
        description: {
          first:
            "The Arduino Stress Detection Sensor is a project that aims to detect stress levels in elderly individuals with Alzheimer's. The sensor is integrated into the environment, monitoring the individual's stress levels and providing a calming environment when necessary. The sensor is equipped with a microphone, temperature sensor, and light sensor, which are used to detect stress levels. ",
        },
      },
      {
        id: 2,
        title: "React Stress Detection Sensor Dashboard",
        description: {
          first:
            "The React Stress Detection Sensor Dashboard is a web-based platform that displays the stress levels detected by the Arduino Stress Detection Sensor. The dashboard is designed to be user-friendly, providing a simple and intuitive interface for users to monitor stress levels. The dashboard also features a notification system, alerting users when stress levels are detected. ",
          second:
            "Developed using React, the dashboard is a responsive and dynamic platform that provides a seamless user experience. The dashboard is also integrated with the Arduino Stress Detection Sensor, allowing users to monitor stress levels in real-time.",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Front End Engineer",
    job: "Animo Consultoria",
    year: "2021 - 2022",
    src: "/animo.jpeg",
    href: "/work/Animo Consultoria",
    description:
      "Intern, Junior Company La Salle Niterói. In my first unpaid internship, I worked with HTML, CSS, and JavaScript. It was my initial exposure to the business world, and I had the opportunity to actively contribute to the development of the company's main website.",
    stacks: ["html", "css", "javascript", "git"],
    projects: [
      {
        id: 1,
        title: "Ânimo Consultoria WebSite",
        description: {
          first:
            "I created a website for the company Animo using HTML, CSS, and JavaScript. Through this initiative, I was able to develop a dynamic and interactive online platform, applying advanced design techniques (CSS) and dynamic functionalities (JavaScript). The website offers an engaging experience, combining visual aesthetics with interactivity, contributing to strengthening the company's online presence and providing users with an intuitive and appealing navigation experience.",
        },
      },
    ],
  },
];
