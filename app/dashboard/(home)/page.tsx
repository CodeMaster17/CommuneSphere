'use client'
import { getAllEventsCount, getTopEvents } from '@/actions/event.action';
import StatsHomeCard from '@/components/cards/StatsHomeCard';
import { Overview } from '@/components/home/Overview';
import { RecentActivity } from '@/components/home/RecentActivity';
import { Heading } from '@/components/shared/Heading';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { getAllUsersCount } from '@/services/user.services';
import { CalendarCheck2, FolderGit2, Handshake, User } from 'lucide-react';
import React, { useState } from 'react';

const Dashboard = () => {
    const [memberCount, setMemberCount] = React.useState<number | null>(null)
    const [eventCount, setEventCount] = React.useState<number | null>(null)
    const [, setTopEvents] = useState<any[] | null>([])
    const [isPending, setIsPending] = useState<boolean>(false)


    React.useEffect(() => {
        setIsPending(true)
        async function fetchData() {
            const totalUserCount = await getAllUsersCount()
            setMemberCount(totalUserCount)
            const totalEventCount = await getAllEventsCount()
            setEventCount(totalEventCount)
            const topEvents = await getTopEvents(4)
            setTopEvents(topEvents)
            setIsPending(false)
        }
        fetchData();
    }, [])

    return (
        <section className="w-full pr-2 min-h-screen">
            <Heading type="large">
                Dashboard
            </Heading>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatsHomeCard isPending={isPending} title={"Total Members"} value={memberCount || 0} icon={<User />} />
                <StatsHomeCard isPending={isPending} title={"Total Events"} value={eventCount || 0} icon={<CalendarCheck2 size={20} />} />
                <StatsHomeCard isPending={isPending} title={"Total Sponsors"} value={memberCount || 0} icon={< Handshake size={20} />} />
                <StatsHomeCard isPending={isPending} title={"Total Projects"} value={memberCount || 0} icon={<FolderGit2 size={20} />} />

            </div>
            {/* meetups, project tasks, audit logs */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-8">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <Overview />
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                            You made 265 changes this month.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RecentActivity />
                    </CardContent>
                </Card>
            </div>

        </section>
    )
}

export default Dashboard
