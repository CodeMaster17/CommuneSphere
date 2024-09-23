'use client'
import { getAllEventsCount, getTopEvents } from '@/actions/event.action'
import { countAllUsers } from '@/actions/user.action'
import StatsHomeCard from '@/components/cards/StatsHomeCard'
import { Heading } from '@/components/shared/Heading'
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Dashboard = () => {
    const [memberCount, setMemberCount] = React.useState<number | null>(null)
    const [eventCount, setEventCount] = React.useState<number | null>(null)
    const [, setTopEvents] = useState<any[] | null>([])

    async function getData() {
        try {
            const count = await countAllUsers()
            setMemberCount(count)
        } catch (err) {
            console.error(err)
        }
    }

    async function getEventCount() {
        try {
            const count = await getAllEventsCount()
            setEventCount(count)
        } catch (err) {
            console.error(err)
        }
    }

    async function fetchTopEvents() {
        try {
            const eventsData = await getTopEvents(4);
            console.log(eventsData)
            setTopEvents(eventsData);
        } catch (err) {
            console.error(err);
        }
    }


    React.useEffect(() => {
        getData()
        getEventCount()
        fetchTopEvents()
    }, [])

    return (
        <section className="w-full border-2 pr-4">
            <Heading type="large">
                Dashboard
            </Heading>
            <div className='mt-2 flex w-full flex-wrap gap-4'>
                <StatsHomeCard number={memberCount} description={"Total Members"} />
                <StatsHomeCard number={eventCount} description={"Total Events"} />
                <StatsHomeCard number={eventCount} description={"Total Events"} />
                <StatsHomeCard number={eventCount} description={"Total Events"} />
            </div>
            {/* meetups, project tasks, audit logs */}
            <section className=" mt-8 text-gray-600 flex gap-2">
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </div>
            </section>

        </section>
    )
}

export default Dashboard
