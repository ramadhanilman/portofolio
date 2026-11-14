import { profile } from "../data/profile";

export default function Navbar() {
  const panggilan = profile.nama.split(" ")[0].toLowerCase();

  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <a href="#home">{panggilan}.dev</a>
        <ul>
          <li><a href="#about">Tentang</a></li>
          <li><a href="#projects">Project</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
      </nav>
    </header>
  );
}