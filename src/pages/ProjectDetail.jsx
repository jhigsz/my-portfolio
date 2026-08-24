import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div>
        <h2>Project Not Found</h2>
        <p>No project exists with ID: {id}</p>
        <Link to="/projects">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Repository
        </a>
      )}
      <br />
      <Link to="/projects">Back to Projects</Link>
    </div>
  );
}