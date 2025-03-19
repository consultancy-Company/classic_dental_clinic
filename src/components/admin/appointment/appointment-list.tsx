import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Ellipsis } from 'lucide-react'
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
                    <p className='text-lg font-semibold'>Appointment List</p>
                    <Ellipsis />
                </div>
                {appointments.map((appointment, index) => (
                    <div key={index}>
                        <div className='flex justify-between mb-3'>
                            <div className='flex flex-col'>
                                <p className='text-[18px]'>{appointment.name}</p>
                                <span className='text-gray-600'>{appointment.type}</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p>{appointment.date}</p>
                                <span>{appointment.time}</span>
                            </div>
                            <Button className='bg-green-500 hover:bg-green-600 text-white font-semibold h-9 self-center'>
                                Accept
                            </Button>
                        </div>
                        {index < appointments.length - 1 && <Separator />}
                    </div>
                ))}
            </Card>
        </div>
    )
}

export default AppointmentList
