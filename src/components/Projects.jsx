import { projects } from "../data/projects";
import Window from "./Window";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Karya yang udah gue bikin.</h2>
      {projects.map((p) => (
        <div className="project" key={p.title}>
          <Window title={`${p.title.toLowerCase().replace(/\s+/g, "-")}.exe`}>
            {p.image && (
              <img className="project-img" src={p.image} alt={`Tampilan ${p.title}`} />
            )}
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p>{p.learned}</p>
            <ul className="tags">
              {p.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="actions">
              <a className="btn" href={p.repo} target="_blank" rel="noreferrer">Lihat kode</a>
              {p.demo && (
                <a className="btn btn-outline" href={p.demo} target="_blank" rel="noreferrer">Buka demo</a>
              )}
            </div>
          </Window>
        </div>
      ))}
    </section>
  );
}