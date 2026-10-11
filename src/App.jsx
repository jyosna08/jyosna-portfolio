import { Link, NavLink, Route, Routes } from "react-router-dom";
import { profile, skills, projects, education } from "./data.js";

function Home() {
  return (
    <section className="page hero">
      <p className="role">{profile.role}</p>
      <h1>{profile.headline}</h1>
      <p className="lead">
        Hi, I'm {profile.name}, based in {profile.location}.
      </p>
      <div className="actions">
        <Link className="btn primary" to="/projects">View projects</Link>
        <Link className="btn" to="/contact">Contact me</Link>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="page">
      <h1>About me</h1>
      <p className="lead">{profile.about}</p>
      <h2>Skills</h2>
      <ul className="chips">
        {skills.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </section>
  );
}

function Education() {
  return (
    <section className="page">
      <h1>Education</h1>
      <div className="timeline">
        {education.map((e) => (
          <article className="edu" key={e.degree}>
            <p className="years">{e.years}</p>
            <h2>{e.degree}</h2>
            <p className="school">{e.school}</p>
            <p className="detail">{e.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="page">
      <h1>Projects</h1>
      <div className="grid">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <ul className="chips small">
              {p.tech.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <div className="card-links">
              <a href={p.live} target="_blank" rel="noreferrer">Live demo</a>
              <a href={p.code} target="_blank" rel="noreferrer">Source code</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page">
      <h1>Contact</h1>
      <p className="lead">Have a project or an opportunity? Send me an email.</p>
      <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
      <ul className="social">
        {profile.links.map((l) => (
          <li key={l.label}>
            <a href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function NotFound() {
  return (
    <section className="page">
      <h1>Page not found</h1>
      <p className="lead">This page doesn't exist.</p>
      <Link className="btn" to="/">Go home</Link>
    </section>
  );
}

export default function App() {
  return (
    <div className="layout">
      <header className="nav">
        <Link to="/" className="logo">{profile.name}</Link>
        <nav className="links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}