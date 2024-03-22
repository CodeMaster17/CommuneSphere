import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface StatsHomeCardProps {
    number: number | null,
    description: string
}

const StatsHomeCard = ({ number, description }: StatsHomeCardProps) => {
    return (
        <Card className="w-[30%]">
            <CardHeader>
                <CardTitle>{number}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            {/* <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter> */}
        </Card>

    )
}

export default StatsHomeCard
