import React from 'react';
import { type Project } from '../types/projects';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <p><strong>Status:</strong> {project.status}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ProjectModal;