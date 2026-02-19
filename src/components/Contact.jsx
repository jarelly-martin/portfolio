import { resume } from "../data/resume";

export default function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <p>Email: {resume.contact.email}</p>
      <p>
        <a href={resume.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> | 
        <a href={resume.contact.github} target="_blank" rel="noreferrer">GitHub</a>
      </p>
    </section>
  );
}