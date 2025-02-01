'use client';

import React from "react";
import { Navigation } from "../components/nav";
import { FaJava, FaNodeJs, FaJira } from "react-icons/fa";
import { SiSpringboot,SiDocker, SiJavascript ,SiNestjs, SiJenkins, SiRedis, SiPostgresql, SiMysql, SiAngular, SiNextdotjs, SiTypescript, SiSwagger, SiApachekafka, SiGit } from "react-icons/si";
import { useTranslation } from 'react-i18next';

export default function AboutMePage() {
  const { t } = useTranslation();
  const techIcons = [
    { icon: FaJava, name: 'Java', color: '#007396' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiSpringboot, name: 'Spring Boot', color: '#6DB33F' },
    { icon: FaNodeJs, name: 'NodeJs', color: '#6DB33F' },
    { icon: SiNestjs, name: 'NestJS', color: '#E0234E' },
    { icon: SiSwagger, name: 'Swagger', color: '#25A162' },
    { icon: SiAngular, name: 'Angular', color: '#DD0031' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF' },
    { icon: SiApachekafka, name: 'Apache Kafka', color: '#FFFFFF' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiRedis, name: 'Redis', color: '#DD0031' },
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
    { icon: SiGit, name: 'Git', color: '#F05032' },
    { icon: SiJenkins, name: 'Jenkins', color: '#D24939' },
    { icon: FaJira, name: 'Jira', color: '#3178C6' },
  ];

 /* const techIcons = [
    { icon: FaJava, name: 'Java', color: '#FFFAFA' },
    { icon: SiJavascript, name: 'JavaScript', color: '#FFFAFA' },
    { icon: SiTypescript, name: 'TypeScript', color: '#FFFAFA' },
    { icon: SiSpringboot, name: 'Spring Boot', color: '#FFFAFA' },
    { icon: FaNodeJs, name: 'NodeJs', color: '#FFFAFA' },
    { icon: SiNestjs, name: 'NestJS', color: '#FFFAFA' },
    { icon: SiSwagger, name: 'Swagger', color: '#FFFAFA' },
    { icon: SiAngular, name: 'Angular', color: '#FFFAFA' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#FFFAFA' },
    { icon: SiApachekafka, name: 'Apache Kafka', color: '#FFFAFA' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#FFFAFA' },
    { icon: SiMysql, name: 'MySQL', color: '#FFFAFA' },
    { icon: SiRedis, name: 'Redis', color: '#FFFAFA' },
    { icon: SiDocker, name: 'Docker', color: '#FFFAFA' },
    { icon: SiGit, name: 'Git', color: '#FFFAFA' },
    { icon: SiJenkins, name: 'Jenkins', color: '#FFFAFA' },
    { icon: FaJira, name: 'Jira', color: '#FFFAFA' },
  ];*/

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            {t("ABOUT_ME")}
          </h2>
          <p className="mt-4 text-zinc-400">
          {t("ABOUT_ME_TEXT")}
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="max-w-2xl mx-auto space-y-6 lg:mx-0">
          <section>
            <h3 className="text-2xl font-bold text-zinc-100 sm:text-3xl">{t("MY_JOURNEY")}</h3>
            <p className="mt-4 text-zinc-400 leading-8">
              {t("MY_JOURNEY_TEXT_1")}<a href="https://www.datlaz.com" target="blank" className="text-blue-400 hover:underline">Datlaz</a>, 
              {t("MY_JOURNEY_TEXT_2")}
            </p>
            <p className="mt-4 text-zinc-400 leading-8">
            {t("MY_JOURNEY_TEXT_3")}<a href="https://www.deal.com.br/" target="blank" className="text-blue-400 hover:underline">Deal</a>, {t("MY_JOURNEY_TEXT_4")}
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-zinc-100 sm:text-3xl">{t("SKILLS_AND_EXPERTISE")}</h3>
            <p className="mt-4 text-zinc-400 leading-8">
              {t("MY_TECHNICAL_SKILL_SET_INCLUDES")}
            </p>
            <ul className="mt-4 space-y-2 text-zinc-400 list-disc list-inside">
              <li>{t("TECHNICAL_SKILL_1")}</li>
              <li>{t("TECHNICAL_SKILL_2")}</li>
              <li>{t("TECHNICAL_SKILL_3")}</li>
              <li>{t("TECHNICAL_SKILL_4")}</li>
              <li>{t("TECHNICAL_SKILL_5")}</li>
              <li>{t("TECHNICAL_SKILL_6")}</li>
            </ul>
                    <div className="mt-6 flex flex-wrap gap-6"> {/* Aumente o gap para 6 */}
                  {techIcons.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div 
                key={index} 
                className="group relative transition-all duration-300 overflow-visible"
              >
                <div className="flex items-center gap-2">
                  <IconComponent 
                    className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: tech.color }} 
                    aria-label={tech.name}
                  />
                </div>
                <span className="
                  absolute -bottom-9 left-1/2 -translate-x-1/2
                  bg-zinc-900 rounded-md px-2 py-1 text-sm
                  text-zinc-100 opacity-0 group-hover:opacity-100
                  transition-opacity duration-300 whitespace-nowrap
                  pointer-events-none z-20 shadow-lg
                ">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-zinc-100 sm:text-3xl">{t("EDUCATION")}</h3>
            <div className="mt-4 flex items-start gap-4">
              <p className="text-zinc-400 leading-8">
                {t("EDUCATION_TEXT")}
              </p>
              <a 
                href="https://www.pucpr.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img 
                  src="/brasaopucpr.png"
                  alt="PUCPR Logo" 
                  className="h-30 w-30 object-contain mt-1 cursor-pointer"
                />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
