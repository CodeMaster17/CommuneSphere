import React from 'react'
import SearchProjects from './SearchProjects'
import AddProject from './AddProject'

const ProjectTopbar = () => {
    return (
        <div className="w-full border-2 flex justify-between items-center">
            <SearchProjects />
            <AddProject />
        </div>
    )
}

export default ProjectTopbar