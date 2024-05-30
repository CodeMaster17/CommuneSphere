import Breadcrumb from '@/components/shared/Breadcrumb';
import { Button } from '@/components/ui/button'
import SponsorPageCard from '@/components/sponsor/SponsorPageCard';
import { DataTable } from '@/components/table/sponsor/sponsor-data-table';
import {columns } from "@/components/table/sponsor/sponsor-column"
import { SPONSOR } from '@/constants';
import OnClickSponsorView from '@/components/sponsor/OnClickSponsorView';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const SponsorsPage = () => {
    return (
        <section className='flex w-full gap-4   '>
            <div className='w-[70%]'>
                <Breadcrumb />


                {/* top cards */}
                <SponsorPageCard />

                <Tabs defaultValue="table" className="mt-2 w-full">
                    
                    <TabsContent value="table">

                        {/* table data */}
                        {/* <TableData data={data} columns={columns} /> */}
                        {/* <DataTable columns={columns} data={SPONSOR} /> */}


                    </TabsContent>
                    <TabsContent value="domain">

                        {/* domain wise data table */}
                        {/* <DomainWiseData /> */}

                    </TabsContent>
                </Tabs>
            </div>
            <div className='w-[30%]  pr-4'>
                <div className='flex w-full items-center justify-end gap-4'>
                    {/* <EditFormModal /> */}
                    <Button variant="outline">
                        Import from CSV
                    </Button>
                </div>


                {/* side profile view */}
                <OnClickSponsorView />



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

export default SponsorsPage
