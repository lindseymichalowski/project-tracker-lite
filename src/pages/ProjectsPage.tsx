import React, { useState } from 'react';
import { projects } from '../services/data';
import ProjectModal from '../components/ProjectModal';
import { type Project } from '../types/projects';

const ProjectsPage: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id} onClick={() => setSelectedProject(project)} style={{ cursor: 'pointer' }}>
                        <strong>{project.name}</strong> — {project.status}
                    </li>
                ))}
            </ul>

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </div>
    );
};

export default ProjectsPage;