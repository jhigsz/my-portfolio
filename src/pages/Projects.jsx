import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="page-container">
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>My Projects</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.125rem' }}>
          Here are some of the applications and deliverables I've built. Click on any project to see more details.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((project) => (
          <div key={project.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem', color: '#f8fafc' }}>
                {project.title}
              </h3>
              <p style={{ color: '#94a3b8', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                {project.description}
              </p>
            </div>
            <Link 
              to={`/projects/${project.id}`} 
              className="btn-primary" 
              style={{ textAlign: 'center' }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
