import { resume } from "../data/resume";

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {resume.projects.map((project, i) => (
          <li key={i}>
            <a href={project.link} target="_blank" rel="noreferrer">{project.name}</a>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}