// StatCard.tsx
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Loader } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    isPending: boolean;
}

const StatsHomeCard: React.FC<StatCardProps> = ({ title, value, icon, isPending }) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{isPending ? <Loader className="h-4 w-4 animate-spin" /> : value}</div>
            </CardContent>
        </Card>
    );
};

export default StatsHomeCard;
