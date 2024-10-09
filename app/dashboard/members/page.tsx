
import { getAllUsers } from '@/actions/user.action'
import Breadcrumb from '@/components/shared/Breadcrumb'
import { UserType, columns } from "@/components/table/member/member-column"
import { useDisplayYear } from '@/hooks/use-display-data'

import TableData from '@/components/member/TableData'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


import DomainWiseData from '@/components/member/DomainWiseData'
import MemberPageCard from '@/components/member/MemberPageCard'
import OnClickProfileView from '@/components/member/OnClickProfileView'
import { useCurrentRole } from '@/hooks/use-current-role'
import MemberPageActionButtons from '@/components/member/MemberPageActionButtons'
import { UserRole } from '@prisma/client'

async function getData(): Promise<UserType[]> {

    const data = await getAllUsers()

    // only returning the required fields
    return data?.map((user, index) => {
        return {
            sno: index + 1,
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            position: user.position,
            current_year: user.current_year,
            year_of_joining: useDisplayYear(user.year_of_joining) as '2021' || '2022' || '2023' || '2024' || '2025' || null,
        }
    }) || []
}

const Members = async () => {

    // fetching data from user
    const data = await getData()
    const role = await useCurrentRole()

    return (

        <section className='flex w-full gap-4   '>
            <div className='w-[70%]'>
                <Breadcrumb />
                {/* top cards */}
                <MemberPageCard />

                <Tabs defaultValue="table" className="mt-8 w-full">
                    <TabsList className="grid w-[20%] grid-cols-2">
                        <TabsTrigger value="table">View All</TabsTrigger>
                        <TabsTrigger value="domain" disabled>Domain View</TabsTrigger>
                    </TabsList>
                    <TabsContent value="table">

                        {/* table data */}
                        <TableData data={data} columns={columns} />


                    </TabsContent>
                    <TabsContent value="domain">

                        {/* domain wise data table */}
                        <DomainWiseData />

                    </TabsContent>
                </Tabs>
            </div>
            <div className='w-[30%]  pr-4'>

                {/* action buttons */}
                {role === UserRole.ADMIN && <MemberPageActionButtons />}



                {/* side profile view */}
                <OnClickProfileView />



                {/* graph */}
                <div className='mt-4 h-[40vh] w-full rounded-[7.54px]  bg-white p-4'>
                    <Tabs defaultValue="Year" className=" w-full">
                        <TabsList defaultValue={"Year"} className="grid w-full grid-cols-3">
                            <TabsTrigger defaultValue={"Year"} value="Year">Year</TabsTrigger>
                            <TabsTrigger value="Gender">Gender</TabsTrigger>
                            <TabsTrigger value="Domain">Domain</TabsTrigger>
                        </TabsList>
                        <TabsContent value="Year" className='flex size-full items-center justify-center'>
                            No graph to show
                        </TabsContent>
                        <TabsContent value="Gender" className='flex size-full items-center justify-center'>
                            No graph to show
                        </TabsContent>
                        <TabsContent value="Domain" className='flex size-full items-center justify-center'>
                            No graph to show
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>

    )
}

export default Members
