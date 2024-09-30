import ProjectTopbar from '@/components/projects/Project-topbar'
import ProjectsList from '@/components/projects/ProjectsList'
import Breadcrumb from '@/components/shared/Breadcrumb'
import React from 'react'

const ProjectsPage = () => {
    return (
        <section className=' min-h-screen w-[95%]'>
            <Breadcrumb />
            <ProjectTopbar />
            <ProjectsList />
        </section>
    )
}

export default ProjectsPage