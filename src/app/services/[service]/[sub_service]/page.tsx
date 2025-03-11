import React from 'react'

const SubService = async ({params}:{params: Promise<{sub_service:string}>}) => {
  const { sub_service } = await params
  return (
    <div className="flex items-center justify-center h-screen">SubService : {sub_service}</div>
  )
}

export default SubService