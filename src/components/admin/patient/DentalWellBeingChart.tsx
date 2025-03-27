"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Dental health progress data
const chartData = [
    { month: "Jan", health: 75 },
    { month: "Feb", health: 78 },
    { month: "Mar", health: 80 },
    { month: "Apr", health: 85 },
    { month: "May", health: 88 },
    { month: "Jun", health: 90 },
];
const chartConfig = {
    desktop: {
        label: "Health",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export default function DentalHealthChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Dental Well-being Progress</CardTitle>
            </CardHeader>
            <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar dataKey="health" fill="var(--color-desktop)" radius={8} />
                </BarChart>
            </ChartContainer>

        </Card>
    );
}
