import { getAllEvents } from '@/actions/event.action';
import EventPageCard from '@/components/event/EventPageCard';
import OnClickEventView from '@/components/event/OnClickEventView';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { EventType, columns } from "@/components/table/event/event-column";
import { DataTable } from "@/components/table/event/event-data-table";
import { Button } from '@/components/ui/button';

import EditFormModal from '@/components/event/AddFormModal';
import DomainWiseData from '@/components/event/DomainWiseData';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";


async function getData(): Promise<EventType[]> {

    const data = await getAllEvents()

    // only returning the required fields
    return data?.map((event) => {
        return {
            id: event.id,
            name: event.name,
            date: event.date,
            actual_participants: event.actual_participants,
            duration: event.duration,
            target_year: event.target_year,
        }
    }) || []
}



const Events = async () => {
    const data = await getData()
    
return (

        // <div className='w-full'>
        //     <div className='flex w-full justify-between'>
        //     <Breadcrumb />
        //         <Button asChild variant="outline">
        //             <Link href="/dashboard/events/add-event">Add Event</Link>
        //         </Button>
        //     </div>
        //     <div className='mt-4 w-full flex items-center gap-2'>
        //         <Heading type="medium">
        //             Events
        //         </Heading>
        //         <EventCount />
        //     </div>
        //     <div>
        //         <DataTable columns={columns} data={data} />
        //     </div>
        // </div>
        <section className='flex w-full gap-4   '>
            <div className='w-[70%]'>
                <Breadcrumb />


                {/* top cards */}
                <EventPageCard />

                <Tabs defaultValue="table" className="mt-8 w-full">
                    <TabsList className="grid w-[20%] grid-cols-2">
                        <TabsTrigger value="table">View All</TabsTrigger>
                        <TabsTrigger value="domain" disabled>Domain View</TabsTrigger>
                    </TabsList>
                    <TabsContent value="table">

                        {/* table data */}
                        {/* <TableData data={data} columns={columns} /> */}
                        <DataTable columns={columns} data={data} />


                    </TabsContent>
                    <TabsContent value="domain">

                        {/* domain wise data table */}
                        <DomainWiseData />

                    </TabsContent>
                </Tabs>
            </div>
            <div className='w-[30%]  pr-4'>
                <div className='flex w-full items-center justify-end gap-4'>
                    <EditFormModal />
                    <Button variant="outline">
                        Import from CSV
                    </Button>
                </div>


                {/* side profile view */}
                <OnClickEventView />



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

export default Events
