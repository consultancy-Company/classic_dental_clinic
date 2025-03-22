import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { IoClose } from 'react-icons/io5'

interface PatientFormProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>; // State updater function to hide form
}

const PatientForm = ({show , setShow} : PatientFormProps) => {
  return (
    <Card className='mx-auto px-3 pt-6 fixed top-0 right-0 mt-8 mr-3 min-w-xl z-50'>
      <CardHeader >
        <div className="flex justify-between">
          <CardTitle>Patient Form </CardTitle>
          <button className="flex justify-end">
            <IoClose size={30} onClick={() => setShow(false)} />
          </button>
        </div>
      </CardHeader>
    </Card>
  )
}

export default PatientForm