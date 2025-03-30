"use client"

import * as React from "react"
import { Label, Pie, PieChart, Legend } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { status: "Active", patients: 320, fill: "var(--color-active)" },
    { status: "Completed", patients: 180, fill: "var(--color-completed)" },
]

const chartConfig = {
    active: {
        label: "Active Patients",
        color: "hsl(var(--chart-1))",
    },
    completed: {
        label: "Completed Patients",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function PatientStatusChart() {
    const totalPatients = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.patients, 0)
    }, [])

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center ">
                <CardTitle>Patient Status</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Legend verticalAlign="top" align="center" wrapperStyle={{ paddingBottom: "10px" }} />
                        <Pie
                            data={chartData}
                            dataKey="patients"
                            nameKey="status"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalPatients.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Patients
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
