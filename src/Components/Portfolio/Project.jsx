import React from 'react';
import "./portfolio.css"

function Project(props) {
    const {project} = props
    return (
        <div className="project">
            <div className="project-image-container">
                <img className="picture" src={project.image} alt={project.name} />
            </div>
            <p className="name">{project.name}</p>
            <a className="link" href={project.url}>Visit</a>
            <p className="describe">{project.description}</p>
        </div>
    )
}

export default Project;