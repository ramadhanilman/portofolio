import { profile } from "../data/profile";
import Window from "./Window";

export default function About() {
  return (
    <div className="bg-peach">
      <section id="about">
        <h2>Belajar paling cepat lewat bikin sesuatu.</h2>
        <Window title="about.txt">
          {profile.bio.map((paragraf) => (
            <p key={paragraf}>{paragraf}</p>
          ))}
          <ul className="tags">
            {profile.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Window>
      </section>
    </div>
  );
}