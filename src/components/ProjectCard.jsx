import React from "react";
import { CodeXml, Eye } from "lucide-react";
import Link from "next/link";
const ProjectCard = ({ imgUrl, title, description, gitUrl, previweUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div
          className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818]
        bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all rounded-t-lg duration-500"
        >
          <Link
            href={previweUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7B3] hover:border-white group/link"
          >
            <CodeXml className="h-10 w-10 absolute top-1/2 left-1/2 -translate-x-1/2 transform -translate-y-1/2 text-[#ADB7B3] cursor-pointer group-hover/link:text-white"></CodeXml>
          </Link>
          <Link
            href={previweUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7B3] hover:border-white group/link"
          >
            <Eye className="h-10 w-10 absolute top-1/2 left-1/2 -translate-x-1/2 transform -translate-y-1/2 text-[#ADB7B3] cursor-pointer group-hover/link:text-white"></Eye>
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mb-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
