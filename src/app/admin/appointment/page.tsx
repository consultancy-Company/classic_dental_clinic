import { AppointmentTable } from '@/components/admin/appointment/appointment-table'
import { SectionCards } from '@/components/admin/sidebar/section-cards'
import { AlertTriangleIcon, CalendarCheckIcon, CircleCheckBig, TrendingDownIcon, TrendingUpIcon, Users } from 'lucide-react'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    const cardData = [
        {
            title: "Total Patients",
            value: 125,
            description: "Number of Patients",
            icon: <Users className="text-green-500" />,
            badge: { text: "+10%", icon: <TrendingUpIcon className="size-3" />, color: "green", textColor: "green", borderColor: "green" },
        },
        {
            title: "Scheduled Appointments",
            value: 340,
            description: "Number of Appointments",
            icon: <CalendarCheckIcon className="text-green-500" />,
            badge: { text: "+5%", icon: <TrendingUpIcon className="size-3" />, color: "green", textColor: "green", borderColor: "green" },
        },
        {
            title: "Completed Procedures",
            value: 210,
            description: "Number of Procedures",
            icon: <CircleCheckBig className="text-green-500" />,
            badge: { text: "+12%", icon: <TrendingUpIcon className="size-3" />, color: "green", textColor: "green", borderColor: "green" },
        },
        {
            title: "Emergency Cases",
            value: 8,
            description: "Number of Cases",
            icon: <AlertTriangleIcon className="text-green-500" />,
            badge: { text: "Critical", icon: <TrendingDownIcon className="size-3" />, color: "green", textColor: "green", borderColor: "green" },
        },
    ]

    return (
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
            <SectionCards data={cardData}/>
            <AppointmentTable />
        </div>
    )
}

export default page