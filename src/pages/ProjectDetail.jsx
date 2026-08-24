import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id || p.id === Number(id));

  if (!project) {
    return (
      <div className="page-container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Project Not Found</h2>
        <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>The project you are looking for does not exist.</p>
        <Link to="/projects" className="btn-primary">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="page-container" style={{ maxWidth: '800px' }}>
      <Link to="/projects" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '600', display: 'inline-block', marginBottom: '2rem' }}>
        &larr; Back to Projects
      </Link>
      
      <div className="card" style={{ padding: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>{project.title}</h1>
        <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '2rem', lineHeight: '1.6' }}>
          {project.description}
        </p>
        
        <div style={{ borderTop: '1px solid #334155', paddingTop: '1.5rem', marginTop: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>Technologies Used</h3>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {project.technologies?.map((tech, index) => (
              <span key={index} style={{ backgroundColor: '#334155', color: '#38bdf8', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.875rem', fontWeight: '500' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
