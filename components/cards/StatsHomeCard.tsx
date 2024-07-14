import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

interface StatsHomeCardProps {
    number: number | null,
    description: string
}

const StatsHomeCard = ({ number, description }: StatsHomeCardProps) => {
    return (
        <Card className="w-[20%]">
            <CardHeader>
                <CardTitle>{number}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
        </Card>

    )
}

export default StatsHomeCard
