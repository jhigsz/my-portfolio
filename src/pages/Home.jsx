import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', minHeight: '70vh' }}>
      <span style={{ color: '#38bdf8', fontWeight: '600', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Welcome to my space
      </span>
      <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem' }}>
        Hi, I'm a Developer & Designer building things for the web.
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '2.5rem', maxWidth: '650px' }}>
        I specialize in building clean, highly functional applications with modern tools, clean architecture, and responsive layouts.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/projects" className="btn-primary">
          Explore Projects
        </Link>
        <Link to="/contact" style={{ backgroundColor: 'transparent', border: '1px solid #475569', color: '#f8fafc', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: '600', textDecoration: 'none' }}>
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
