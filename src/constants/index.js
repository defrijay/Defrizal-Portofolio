import tensorflow from "../assets/tech/tensorflow.png";
import git from "../assets/tech/git.png";
import python from "../assets/tech/python.png";
import mongodb from "../assets/tech/mongodb.png";
import matplotlib from "../assets/tech/matplotlib.png";
import mysql from "../assets/tech/mysql.png";
import postgresql from "../assets/tech/postgresql.png";
import huggingface from "../assets/tech/huggingface.png";
import kaggle from "../assets/tech/kaggle.png";
import scikitLearn from "../assets/tech/scikit-learn.png";
import seaborn from "../assets/tech/seaborn.png";
import pytorch from "../assets/tech/pytorch.png";
import keras from "../assets/tech/keras.jpeg";
import tableau from "../assets/tech/tableau.png";
import pandas from "../assets/tech/pandas.jpg";
import numpy from "../assets/tech/numpy.png";

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'CV',
    href: '#cv',
  },
  {
    id: 4,
    name: 'Portofolio',
    href: '#projects',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Text Summarization Liputan 6 Article',
    desc: 'This project implements a Indo T5 model to generate text summaries from news articles. The model leverages data preprocessing, text augmentation, and deep learning techniques to automatically summarize text.',
    subdesc:
      'Built with Tensorflow, Pandas, Matplotlib, and Torch.',
    href: 'https://github.com/defrijay/IndoT5-TextSummarization-Liputan6/blob/main/IndoT5-Base%5BFineTuned%5D/indo-t5-base-fine-tuned.ipynb',
    github: 'https://github.com/defrijay/IndoT5-TextSummarization-Liputan6',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Tensorflow',
        path: '/assets/tech/tensorflow.png',
      },
      {
        id: 2,
        name: 'Pandas',
        path: '/assets/tech/huggingface.png',
      },
      {
        id: 3,
        name: 'matplotlib',
        path: '/assets/tech/matplotlib.png',
      },
      {
        id: 4,
        name: 'Pytorch',
        path: '/assets/tech/pytorch.png',
      },
    ],
  },
  {
    title: 'LSTM Tokped Sentiment',
    desc: 'This project is an implementation of sentiment analysis using the LSTM (Long Short-Term Memory) model with Bidirectional architecture. The data used is a collection of customer reviews with sentiment labels to train and evaluate the model.',
    subdesc:
      'Build with Tensorflow, Pandas, Numpy, Sklearn, Seaborn, and Matplotlib.',
    href: 'https://github.com/defrijay/LSTM-Tokped-Sentiment/blob/main/tokped-sentiment.ipynb',
    github: 'https://github.com/defrijay/LSTM-Tokped-Sentiment',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Tensorflow',
        path: '/assets/tech/tensorflow.png',
      },
      {
        id: 2,
        name: 'Pandas',
        path: 'assets/tech/pandas.jpg',
      },
      {
        id: 3,
        name: 'Numpy',
        path: '/assets/tech/numpy.png',
      },
      {
        id: 4,
        name: 'scikit-learn',
        path: '/assets/tech/scikit-learn.png',
      },
      {
        id: 5,
        name: 'seaborn',
        path: '/assets/tech/seaborn.png',
      },
      {
        id: 6,
        name: 'matplotlib',
        path: '/assets/tech/matplotlib.png',
      },
    ],
  },
  {
    title: 'Vandalism Classification',
    desc: 'This notebook aims to discuss the application of deep learning algorithms to the task of classifying vandalism and non-vandalism images. With rapid urbanization, monitoring signs of vandalism is important to maintain the beauty and cleanliness of the environment.',
    subdesc:
      'Build with Tensorflow, Numpy, Matplotlib, and Keras.',
    href: 'https://github.com/defrijay/Vandalism-Classification/blob/main/Vandalism_Classification.ipynb',
    github : 'https://github.com/defrijay/Vandalism-Classification',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Tensorflow',
        path: '/assets/tech/tensorflow.png',
      },
      {
        id: 2,
        name: 'Numpy',
        path: 'assets/tech/numpy.png',
      },
      {
        id: 3,
        name: 'Matplotlib',
        path: '/assets/tech/matplotlib.png',
      },
      {
        id: 4,
        name: 'Keras',
        path: '/assets/tech/keras.jpeg',
      },
    ],
  },
  {
    title: 'EDA Work Area Decision Making',
    desc: 'This project aims to assist individuals in determining work locations in West Java by considering various factors, such as expenditure per capita, minimum wages, the number of employed residents, and the poverty line. The data used is sourced from the Central Statistics Agency (BPS) and the Department of Manpower and Transmigration of West Java.',
    subdesc:
      'Build with Pandas, Numpy, Matplotlib, and Seaborn.',
    href: 'https://github.com/defrijay/EDA-Work-Area-Decision-Making/blob/main/EDA%20Kelompok%203.ipynb',
    github:'https://github.com/defrijay/EDA-Work-Area-Decision-Making',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Pandas',
        path: '/assets/tech/pandas.jpg',
      },
      {
        id: 2,
        name: 'Numpy',
        path: 'assets/tech/numpy.png',
      },
      {
        id: 3,
        name: 'Matplotlib',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Seaborn',
        path: '/assets/tech/seaborn.png',
      },
    ],
  },
  {
    title: 'NST Photo To Art',
    desc: 'This project explores Neural Style Transfer (NST), a deep learning technique that transfers the style of one image to another while preserving its content. Three different architectures are used: Vanilla NST, Residual NST, and Multi-Scale NST.',
    subdesc:
      'Bulid with Tensorflow, Numpy, and Keras.',
    href: 'https://github.com/defrijay/NST-Photo-To-Art/blob/main/NST-Photo-To-Art.ipynb',
    github: 'https://github.com/defrijay/NST-Photo-To-Art',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Tensorflow',
        path: '/assets/tech/tensorflow.png',
      },
      {
        id: 2,
        name: 'Numpy',
        path: 'assets/tech/numpy.png',
      },
      {
        id: 3,
        name: 'Keras',
        path: '/assets/tech/keras.jpeg',
      }
    ],
  },
];

