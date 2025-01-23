import React from "react";
import { Navigation } from "../components/nav";

export default function AboutMePage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-zinc-400">
            Hi, I’m Leonardo Silva, a passionate Back-End Developer with over 3 years of experience creating robust and high-performance applications. Proficient in microservices architecture and web application development, I specialize in frameworks like Spring, JPA, TypeScript, and NestJS. With a solid foundation in Computer Science from the Pontifical Catholic University of Paraná, I thrive on collaborating with cross-functional teams to deliver successful project outcomes.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="max-w-2xl mx-auto space-y-6 lg:mx-0">
          <section>
            <h3 className="text-2xl font-bold text-zinc-100 sm:text-3xl">My Journey</h3>
            <p className="mt-4 text-zinc-400 leading-8">
              My professional journey began in October 2021 at Datlaz, where I played a key role in designing and implementing a microservices-based architecture. I developed RESTful and GraphQL APIs, integrated asynchronous communication using Apache Kafka, and leveraged PostgreSQL as the main database. I also utilized Spring Boot and Kotlin to build scalable backend services.
            </p>
            <p className="mt-4 text-zinc-400 leading-8">
              In October 2024, I joined Deal, where I have been contributing to the Banco Votorantim by creating microservices solutions. I focus on developing secure, maintainable APIs using Java, Spring Boot, and Hexagonal Architecture principles. My role also involves writing robust unit tests with JUnit and Mockito, ensuring code quality through SonarQube, and utilizing MySQL as the primary database.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-zinc-100 sm:text-3xl">Skills & Expertise</h3>
            <p className="mt-4 text-zinc-400 leading-8">
              My technical skill set includes:
            </p>
            <ul className="mt-4 space-y-2 text-zinc-400 list-disc list-inside">
              <li>Developing scalable microservices architecture</li>
              <li>Building RESTful and GraphQL APIs</li>
              <li>Working with frameworks like Spring Boot, NestJS, and Kotlin</li>
              <li>Database management with PostgreSQL and MySQL</li>
              <li>Writing unit tests with JUnit and Mockito</li>
              <li>Ensuring code quality using tools like SonarQube</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-zinc-100 sm:text-3xl">Education</h3>
            <p className="mt-4 text-zinc-400 leading-8">
              I graduated with honors in Computer Science from the Pontifical Catholic University of Paraná in July 2024. My academic journey equipped me with a strong foundation in software development and problem-solving skills.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
