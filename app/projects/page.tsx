import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { ExternalLink, Github } from "lucide-react";

export default async function ProjectsPage() {
  const projects = [
    {
      id: 0,
      title: "sboot-voting",
      description: "It is an application developed in Java using the Spring Boot framework to manage voting sessions. It demonstrates the use of hexagonal architecture.",
      github: "https://github.com/LeonardoSilva-code/sboot-voting",
      tags: ["Java", "Spring Boot", "Hexagonal Architecture"]
    },
    {
      id: 1,
      title: "password-guard",
      description: "This is a simple and secure password manager that allows the user to store, view and delete passwords in an encrypted form.",
      github: "https://github.com/LeonardoSilva-code/password-guard",
      tags: ["Python", "Security", "Cryptography"]
    },
    {
      id: 2,
      title: "file-system BackEnd",
      description: "This is a file system project based on Spring Boot, designed to demonstrate basic directory and file management operations.",
      github: "https://github.com/LeonardoSilva-code/file-system",
      tags: ["Java", "Spring Boot", "Rest API", "Back-End"]
    },
    {
      id: 3,
      title: "file-system FrontEnd",
      description: "Angular project. Provide a interface for the file-system BackEnd.",
      github: "https://github.com/LeonardoSilva-code/file-system-fe",
      tags: ["Angular", "Typescript", "CSS", "Front-End"]

    },
  ];

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of my personal projects.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
        {projects.map((project) => (
            <Card key={project.id}>
  
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                    </div>
                  </div>

                  <h2
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    {project.title}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {project.description}
                  </p>
                  <div className="mb-4 mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                  <div className="bottom-7 md:bottom-8">
                  <a 
                  href={project.github}
                  target='blank'
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
                >
                  <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  View Project
                  <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
                  </div>
                </article>
            </Card>
          ))}
        </div>
        </div>
      </div>
  );
}
