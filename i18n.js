'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "ABOUT_ME": "About me",
          "PROJECTS": "Projects",
          "PROJECTS_TEXT": "Some of my personal projects.",
          "CONTACT": "Contact",
          "WELCOME_MESAGE": "Welcome to my portfolio! Explore my projects, skills, and experience as a software developer. Let's build something amazing together!.",
          "ABOUT_ME_TEXT": " Hi, I’m Leonardo Silva, a passionate Software Developer. With over 3 years of experience, I have dedicated myself to building scalable and high-performance systems, aligning myself with the demands of companies that value robust technology and efficient solutions.",
          "MY_JOURNEY": "My journey",
          "MY_JOURNEY_TEXT_1": "My professional journey began in October 2021 at ",
          "MY_JOURNEY_TEXT_2": "where I worked on the design of a microservices architecture, developing integrated RESTful and GraphQL APIs using Apache Kafka to ensure asynchronous communication. I used Spring Boot (Java/Kotlin) and NestJS (Node.js/TypeScript), combined with PostgreSQL, to deliver modular, easy-to-maintain solutions. In addition, I actively collaborated in front-end development, using Angular to create dynamic interfaces and Next.js for web applications with optimized rendering, ensuring a fluid experience for end users.",
          "MY_JOURNEY_TEXT_3": "In October 2024, I joined  ",
          "MY_JOURNEY_TEXT_4": "where i continue to improve my expertise in microservices, working on projects for Banco Votorantim. I implement APIs with Spring Boot and Hexagonal Architecture, using Swagger for detailed documentation and agile versioning. I also orchestrated processes with Apache Camel, integrating heterogeneous systems efficiently. To ensure quality, I used unit tests (JUnit/Mockito), adopting MySQL as the main database and GCP (Google Cloud Platform) to optimize cloud operations.",
          "SKILLS_AND_EXPERTISE": "Skills & Expertise",
          "MY_TECHNICAL_SKILL_SET_INCLUDES": "My technical skill set includes:",
          "TECHNICAL_SKILL_1": "Developing scalable microservices architecture",
          "TECHNICAL_SKILL_2": "Building APIs",
          "TECHNICAL_SKILL_3": "Working with backend frameworks like Spring Boot, and NestJS",
          "TECHNICAL_SKILL_4": "Relational Database management",
          "TECHNICAL_SKILL_5": "Writing unit tests with JUnit and Mockito",
          "TECHNICAL_SKILL_6": "Developing frontend aplications with frameworks like Angular and NextJS",
          "EDUCATION": "Education",
          "EDUCATION_TEXT": "I graduated with honors in Computer Science from the Pontifical Catholic University of Paraná in July 2024. My academic journey equipped me with a strong foundation in software development and problem-solving skills.",
          "VIEW_PROJECT": "View Project",
          "PROJECT_DESCRIPTION_1": "It is an application developed in Java using the Spring Boot framework to manage voting sessions. It demonstrates the use of hexagonal architecture.",
          "PROJECT_DESCRIPTION_2": "This is a simple and secure password manager that allows the user to store, view and delete passwords in an encrypted form.",
          "PROJECT_DESCRIPTION_3": "This is a file system project based on Spring Boot, designed to demonstrate basic directory and file management operations.",
          "PROJECT_DESCRIPTION_4": "Angular project. Provide a interface for the file-system BackEnd.",
          "HEXAGONAL_ARCHITECTURE": "Hexagonal Architecture",
          "SECURITY": "Security",
          "CRYPTOGRAPHY": "Cryptography",
          "PROJECT_DESCRIPTION_5": "Is an application developed in TypeScript using the NestJS framework to manage tasks guaranteeing the security of operations through JWT (JSON Web Token) authentication."
        },
      },
      pt: {
        translation: {
          "ABOUT_ME": "Sobre mim",
          "PROJECTS": "Projetos",
          "PROJECTS_TEXT": "Alguns dos meus projetos pessoais.",
          "CONTACT": "Contato",
          "WELCOME_MESAGE": "Bem-vindo ao meu portfólio! Explore os meus projectos, competências e experiência como programador de software. Vamos construir algo incrível juntos!",
          "ABOUT_ME_TEXT": "Olá, eu sou Leonardo Silva, um desenvolvedor de software apaixonado. Com mais de 3 anos de experiência, tenho me dedicado a construir sistemas escaláveis e de alta performance, me alinhando com as demandas de empresas que valorizam tecnologia robusta e soluções eficientes.",
          "MY_JOURNEY": "Minha jornada",
          "MY_JOURNEY_TEXT_1": "O meu percurso profissional começou em outubro de 2021 na ",
          "MY_JOURNEY_TEXT_2": "onde trabalhei na conceção de uma arquitetura de microsserviços, desenvolvendo APIs RESTful e GraphQL integradas, utilizando o Apache Kafka para assegurar a comunicação assíncrona. Utilizei Spring Boot (Java/Kotlin) e NestJS (Node.js/TypeScript), combinados com PostgreSQL, para fornecer soluções modulares e fáceis de manter. Além disso, colaborei ativamente no desenvolvimento front-end, utilizando Angular para criar interfaces dinâmicas e Next.js para aplicações web com renderização optimizada, garantindo uma experiência fluida para os utilizadores finais.",
          "MY_JOURNEY_TEXT_3": "Em outubro de 2024, juntei-me à  ",
          "MY_JOURNEY_TEXT_4": "onde continuo aprimorando meus conhecimentos em microserviços, trabalhando em projetos para o Banco Votorantim. Implementei APIs com Spring Boot e Arquitetura Hexagonal, utilizando Swagger para documentação detalhada e versionamento ágil. Também orquestrei processos com Apache Camel, integrando sistemas heterogéneos de forma eficiente. Para garantir a qualidade, utilizei testes unitários (JUnit/Mockito), adotando MySQL como banco de dados principal e GCP (Google Cloud Platform) para otimizar as operações em nuvem.",
          "SKILLS_AND_EXPERTISE": "Competências e conhecimentos",
          "MY_TECHNICAL_SKILL_SET_INCLUDES": "O meu conjunto de competências técnicas inclui:",
          "TECHNICAL_SKILL_1": "Desenvolvimento de uma arquitetura de microsserviços escalável",
          "TECHNICAL_SKILL_2": "Criação de APIs",
          "TECHNICAL_SKILL_3": "Trabalhar com frameworks de backend como Spring Boot e NestJS",
          "TECHNICAL_SKILL_4": "Banco de dados relacional",
          "TECHNICAL_SKILL_5": "Escrever testes unitários com JUnit e Mockito",
          "TECHNICAL_SKILL_6": "Desenvolvimento de aplicações front-end com estruturas como Angular e NextJS",
          "EDUCATION": "Formação",
          "EDUCATION_TEXT": "Eu me formei com honras em Ciência da Computação pela Pontifícia Universidade Católica do Paraná em julho de 2024. Minha jornada acadêmica me equipou com uma base sólida em desenvolvimento de software e habilidades de resolução de problemas.",
          "VIEW_PROJECT": "Ver projeto",
          "PROJECT_DESCRIPTION_1": "Trata-se de uma aplicação desenvolvida em Java que utiliza a estrutura Spring Boot para gerir as sessões de votação. Demonstra a utilização da arquitetura hexagonal.",
          "PROJECT_DESCRIPTION_2": "Trata-se de um gestor de senhas simples e seguro que permite ao utilizador armazenar, visualizar e eliminar senhas de forma encriptada.",
          "PROJECT_DESCRIPTION_3": "Este é um projeto de sistema de pastas e arquivos baseado no Spring Boot, concebido para demonstrar operações básicas de gestão de diretórios e arquivos.",
          "PROJECT_DESCRIPTION_4": "Projeto Angular. Fornecer uma interface para o BackEnd do sistema de pastas e arquivos.",
          "HEXAGONAL_ARCHITECTURE": "Arquitetura Hexagonal",
          "SECURITY": "Segurança",
          "CRYPTOGRAPHY": "Criptografia",
          "PROJECT_DESCRIPTION_5": "É uma aplicação desenvolvida em TypeScript que utiliza a estrutura NestJS para gerir tarefas, garantindo a segurança das operações através da autenticação JWT (JSON Web Token)."
        },
      },
    }, 
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
