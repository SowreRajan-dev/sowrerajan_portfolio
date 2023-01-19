import React, { useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { AiFillGithub } from "react-icons/ai";
import { projects } from "../data/projects";

function ProjectDetails({ project, setClickFunction }) {
  return (
    <div
      className={`rounded-md p-10 relative mmd:p-5 transition-all duration-75 `}
      style={{ background: project.image_bg }}
    >
      <div
        className="text-white absolute right-10 top-5 cursor-pointer mmd:right-5"
        onClick={() => setClickFunction(false)}
      >
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>{" "}
      </div>
      <p
        className="font-Nunito text-[32px] text-center "
        style={{ color: project.text_color }}
      >
        {project.project_name}
      </p>
      <div className="flex items-center justify-center h-[100%]  mmd:flex-col ">
        <div className="p-10 flex-1 mmd:w-full mmd:h-full mmd:p-0">
          <HoverVideoPlayer
            videoSrc={project.videoSrc}
            className=""
            sizingMode="video"
            pausedOverlay={
              <img
                src={project.imageSrc}
                alt={project.project_name}
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            }
          />
        </div>
        <div className={`flex-1  w-full    p-10 `}>
          <p
            className="break-before-auto font-Poppins text-xl"
            style={{ color: project?.text_color }}
          >
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectsDisplay() {
  const [projectClicked, setProjectClicked] = useState(false);
  const [currentProject, setCurrentProject] = useState([]);

  function onProjectClicked(project) {
    const scrollProject = document.getElementById("projectBrief");
    setProjectClicked(true);
    setCurrentProject(project);
    if (scrollProject) {
      scrollProject.scrollIntoView({ behaviour: "smooth" });
    }
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
                onClick={() => onProjectClicked(project)}
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
          <div className="m-20" id="projectBrief"></div>
        </div>
      </div>

      <div className="">
        {projectClicked && (
          <div className="p-10 mmd:p-0" id={`project-${currentProject?.id}`}>
            <ProjectDetails
              project={currentProject}
              setClickFunction={setProjectClicked}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsDisplay;
