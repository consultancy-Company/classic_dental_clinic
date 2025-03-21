import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ClipboardPlus, Ellipsis } from 'lucide-react'
import React from 'react'

type Props = {}

const appointments = [
    { name: 'Abel Mekonn', type: 'Canal test', date: 'Tomorrow', time: '10:00 AM' },
    { name: 'Sara Johnson', type: 'Teeth Cleaning', date: 'March 20', time: '2:00 PM' },
    { name: 'John Doe', type: 'Root Canal', date: 'March 21', time: '11:00 AM' },
    { name: 'Emily Smith', type: 'Braces Checkup', date: 'March 22', time: '3:30 PM' },
]

const AppointmentList = (props: Props) => {
    return (
        <div>
            <Card className='p-6'>
                <div className='flex justify-between mb-6'>
                    <p className='text-lg font-semibold flex gap-2'>
                        <ClipboardPlus className='self-center text-base text-[#3383c8]' />
                        Appointment List
                    </p>
                    <Ellipsis />
                </div>
                {appointments.map((appointment, index) => (
                    <div key={index} className='mb-4'>
                        <div className='flex justify-between mb-1'>
                            <div className='flex flex-col'>
                                <p className='text-[18px]'>{appointment.name}</p>
                                <span className='text-gray-600'>{appointment.type}</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p>{appointment.date}</p>
                                <span>{appointment.time}</span>
                            </div>

                        </div>
                        {index < appointments.length - 1 && <Separator />}
                    </div>
                ))}
            </Card>
        </div>
    )
}

export default AppointmentList
