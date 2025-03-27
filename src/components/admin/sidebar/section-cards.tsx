import { TrendingDownIcon, TrendingUpIcon, UserCheckIcon, SmileIcon, CalendarCheckIcon, AlertTriangleIcon, Users, CircleCheckBig } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface CardProps {
    value: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    badge?: {
        text: string;
        icon: React.ReactNode;
        color: string;
        textColor: string;
        borderColor: string;
    };
}

function SectionCard({ title, value, description, icon, badge }: CardProps) {
    return (
        <Card className="@container/card card-bg">
            <CardHeader className="relative">
                <CardDescription className="flex text-white text-lg gap-2 items-center mb-5">
                    {icon}
                    {description}
                </CardDescription>
                <CardTitle className="text-3xl font-semibold tabular-nums flex items-center gap-3 text-white">
                    {value}
                    {badge && (
                        <div className="right-4 top-4">
                            <Badge variant="outline" className={`flex gap-1 rounded-lg text-xs bg-[#67b3ee] border-[#358bcc] text-white`}>
                                {badge.icon}
                                {badge.text}
                            </Badge>
                        </div>
                    )}
                </CardTitle>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm text-white">
                <div className="flex gap-2 font-medium items-center">
                    {title} {icon}
                </div>
            </CardFooter>
        </Card>
    );
}

interface SectionCardsProps {
    data: CardProps[]; // Use the CardProps interface to define the structure of the data array
}

export function SectionCards({ data }: SectionCardsProps) {
    return (
        <div className="grid grid-cols-1 gap-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {data.map((card, index) => (
                <SectionCard key={index} {...card} />
            ))}
        </div>
    );
}
