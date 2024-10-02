import { columns } from '@/components/projects/project-tasks/TasksColumn'
import { TasksDataTable } from '@/components/projects/project-tasks/TasksDataTable'
import Breadcrumb from '@/components/shared/Breadcrumb'
import { tasks } from '@/constants/tasks'
import React from 'react'

const ProjectTasks = () => {
    return (
        <section className='min-h-screen'>
            <Breadcrumb />
            <div>Project Tasks</div>
            <div className="w-[95%]">
                <TasksDataTable data={tasks} columns={columns} />
            </div>
        </section>
    )
}

export default ProjectTasks