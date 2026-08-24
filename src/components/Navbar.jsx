import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#1e293b', borderBottom: '1px solid #334155', position: 'sticky', top: 0, zIndex: 1000 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#f8fafc', textDecoration: 'none' }}>
          My Portfolio
        </Link>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
          <Link to="/about" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}>About</Link>
          <Link to="/projects" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}>Projects</Link>
          <Link to="/contact" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
