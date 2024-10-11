import KanbanTaskView from '@/components/projects/KanbanTasksView/KanbanTaskView'
import { columns } from '@/components/projects/project-tasks/TasksColumn'
import { TasksDataTable } from '@/components/projects/project-tasks/TasksDataTable'
import Breadcrumb from '@/components/shared/Breadcrumb'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { tasks } from '@/constants/tasks'

const ProjectTasks = () => {
    return (
        <section className='min-h-screen'>
            <Breadcrumb />
            <div>
                <p className="mt-2">Project Tasks</p>
            </div>
            <Tabs defaultValue="list" className="w-[95%] mt-2">
                <TabsList className="grid w-[400px] grid-cols-2">
                    <TabsTrigger value="list">List view</TabsTrigger>
                    <TabsTrigger value="kanban">Kanban view</TabsTrigger>
                </TabsList>
                <TabsContent value="list">
                    <div className="w-full">
                        <TasksDataTable data={tasks} columns={columns} />
                    </div>
                </TabsContent>
                <TabsContent value="kanban">
                    <div className="w-full">
                        <KanbanTaskView tasks={tasks} />
                    </div>
                </TabsContent>
            </Tabs>
            <div className="w-[95%]">

            </div>
        </section>
    )
}

export default ProjectTasks