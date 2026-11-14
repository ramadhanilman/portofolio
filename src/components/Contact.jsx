import { profile } from "../data/profile";
import Window from "./Window";

export default function Contact() {
  const panggilan = profile.nama.split(" ")[0].toLowerCase();

  return (
    <div className="bg-peach">
      <section id="contact">
        <h2>Punya ide atau peluang? Yuk ngobrol.</h2>
        <Window title={`C:/${panggilan}/kontak`}>
          <p>Lagi cari anak magang, kolaborasi project, atau sekadar ngobrol soal coding? Hubungi gue lewat salah satu ini.</p>
          <div className="actions" style={{ marginTop: "1.5rem" }}>
            <a className="btn" href={`mailto:${profile.email}`}>Email</a>
            <a className="btn btn-outline" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </Window>
      </section>
    </div>
  );
}