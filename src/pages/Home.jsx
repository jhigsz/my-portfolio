import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I am a developer showcasing my projects and technical experience.</p>
      <Link to="/projects">View My Projects</Link>
    </div>
  );
}