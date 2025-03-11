import GetStarted from '@/components/services/GetStarted'
import React from 'react'

const SubService = async ({params}:{params: Promise<{sub_service:string}>}) => {
  const { sub_service } = await params
  return (

    <div className="mt-16 flex items-center justify-center ">
        sub services {sub_service}      
      </div>
  )
}

export default SubService