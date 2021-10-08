import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Search from "../components/Search";

const initialProjects = [
  {
    title: "1Digitals",
    subtitle: "DIGITALS",
    status: "Platinium",
    endDate: "Jul 19, 2022",
    state: "United States"
  },
  {
    title: "1Tech Ltd - SP",
    subtitle: "1TECHSP",
    status: "Platinium",
    endDate: "Jul 19, 2022",
    state: "United States"
  },
  {
    title: "A-Katsastus - EE GfG",
    subtitle: "AKATSASTUS",
    status: null,
    endDate: "Jul 19, 2022",
    state: "United States"
  },
  {
    title: "A2A",
    subtitle: "AA1",
    status: null,
    endDate: "Jul 19, 2022",
    state: "United States"
  },
  {
    title: "A2A",
    subtitle: "AA1",
    status: null,
    endDate: "Jul 19, 2022",
    state: "United States"
  }
];

const Home = () => {
  const [projects, setProjects] = useState(initialProjects);

  const changeInput = (value) => setProjects(initialProjects.filter((project) => project.title.toLowerCase().includes(value.toLowerCase())));

  return (
    <div className={`home mx-auto mt-6 col-${initialProjects.length > 4 ? "7" : "8"}`}>
      <h1>Projects</h1>
      <div className={`d-flex justify-content-between align-items-center search-${initialProjects.length > 4 ? "b" : "s"}`}>
        <Search onChange={changeInput} />
        <div className="length">
          {initialProjects.length} projects
        </div>
      </div>
      <div className="content d-flex flex-row flex-wrap">
        {projects.map((project, index) => <ProjectCard key={index} {...project} small={initialProjects.length > 4} />)}
      </div>
    </div>
  );
};

export default Home;
