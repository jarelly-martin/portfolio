import { resume } from "../data/resume";

export default function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>{resume.summary}</p>
    </section>
  );
}