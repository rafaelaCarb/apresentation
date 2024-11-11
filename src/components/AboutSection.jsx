"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>CSS</li>
        <li>Tailwind</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Javascript</li>
      </ul>
    ),
  },
  {
    title: "Educação",
    id: "education",
    content: (
      <ul className="list-disc pl-1">
        <p>
          Atualmente, estou no quarto período da faculdade e continuo me
          dedicando a aprender e aprimorar minhas habilidades.
        </p>
      </ul>
    ),
  },
  {
    title: "Experiência",
    id: "experience",
    content: (
      <ul className="list-disc pl-1">
        <p>
        Sou desenvolvedora front-end, com aproximadamente 8 meses de experiência focada no desenvolvimento de interfaces interativas e responsivas.
        </p>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTab = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="lg:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={"/images/about-image.png"}
          width={500}
          height={500}
          alt="About Us"
          className="rounded-lg"
        />
        <div className="mt-4 lg:mt-0 text-left h-full flex flex-col">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base md:text-lg ">
            Sou desenvolvedora front-end, com aproximadamente 8 meses de
            experiência focada no desenvolvimento de interfaces interativas e
            responsivas. Tenho habilidades em HTML, CSS, Tailwind, React,
            Next.js e Git, e também estou familiarizada com ferramentas como o
            Postman. No back-end, possuo conhecimento em Node.js e já estudei
            Java com Spring Boot e MySQL. Atualmente, estou no quarto período da
            faculdade e continuo me dedicando a aprender e aprimorar minhas
            habilidades.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTab("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTab("education")}
              active={tab === "education"}
            >
              {" "}
              Educação{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTab("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experiência{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