export const technologies = [
  {
    name: "Pyhton",
    icon: python,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  // {
  //   name: "PostgreSQL",
  //   icon: postgresql,
  // },
  {
    name: "Scikit-learn",
    icon: scikitLearn,
  },
  {
    name: "Seaborn",
    icon: seaborn,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  },
  {
    name: "Keras",
    icon: keras,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "Hugging Face",
    icon: huggingface,
  },
  {
    name: "Kaggle",
    icon: kaggle,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Numpy",
    icon: numpy,
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'KEMAKOM FPMIPA UPI',
    pos: 'Head of Technology Bureau',
    duration: 'Februari 2024 - December 2024',
    icon: '/assets/tech/kemakom.svg',
    animation: 'victory',
    points: [
      'Designed and developed websites with MySQL and CodeIgniter 4, boosting traffic by 40%.',
      'Created AI/ML features such as a chatbot to enhance user interaction for accessibility for 100+ members.',
      'Managed updates, improving content accessibility for 100+ members.',
      'Led a team of 3, ensuring 100% on-time completion of tech projects and implementing AI-driven solutions to streamline processes.'
    ],
  },
  {
    id: 2,
    name: 'Dinamik-19',
    pos: 'Fullstack Developer',
    duration: 'August 2024 - October 2024',
    icon: '/assets/tech/dinamik.svg',
    animation: 'clapping',
    points: [
      "Developed and launched the DINAMIK-19 website, attracting 5,000+ visitors and increasing engagement by 20%.",
      "Optimized full-stack performance, reducing load time by 30% and improving user retention by 15%.",
      "Improved design and functionality, achieving 95% user satisfaction through collaboration."
    ],
  },
  {
    id: 3,
    name: 'Jakarta Smart City',
    pos: 'UI/UX Designer',
    duration: 'March 2024 - August 2024',
    icon: '/assets/tech/jsc.svg',
    animation: 'salute',
    points: [
      "Designed optimized database queries, improving data retrieval efficiency and reducing response time by 25%.",
      "Enhanced query structure and indexing, boosting overall system performance and increasing stakeholder satisfaction by 30%.",
      "Collaborated on database and server optimizations, ensuring 100% on-time project launch and improving system reliability by 15%."
    ],
  },
];
