import { TrendingDownIcon, TrendingUpIcon, UserCheckIcon, SmileIcon, CalendarCheckIcon, AlertTriangleIcon, Users, CircleCheckBig } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
    return (
        <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-6">
            {/* Total Patients Today */}
            <Card className="@container/card">
                <CardHeader className="relative">
                    <CardDescription className="flex text-black text-lg gap-2 items-center mb-5">
                        <Users className="text-green-500" />
                        Total Patients Today
                    </CardDescription>
                    <CardTitle className="text-3xl font-semibold tabular-nums flex items-center gap-3">
                        125
                        <div className="right-4 top-4">
                            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs bg-green-100 border-green-300 text-green-500">
                                <TrendingUpIcon className="size-3" />
                                +10%
                            </Badge>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1 text-sm">
                    <div className="flex gap-2 font-medium items-center">
                        Increased patient visits <TrendingUpIcon className="size-4" />
                    </div>
                </CardFooter>
            </Card>

            {/* Appointments Scheduled */}
            <Card className="@container/card">
                <CardHeader className="relative">
                    <CardDescription className="flex text-black text-lg gap-2 items-center mb-5">
                        <CalendarCheckIcon className="text-green-500" />
                        Appointments Scheduled
                    </CardDescription>
                    <CardTitle className="text-3xl font-semibold tabular-nums flex items-center gap-3">
                        340
                        <div className="right-4 top-4">
                            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs bg-green-100 border-green-300 text-green-500">
                                <TrendingUpIcon className="size-3" />
                                +5%
                            </Badge>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1 text-sm">
                    <div className="flex gap-2 font-medium items-center">
                        More patients booking in advance <CalendarCheckIcon className="size-4" />
                    </div>
                </CardFooter>
            </Card>

            {/* Completed Procedures */}
            <Card className="@container/card">
                <CardHeader className="relative">
                    <CardDescription className="flex text-black text-lg gap-2 items-center mb-5">
                        <CircleCheckBig  className="text-green-500" />
                        Completed Procedures
                    </CardDescription>
                    <CardTitle className="text-3xl font-semibold tabular-nums flex items-center gap-3">
                        210
                        <div className="right-4 top-4">
                            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs bg-green-100 border-green-300 text-green-500">
                                <TrendingUpIcon className="size-3" />
                                +12%
                            </Badge>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1 text-sm">
                    <div className="flex gap-2 font-medium items-center">
                        More successful treatments <SmileIcon className="size-4" />
                    </div>
                </CardFooter>
            </Card>

            {/* Emergency Cases */}
            <Card className="@container/card">
                <CardHeader className="relative">
                    <CardDescription className="flex text-black text-lg gap-2 items-center mb-5">
                        <AlertTriangleIcon className="text-green-500" />
                        Emergency Cases
                    </CardDescription>
                    <CardTitle className="text-3xl font-semibold tabular-nums flex items-center gap-3">
                        8
                        <div className="right-4 top-4">
                            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs bg-green-100 border-green-300 text-green-500">
                                <TrendingDownIcon className="size-3" />
                                Critical
                            </Badge>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1 text-sm">
                    <div className="flex gap-2 font-medium items-center">
                        Immediate attention needed <AlertTriangleIcon className="size-4" />
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
