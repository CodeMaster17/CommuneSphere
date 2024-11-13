import { getAllEvents } from '@/actions/event.action';
import EventPageCard from '@/components/event/EventPageCard';
import OnClickEventView from '@/components/event/OnClickEventView';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { EventType, columns } from '@/components/table/event/event-column';
import { DataTable } from '@/components/table/event/event-data-table';
import { Button } from '@/components/ui/button';

import EditFormModal from '@/components/event/AddFormModal';
import DomainWiseData from '@/components/event/DomainWiseData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TEXT_GENDER, TEXT_YEAR } from '@/constants';
import { ERR_NO_GRAPH_TO_SHOW } from '@/constants/error.message';
import OverviewBarChart from '@/components/charts/OverviewBarChart';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { RecentActivity } from '@/components/home/RecentActivity';

async function getData(): Promise<EventType[]> {
	const data = await getAllEvents();

	// only returning the required fields
	return (
		data?.map((event) => {
			return {
				id: event.id,
				name: event.name,
				date: event.date,
				actual_participants: event.actual_participants,
				duration: event.duration,
				target_year: event.target_year,
			};
		}) || []
	);
}

export type TChartTypeEvent = {
	id: string;
	name: string;
	count: number;
};

async function getYearWiseEventData(): Promise<TChartTypeEvent[]> {
	const allEventData = await getAllEvents();

	if (!allEventData) {
		return [];
	}

	// Create a map to count events per year
	const yearCountMap: Record<string, number> = {};

	// Iterate and count event per year
	allEventData.forEach((event) => {
		const year = event.date.substring(0, 4); // Get Year from Date
		yearCountMap[year] = (yearCountMap[year] || 0) + 1;
	});

	return Object.entries(yearCountMap).map(([year, count], index) => ({
		id: `chart-${index}`,
		name: year,
		count,
	}));
}



const Events = async () => {
	const data = await getData();
	const eventData = await getYearWiseEventData();

	return (
		<section className="flex flex-col w-full gap-4">
			<div className="flex w-full gap-4">
				<div className="w-[70%]">
					<Breadcrumb />

					{/* top cards */}
					<EventPageCard />

					<Tabs defaultValue="table" className="mt-8 w-full">
						<TabsList className="grid w-[20%] grid-cols-2">
							<TabsTrigger value="table">View All</TabsTrigger>
							<TabsTrigger value="domain" disabled>
								Domain View
							</TabsTrigger>
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
				<div className="w-[30%]  pr-4">
					<div className="flex w-full items-center justify-end gap-4">
						<EditFormModal />
						<Button variant="outline">Import from CSV</Button>
					</div>

					{/* side profile view */}
					<OnClickEventView />

					{/* graph */}
					<div className="mt-4 h-[40vh] w-full rounded-[7.54px] bg-white p-4">
						<Tabs defaultValue={TEXT_YEAR} className=" w-full">
							<TabsList
								defaultValue={TEXT_YEAR}
								className="grid w-full grid-cols-3"
							>
								<TabsTrigger defaultValue={TEXT_YEAR} value={TEXT_YEAR}>
									Year
								</TabsTrigger>
								<TabsTrigger value={TEXT_GENDER}>Gender</TabsTrigger>
								<TabsTrigger value="Domain">Domain</TabsTrigger>
							</TabsList>
							<TabsContent
								value={TEXT_YEAR}
								className="flex size-full items-center justify-center"
							>
								{ERR_NO_GRAPH_TO_SHOW}
							</TabsContent>
							<TabsContent
								value={TEXT_GENDER}
								className="flex size-full items-center justify-center"
							>
								{ERR_NO_GRAPH_TO_SHOW}
							</TabsContent>
							<TabsContent
								value="Domain"
								className="flex size-full items-center justify-center"
							>
								{ERR_NO_GRAPH_TO_SHOW}
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</div>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-8">
				<Card className="col-span-4">
					<CardHeader>
						<CardTitle>Year-Wise Event Count</CardTitle>
					</CardHeader>
					<CardContent className="pl-2">
						<OverviewBarChart
							data={eventData.map((chart) => ({
								...chart,
								name: chart.name ?? 'NULL',
							}))}
						/>
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
	);
};

export default Events;
