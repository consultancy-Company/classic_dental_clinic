import Banner from '@/components/banner';
import React from 'react'

const page = () => {
  return (
    <div className="pt-[8%]">
      <Banner
        title="Regular Check-Ups for a Healthier Smile"
        buttonText="Request Appointment"
        phoneNumber="(251) 9743-8521"
      />
    </div>
  );
}

export default page