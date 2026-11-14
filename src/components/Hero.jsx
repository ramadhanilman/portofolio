import { profile } from "../data/profile";
import Window from "./Window";

export default function Hero() {
  const inisial = profile.nama
    .split(" ")
    .map((kata) => kata[0])
    .slice(0, 2)
    .join("");

  return (
    <section id="home" className="hero">
      <div>
        <span className="level">LVL. {profile.semester}</span>
        <h1>Hai, gue {profile.nama}.</h1>
        <p className="hero-sub">{profile.tagline}</p>
        <div className="actions">
          <a className="btn" href="#projects">Lihat project</a>
          <a className="btn btn-outline" href="#contact">Hubungi gue</a>
        </div>
      </div>

      <Window title="profile.exe">
        <div className="avatar">
          {profile.foto ? (
            <img src={profile.foto} alt={`Foto ${profile.nama}`} />
          ) : (
            <span>{inisial}</span>
          )}
        </div>
        <dl className="info">
          <div><dt>Kampus</dt><dd>{profile.kampus}</dd></div>
          <div><dt>Jurusan</dt><dd>{profile.jurusan}</dd></div>
          <div><dt>Semester</dt><dd>{profile.semester}</dd></div>
        </dl>
      </Window>
    </section>
  );
}