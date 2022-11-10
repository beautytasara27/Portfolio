import { useState } from "react";
import {initialState} from "../../Data/presets";
import {
  Link
} from "react-router-dom";
function Projects() {

  const [projects, setProjects] = useState(initialState);

  // if (projects === null){
  //     return <h1>Loading ... </h1>
  // }

  return (
    <div id="main">
      <section className="posts">
        {projects.map((project) => (
          <article key={project.projectId}>
            <header>
              <span className="date">{project.Date}</span>
              <h2>
               {project.projectName}
              </h2>
              <h6>
                {" "}
                Languages :{" "}
                {project.Languages.map((language) => (
                  <em key={language}>{language}</em>
                ))}
              </h6>
              <h6>
                {" "}
                Frameworks :{" "}
                {project.Languages.map((framework) => (
                  <em key={framework}>{framework}</em>
                ))}
              </h6>
            </header>
            <div className="image fit flex justify-center">
              <img className="imgMe" src={require(`../../Assets/${project.imageUrl}`)} alt="project illustration should be here"/>
            </div>
           
            <p className="text-ellipsis  ">{project.paragraphs[0].Description}</p>
        
            <ul className="actions special">
              <li>
                <Link to={`/project/${project.projectId}`} className="button">
                  {project.Url ? "More" : "More"}
                </Link>
              </li>
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Projects;
