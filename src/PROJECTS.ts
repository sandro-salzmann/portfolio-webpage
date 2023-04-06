import { ProjectProps } from "./components/project";

export const PROJECTS: ProjectProps[] = [
  {
    title: "Mindy",
    description: `Mindy is a web-based mindmapping tool I'm currently working on. It works on
    mobile and desktop and the current version gets CICD'd into a github page, so feel free to
    try it out!`,
    demoUrl: "https://sandro-salzmann.github.io/mindy-app-testing/",
    chips: [
      {
        label: "React",
        icon: "pi ri-reactjs-line",
      },
      {
        label: "Firebase Auth",
        icon: "pi ri-lock-line",
      },
      {
        label: "PrimeReact UI",
        icon: "pi pi-prime",
      },
    ],
    imageUrls: [
      "assets/projects/mindy-1.png",
      "assets/projects/mindy-2.png",
      "assets/projects/mindy-3.png",
      "assets/projects/mindy-4.png",
      "assets/projects/mindy-5.png",
    ],
  },
  {
    title: "Simple AMQP Client",
    description: `A simple amqp client that provides an interface on a messaging-pattern abstraction level.`,
    repositoryUrl: "https://github.com/sandro-salzmann/simple-amqp-client",
    imageUrls: ["assets/projects/simple-amqp-client-1.png"],
    chips: [
      {
        label: "Node.js",
        icon: "pi ri-server-line",
      },
      {
        label: "AMQP",
        icon: "pi ri-bus-2-fill",
      },
      {
        label: "Messaging",
        icon: "pi ri-record-mail-line",
      },
    ],
  },
  {
    title: "Service Template",
    description: `A template for a Node.js (Micro)-Service with configured 
    HTTP endpoints, Bus and DB access, logging and tests. Follows clean architecture to
    make services maintainable and extensible.`,
    imageUrls: ["assets/projects/service-template-1.png"],
    repositoryUrl: "https://github.com/sandro-salzmann/service-template",
    chips: [
      {
        label: "Node.js",
        icon: "pi ri-server-line",
      },
      {
        label: "AMQP Communication",
        icon: "pi ri-bus-2-fill",
      },
      {
        label: "Clean Architecture",
        icon: "pi ri-bubble-chart-fill",
      },
      {
        label: "HTTP Endpoints",
        icon: "pi ri-pages-line",
      },
      {
        label: "MongoDB",
        icon: "pi ri-database-2-line",
      },
    ],
  },
  {
    title: "Technology Radar",
    description: `A fullstack project I've done for a school course. It's a technology radar.`,
    repositoryUrl:
      "https://github.com/sandro-salzmann/hslu-weblab-technology-radar",
    imageUrls: [
      "assets/projects/hslu-weblab-technology-radar-1.png",
      "assets/projects/hslu-weblab-technology-radar-2.png",
      "assets/projects/hslu-weblab-technology-radar-3.png",
      "assets/projects/hslu-weblab-technology-radar-4.png",
      "assets/projects/hslu-weblab-technology-radar-5.png",
      "assets/projects/hslu-weblab-technology-radar-6.png",
      "assets/projects/hslu-weblab-technology-radar-7.png",
    ],
    chips: [
      {
        label: "React",
        icon: "pi ri-reactjs-line",
      },
      {
        label: "Auth0",
        icon: "pi ri-lock-line",
      },
      {
        label: "Microservices",
        icon: "pi ri-microscope-line",
      },
      {
        label: "PostgreSQL",
        icon: "pi ri-database-2-line",
      },
      {
        label: "Semantic-UI",
        icon: "pi ri-pencil-ruler-line",
      },
      {
        label: "Node.js",
        icon: "pi ri-server-line",
      },
      {
        label: "Express.js",
        icon: "pi ri-pages-line",
      },
    ],
  },
  {
    title: "Daily Clean Code",
    description: `A website where you can setup notifications to get clean code
    tips for selected programming languages or practices.`,
    repositoryUrl:
      "https://github.com/sandro-salzmann/daily-clean-code-dev-tips-frontend",
    imageUrls: [
      "assets/projects/daily-clean-code-dev-tips-frontend-1.png",
      "assets/projects/daily-clean-code-dev-tips-frontend-2.png",
      "assets/projects/daily-clean-code-dev-tips-frontend-3.png",
      "assets/projects/daily-clean-code-dev-tips-frontend-4.png",
      "assets/projects/daily-clean-code-dev-tips-frontend-5.png",
      "assets/projects/daily-clean-code-dev-tips-frontend-6.png",
      "assets/projects/daily-clean-code-dev-tips-frontend-7.png",
      "assets/projects/daily-clean-code-dev-tips-frontend-8.png",
    ],
    chips: [
      {
        label: "React",
        icon: "pi ri-reactjs-line",
      },
      {
        label: "Semantic-UI",
        icon: "pi ri-pencil-ruler-line",
      },
      {
        label: "PWA",
        icon: "pi ri-install-line",
      },
    ],
  },
  {
    title: "Jewel Chain",
    description: `Jewel Chain was a school project where I've built the frontend. The backend
    is written completely on blockchain smart contracts and stores supply chain infos about
    jewels.`,
    imageUrls: [
      "assets/projects/jewel-chain-2.png",
      "assets/projects/jewel-chain-1.png",
    ],
    repositoryUrl: "https://github.com/dave1b/JewelChain",
    chips: [
      {
        label: "React",
        icon: "pi ri-reactjs-line",
      },
      {
        label: "Metamask Auth",
        icon: "pi ri-lock-line",
      },
      {
        label: "Web3 ETH API",
        icon: "pi ri-cursor-line",
      },
    ],
  },
];
