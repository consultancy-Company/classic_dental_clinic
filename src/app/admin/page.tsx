import { ChartAreaInteractive } from "@/components/admin/sidebar/chart-area-interactive"
import { SectionCards } from "@/components/admin/sidebar/section-cards"
import AppointmentList from "@/components/admin/appointment/appointment-list"
import { DataTable } from "@/components/admin/patient/PatientTable"
import data from './data.json'
import { AlertTriangleIcon, CalendarCheckIcon, CircleCheckBig, TrendingDownIcon, TrendingUpIcon, Users } from "lucide-react"

export default function Page() {
    const cardData = [
        {
            title: "Increased patient visits",
            value: 125,
            description: "Total Patients Today",
            icon: <Users className="text-[#0e4e81]" />,
            badge: { text: "+10%", icon: <TrendingUpIcon className="size-3" />, color: "green", textColor: "green", borderColor: "green" },
        },
        {
            title: "More patients booking in advance",
            value: 340,
            description: "Appointments Scheduled",
            icon: <CalendarCheckIcon className="text-[#0e4e81]" />,
            badge: { text: "+5%", icon: <TrendingUpIcon className="size-3" />, color: "green", textColor: "green", borderColor: "green" },
        },
        {
            title: "More successful treatments",
            value: 210,
            description: "Completed Procedures",
            icon: <CircleCheckBig className="text-[#0e4e81]" />,
            badge: { text: "+12%", icon: <TrendingUpIcon className="size-3" />, color: "green", textColor: "green", borderColor: "green" },
        },
        {
            title: "Immediate attention needed",
            value: 8,
            description: "Emergency Cases",
            icon: <AlertTriangleIcon className="text-[#0e4e81]" />,
            badge: { text: "Critical", icon: <TrendingDownIcon className="size-3" />, color: "green", textColor: "green", borderColor: "green" },
        },
    ];

    return (
        <div className="flex flex-1 flex-col px-4 lg:px-6">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                    <SectionCards data={cardData} />
                    <div className="flex gap-4">
                        <div className="w-[70%]  flex flex-col">
                            <ChartAreaInteractive />
                        </div>
                        <div className="w-[30%] ">
                            <AppointmentList />
                        </div>
                    </div>
                    <div className=" gap-5 flex flex-col">
                        <DataTable data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}
