import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../services/data';
import { type Project } from '../types/projects';

const ProjectDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const projectId = parseInt(id || '', 10);

    const project: Project | undefined = projects.find((p) => p.id === projectId);

    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
        <div style={{ padding: '1rem' }}>
            <h1>{project.name}</h1>
            <p><strong>Description:</strong> {project.description}</p>
            <p><strong>Status:</strong> {project.status}</p>
            {/* You can add buttons here for edit, delete, or navigate to tasks */}
        </div>
    );
};

export default ProjectDetailPage;
