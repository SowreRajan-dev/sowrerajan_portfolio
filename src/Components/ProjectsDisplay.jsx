import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { projects } from "../data/projects";

function ProjectDetails({ project }) {
  return (
    <div
      className={` h-[100%] rounded-md`}
      style={{ background: project.image_bg }}
    >
      <p className="font-Nunito text-[32px] text-center text-white">
        {project.project_name}
      </p>
      <div className="flex items-center justify-center h-[100%]">
        <div className=" h-[100%] p-10 flex-1">
          <img
            src={project.imageSrc}
            className={`${
              project.id === 3 ? "w-[50%]" : "w-[80%]"
            } shadow-xl shadow-current rounded-md`}
            alt={project.project_name}
          />
        </div>
        <div className="flex-1 text-white break-before-norma p-10">
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}

function ProjectsDisplay() {
  const [projectHovered, setProjectHovered] = useState(false);
  const [currentProject, setCurrentProject] = useState([]);
  function onMouseEnter(project) {
    setProjectHovered(true);
    setCurrentProject(project);
  }
  // function onMouseLeave() {
  //   setProjectHovered(false);
  // }

  return (
    <div id="projects">
      <div className="w-full  h-full flex justify-center flex-col p-5 scroll-smooth ">
        <p className="font-Poppins font-semibold text-[2.5rem] mb-5">
          Latest projects
        </p>
        <div className="flex items-center justify-evenly flex-wrap gap-[5rem]">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[300px] border-[#7e7e7e] border p-3 rounded-xl "
            >
              <p className="font-Poppins font-semibold text-[2.3rem]">
                {project.project_name}
              </p>
              <div className="flex items-center justify-evenly flex-wrap gap-2 font-Poppins font-[300]  my-5">
                {project.tech_stack?.map((tech, id) => (
                  <div
                    className={` ${
                      tech.color === "#000000" && "bg-black"
                    } p-[10px] margin-auto flex items-center justify-center rounded-full cursor-pointer ${
                      (tech.color === "#000000" && "text-white") ||
                      (tech.color === "#F7FAFC" && "text-black") ||
                      (tech.color === "#F7DF1E" && "text-black") ||
                      (tech.color === "#EEEEEE" && "text-black")
                    } text-white`}
                    style={{ background: tech.color }}
                    key={id}
                  >
                    <p>{tech.name}</p>
                  </div>
                ))}
              </div>
              <div
                className={`w-full h-[300px]  rounded-md p-5 cursor-pointer  hover:scale-105 transition duration-300 ease-out`}
                onMouseEnter={() => onMouseEnter(project)}
                style={{
                  background: project.image_bg,
                }}
                // onMouseLeave={onMouseLeave}
              >
                <img
                  src={project.imageSrc}
                  className="w-full h-full object-contain"
                  alt="agri_connect"
                />
              </div>
              <a href={project.github_url}>
                <div className="font-Poppins text-[1.2rem] font-[400] mt-5 flex items-center cursor-pointer">
                  <p className="px-2">Github</p>
                  <span>
                    <AiFillGithub />
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {projectHovered && (
        <div
          className="w-[100%] h-[450px]  p-10 "
          id={`project-${currentProject?.id}`}
        >
          <ProjectDetails project={currentProject} />
        </div>
      )}
    </div>
  );
}

export default ProjectsDisplay;
