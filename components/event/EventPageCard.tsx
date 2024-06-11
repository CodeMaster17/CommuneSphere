
import { getAllEventsCount, countAvgParticipation, countAvgRegistration, getTopEvents } from "@/actions/event.action"
import { Heading } from "../shared/Heading"
import { Card } from "../ui/card"
import Image from "next/image"


const EventPageCard = async () => {


    const totalEvents = await getAllEventsCount()
    const AvgParticipation = await countAvgParticipation()
    // eslint-disable-next-line no-unused-vars
    const AvgRegistration = await countAvgRegistration()
    const topEvents = await getTopEvents(2);


    return (
        <div className='mt-2 grid grid-cols-2 gap-4 '>
            <div className=' rounded-[6px] bg-white p-4 '>

                <Heading type='small' >
                    Top Events
                </Heading>
                <div className='mt-2 grid grid-cols-2 gap-4'>

                {topEvents.map((event, index) => (
                 <Card key={index} className='flex flex-col items-center justify-center p-2'>
                  <Image src='/events-thumbnail.png' alt='intro' width={400} height={100} className='h-24 w-full rounded-lg' />
                  <div className='mt-2 flex w-full items-center justify-between'>
                    <p className='text-xs font-semibold'>{event.name}</p>
                   <p className='rounded-sm bg-greenTab px-3 text-xs text-greenText'>{event.actual_participants} Participants</p>
                 </div>
                 </Card>
      ))}
                </div>
            </div>
            <div className='flex  flex-col gap-4  '>
                <div className='flex gap-4'>
                    <Card className="w-1/2 py-4 pl-4">
                        <p>Total Events</p>
                        <p className='text-4xl font-bold'>
                            {totalEvents}
                        </p>
                    </Card>
                    <Card className="w-1/2 py-4 pl-4">
                        <p>Avg. Participation</p>
                        <p className='text-4xl font-bold'>{AvgParticipation}</p>
                    </Card>
                </div>
                <div className='flex gap-4'>
                    <Card className="w-1/2 py-4 pl-4">
                        <p>Avg. Registration</p>
                        <p className='text-4xl font-bold'>457</p>
                    </Card>
                    <Card className="w-1/2 py-4 pl-4">
                        <p>Total Active Sponsors</p>
                        <p className='text-4xl font-bold'>3</p>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default EventPageCard
