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
import { TEXT_GENDER, TEXT_YEAR } from '@/constants';
import { ERR_NO_GRAPH_TO_SHOW } from '@/constants/error.message';


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
                    <Tabs defaultValue={TEXT_YEAR} className=" w-full">
                        <TabsList defaultValue={TEXT_YEAR} className="grid w-full grid-cols-3">
                            <TabsTrigger defaultValue={TEXT_YEAR} value={TEXT_YEAR}>Year</TabsTrigger>
                            <TabsTrigger value={TEXT_GENDER}>Gender</TabsTrigger>
                            <TabsTrigger value="Domain">Domain</TabsTrigger>
                        </TabsList>
                        <TabsContent value={TEXT_YEAR} className='flex size-full items-center justify-center'>
                            {ERR_NO_GRAPH_TO_SHOW}
                        </TabsContent>
                        <TabsContent value={TEXT_GENDER} className='flex size-full items-center justify-center'>
                            {ERR_NO_GRAPH_TO_SHOW}
                        </TabsContent>
                        <TabsContent value="Domain" className='flex size-full items-center justify-center'>
                            {ERR_NO_GRAPH_TO_SHOW}
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

export default Events
