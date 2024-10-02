import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsList = () => {

    return (
        <div className="mt-2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

export default ProjectsList