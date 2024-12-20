import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  ingram,
  binance,
  dapper,
  wmw,
  aflds,
  funderise,
  threejs,
  vuejs,
  lyriks,
  summarizer,
  tiktok,
  ingramAward,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'work',
    title: 'Work',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: backend,
  },
  {
    title: 'Backend Developer',
    icon: creator,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Vue JS',
    icon: vuejs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Talisto LLC',
    icon: binance,
    iconBg: '#383E56',
    date: 'Apr 2024 - Current',
    points: [
      'Established the implementation of automated data refresh processes, decreasing data staleness by 50% and enabling the team to react swiftly to market shifts, leading to 25% increase in market share.',
      'Executed the deployment of unit and end-to-end tests for a robust codebase, which led to 50% decrease in post-release.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Dapper Labs',
    icon: dapper,
    iconBg: '#E6DEDD',
    date: 'Dec 2022 - April 2024',
    points: [
      'Architected and implemented innovative NFT marketplace solutions for industry-leading platforms Genius and NBATopShot, resulting in 3x boost in revenue and 40% increase in active user base.',
      'Championed the creation of modular design system with 30+ reusable components, leading to 25% increase in design consistency and 20% boost in development efficiency.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Jhon proved me wrong.',
    name: 'Christopher Powers',
    designation: 'CEO',
    company: 'Taliso LLC',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
];

const projects = [
  {
    name: 'Tiktik',
    description:
      'Our TikTok Clone Application includes Google Auth, the ability to upload, publish, share, comment on, and like the videos; filtering by categories and advanced search functionalities, profile pages, suggested accounts, custom responsive design, and much more.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Sanity',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: tiktok,
    source_code_link: 'https://github.com/stardustdev/tiktok-mimic',
    app_link: 'https://tiktok-mimic.vercel.app/',
  },
  {
    name: 'Lyrics',
    description:
      'Master modern web development by building an improved version of Spotify. With a modern homepage, fully-fledged music player, search, lyrics, song exploration features, search, popular music around you, worldwide top charts, and much more',
    tags: [
      {
        name: 'Nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'RapidAPI',
        color: 'green-text-gradient',
      },
      {
        name: 'SCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: lyriks,
    source_code_link: 'https://github.com/stardustdev/lyriks',
    app_link: 'https://lyriks-mimic.netlify.app/',
  },
  {
    name: 'Summarizer',
    description:
      'Simplify your reading with Summarize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries',
    tags: [
      {
        name: 'Nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'ChatGPT',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: summarizer,
    source_code_link: 'https://github.com/stardustdev/ai-summarizer',
    app_link: 'https://ai-summarizer-zeta.vercel.app/',
  },
];

const awards = [
  {
    image: ingramAward,
    title: 'Xvantage Core Foundational Member Award',
    issuedAt: 'Aug 2023',
    company: 'Ingram Micro',
    logo: ingram,
  },
];

export { services, technologies, experiences, testimonials, projects, awards };
