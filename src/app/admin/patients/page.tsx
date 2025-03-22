"use client"
import { DataTable } from '@/components/admin/patient/PatientTable'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import data from "../data.json"
import { SectionCards } from '@/components/admin/sidebar/section-cards'
import { AlertTriangleIcon, CalendarCheckIcon, CircleCheckBig, TrendingDownIcon, TrendingUpIcon, Users } from 'lucide-react'
import PatientForm from '@/components/admin/forms/patientForm'

type Props = {}

const page = (props: Props) => {
    const [showForm, setShowForm] = useState(true); // State to manage form visibility

    const cardData = [
        {
            title: "Total Patients",
            value: 125,
            description: "Number of all patients",
            icon: <Users className="text-[#0e4e81]" />,
            badge: { text: "+10%", icon: <TrendingUpIcon className="size-3" />, color: "green", textColor: "green", borderColor: "green" },
        },
        {
            title: "New Patients",
            value: 340,
            description: "Number of new patients",
            icon: <CalendarCheckIcon className="text-[#0e4e81]" />,
            badge: { text: "+5%", icon: <TrendingUpIcon className="size-3" />, color: "green", textColor: "green", borderColor: "green" },
        },
        {
            title: "Active Patients",
            value: 210,
            description: "Number of active patients",
            icon: <CircleCheckBig className="text-[#0e4e81]" />,
            badge: { text: "+12%", icon: <TrendingUpIcon className="size-3" />, color: "green", textColor: "green", borderColor: "green" },
        },
        {
            title: "Inactive Patients",
            value: 8,
            description: "Number of inactive patients",
            icon: <AlertTriangleIcon className="text-[#0e4e81]" />,
            badge: { text: "Critical", icon: <TrendingDownIcon className="size-3" />, color: "green", textColor: "green", borderColor: "green" },
        },
    ];
    return (
        <div className="flex flex-col gap-5 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
            <div className='flex justify-between mt-3'>
                <div>
                    <h1 className='text-2xl font-semibold'>Patients Lists</h1>
                    <p className='text-gray-500'>Here are the update patient list last 7 days </p>
                </div>
                <div className='flex gap-3'>
                    <Button
                        size="lg"
                        className="bg-[#0E4E81] hover:bg-[#0E4E81] font-semibold"
                    // onClick={() => setShowForm(!showForm)} // Toggle form visibility
                    >
                        {/* {showForm ? "Close Form" : "Add Appointment"} */} Add patient
                    </Button>
                </div>
            </div>
            <SectionCards data={cardData} />
            <DataTable data={data} />
            <PatientForm show={showForm} setShow={setShowForm} />

        </div>
    )
}

export default page