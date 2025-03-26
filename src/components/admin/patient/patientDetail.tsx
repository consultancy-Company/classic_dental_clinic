import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { Cake, Mail, Phone, VenusAndMars } from 'lucide-react'
import React from 'react'

type Props = {}

const PatientDetail = (props: Props) => {
  return (
    <div >
      <div className='grid grid-cols-3 gap-3'>
        <Card>
          <CardHeader>
            <p className='text-xl font-medium '>General Information</p>
          </CardHeader>
          <CardContent>
            <div className='flex gap-3 mb-7 items-center'>
              <VenusAndMars />
              <div>
                <p className='text-sm text-gray-500'>Gender</p>
                <p>Male</p>
              </div>
            </div>
            <div className='flex gap-3 mb-7 items-center'>
              <Cake />
              <div>
                <p className='text-sm text-gray-500'>Birth date</p>
                <p>Jan-20-2000</p>
              </div>
            </div>
            <div className='flex gap-3 mb-7 items-center'>
              <Phone />
              <div>
                <p className='text-sm text-gray-500'>Phone Number</p>
                <p>096637523542</p>
              </div>
            </div>
            <div className='flex gap-3 mb-7 items-center'>
              <Mail />
              <div>
                <p className='text-sm text-gray-500'>Mail</p>
                <p>jhone@gmailcom</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card >
          <CardHeader>
            <p className='text-xl font-medium '>Appointment Schedule</p>
          </CardHeader>
          <div className='relative px-2'>
            <p className='absolute top-0 mt-2 left-4 h-full w-[4px] bg-[#97b9d5]'></p>
            <CardContent>
              <div className="absolute left-[7px] flex items-center justify-center h-6 w-6 border-2 border-dashed border-[#0E4E81] rounded-full">
                <div className="h-4 w-4 bg-[#0E4E81] rounded-full"></div>
              </div>
              <p className="text-sm text-gray-500 px-2 mb-1"> jan-20-2024</p>
              <Card>
                <CardHeader>
                  Brace treatment
                </CardHeader>
              </Card>
            </CardContent>
            <CardContent>
              <div className="absolute left-[7px] flex items-center justify-center h-6 w-6 border-2 border-dashed border-[#0E4E81] rounded-full">
                <div className="h-4 w-4 bg-[#0E4E81] rounded-full"></div>
              </div>

              <p className="text-sm text-gray-500 px-2 mb-1"> jan-20-2024</p>
              <Card>
                <CardHeader>
                  Brace treatment
                </CardHeader>
                {/* <CardContent>
                    
                  </CardContent> */}
              </Card>
            </CardContent>
            <CardContent>
              <div className="absolute left-[7px] flex items-center justify-center h-6 w-6 border-2 border-dashed border-[#0E4E81] rounded-full">
                <div className="h-4 w-4 bg-[#0E4E81] rounded-full"></div>
              </div>
              <p className="text-sm text-gray-500 px-2 mb-1"> jan-20-2024</p>
              <Card>
                <CardHeader>
                  Brace treatment
                </CardHeader>
                {/* <CardContent>
                    
                  </CardContent> */}
              </Card>
            </CardContent>

          </div>
        </Card>
        <div >
        </div>
      </div>
    </div>
  )
}

export default PatientDetail