import React from "react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { TbScreenShare } from "react-icons/tb";
const ProjectCard = ({ project, index }) => {
  const { img, title, summery, tech, gitHub, demo } = project;
  return (
    <div
      className={`flex md:flex-row my-4 flex-col bg-slate-100 p-5 rounded-xl items-center justify-center `}
    >
      <div>
        <Image
          className="rounded-2xl shadow"
          src={img}
          alt={title}
          width={400}
          height={500}
        />
      </div>
      <div className="m-5 md:w-2/3 w-full">
        <h2 className="font-bold text-xl">{title}</h2>
        <ul>
          {summery?.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
        <p className="bg-slate-600 text-gray-50 p-1 px-3 mt-2 w-fit rounded-xl">
          Tech Stack - {tech}
        </p>
        <div className="flex mt-3 gap-5">
          <a
            target="_blank"
            href={gitHub}
            className="hover:text-blue-500 cursor-pointer"
          >
            <BsGithub size={30} />
          </a>
          <a
            target="_blank"
            href={demo}
            className="hover:text-blue-500 cursor-pointer"
          >
            <TbScreenShare size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
