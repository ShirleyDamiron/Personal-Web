import React from 'react';
import Nav from '../NavBar/Nav';
import Footer from "../Footer/Footer"
import Project from "./Project"
import {projects} from "../../projects.json"

function Portfolio() {
    const allProjects = projects.map(project => {
        return <Project project={project} />
    })
    return (
        <>
        <div className="content-wrapper">
            <Nav />
            <section>{allProjects}</section>
        </div>
        <Footer />
        </>
    )
}

export default Portfolio;