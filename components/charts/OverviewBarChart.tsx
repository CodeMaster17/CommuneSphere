"use client"
import React, { PureComponent } from 'react';
import {
	BarChart,
	Bar,
	Rectangle,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

type OverviewBarChartProps = {
	data: { name: string; count: number }[];
};

export default class OverviewBarChart extends PureComponent<OverviewBarChartProps> {
	render() {
		const { data } = this.props;

		return (
			<div className="w-full h-[400px] bg-white p-4 rounded-md">
				<ResponsiveContainer>
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Bar
							dataKey="count"
							fill="#9AB7FF"
							radius={[10, 10, 0, 0]}
							activeBar={<Rectangle />}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		);
	}
}
