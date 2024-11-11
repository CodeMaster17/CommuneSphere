import {
	getAllUsers,
	getDataYear,
	getDataGender,
	getDataDomain,
} from '@/actions/user.action';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { UserType, columns } from '@/components/table/member/member-column';
import { useDisplayYear } from '@/hooks/use-display-data';
import TableData from '@/components/member/TableData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DomainWiseData from '@/components/member/DomainWiseData';
import MemberPageCard from '@/components/member/MemberPageCard';
import OnClickProfileView from '@/components/member/OnClickProfileView';
import { useCurrentRole } from '@/hooks/use-current-role';
import MemberPageActionButtons from '@/components/member/MemberPageActionButtons';
import { UserRole } from '@prisma/client';
import OverviewPieChart from '@/components/charts/OverviewPieChart';
import { COLORS } from '@/constants/members_piechart_constants';

export type TChartTypeYear = {
	id: string;
	name: string | null;
	value: number;
};

export type TChartTypeGender = {
	id: string;
	name: string;
	value: number;
};

export type TChartTypeDomain = {
	id: string;
	domain: string;
	value: number;
};

async function getData(): Promise<UserType[]> {
	const data = await getAllUsers();

	// only returning the required fields
	return (
		data?.map((user, index) => ({
			sno: index + 1,
			id: user.id,
			name: user.name,
			email: user.email,
			role: user.role,
			position: user.position,
			current_year: user.current_year,
			year_of_joining:
				(useDisplayYear(user.year_of_joining) as '2021') ||
				'2022' ||
				'2023' ||
				'2024' ||
				'2025' ||
				null,
		})) || []
	);
}

async function getChartDataYear(): Promise<TChartTypeYear[]> {
	const chartDataYear = await getDataYear();

	return (
		chartDataYear?.map((chart, index) => ({
			id: `chart-${index}`,
			name: chart.name ?? 'NULL',
			value: chart.value,
		})) || []
	);
}

async function getChartDataGender(): Promise<TChartTypeGender[]> {
	const chartDataGender = await getDataGender();

	return (
		chartDataGender?.map((chart, index) => ({
			id: `chart-${index}`,
			name: chart.name ?? 'NULL',
			value: chart.value,
		})) || []
	);
}

async function getChartDataDomain(): Promise<TChartTypeDomain[]> {
	const chartDataDomain = await getDataDomain();

	return (
		chartDataDomain?.map((chart, index) => ({
			id: `chart-${index}`,
			domain: chart.domain ?? 'Unknown', // Assign 'Unknown' if domain is null or undefined
			value: chart.value,
		})) || []
	);
}

const Members = async () => {
	// fetching data from user
	const data = await getData();
	const role = await useCurrentRole();
	const yearData = await getChartDataYear();
	const genderData = await getChartDataGender();
	const domainData = await getChartDataDomain();

	return (
		<section className="flex w-full gap-4">
			<div className="w-[70%]">
				<Breadcrumb />
				<MemberPageCard />

				<Tabs defaultValue="table" className="mt-8 w-full">
					<TabsList className="grid w-[20%] grid-cols-2">
						<TabsTrigger value="table">View All</TabsTrigger>
						<TabsTrigger value="domain" disabled>
							Domain View
						</TabsTrigger>
					</TabsList>
					<TabsContent value="table">
						<TableData data={data} columns={columns} />
					</TabsContent>
					<TabsContent value="domain">
						<DomainWiseData />
					</TabsContent>
				</Tabs>
			</div>
			<div className="w-[30%] pr-4">
				{role === UserRole.ADMIN && <MemberPageActionButtons />}
				<OnClickProfileView />

				{/* graph */}
				<div className="mt-4 h-96 w-full rounded-[7.54px] bg-white p-4">
					<Tabs defaultValue="Year" className="w-full">
						<TabsList className="grid w-full grid-cols-3">
							<TabsTrigger value="Year">Year</TabsTrigger>
							<TabsTrigger value="Gender">Gender</TabsTrigger>
							<TabsTrigger value="Domain">Domain</TabsTrigger>
						</TabsList>

						<TabsContent
							value="Year"
							className="flex items-center justify-center"
						>
							<OverviewPieChart
								data={yearData.map((chart) => ({
									...chart,
									name: chart.name ?? 'NULL',
								}))}
								colors={COLORS}
							/>
						</TabsContent>
						<TabsContent
							value="Gender"
							className="flex items-center justify-center"
						>
							<OverviewPieChart
								data={genderData.map((chart) => ({
									...chart,
									name: chart.name ?? 'NULL',
								}))}
								colors={COLORS}
							/>
						</TabsContent>
						<TabsContent
							value="Domain"
							className="flex items-center justify-center"
						>
							<OverviewPieChart
								data={domainData.map((chart) => ({
									...chart,
									name: chart.domain, // Rename 'name' to 'domain' for ChartTypeDomain
								}))}
								colors={COLORS}
							/>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</section>
	);
};

export default Members;
