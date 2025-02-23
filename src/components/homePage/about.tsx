import Image from 'next/image'
import React from 'react'
import { FaHeart } from 'react-icons/fa6';
import { IoMdCheckmark } from "react-icons/io";
const About = () => {
    return (
        <div 
            className='w-full h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center' 
            style={{ backgroundImage: "url('/images/image0_0.jpg')" }}
        >
            <div className='w-[90%] mx-auto flex flex-wrap lg:flex-nowrap justify-between items-center border-2 rounded-3xl p-8'>
                
                {/* Left Content Section */}
                <div className='w-[50%] text-white'>
                    <h2 className='text-4xl font-extrabold mb-5'>🦷 Dentistry Done Right – Because Your Smile Matters!</h2>
                    <p className='text-lg leading-relaxed'>
                        We welcome patients of all ages, from <strong>curious 3-year-olds</strong> to <strong>wise seniors</strong>. 
                        Our expert team is committed to <strong>exceptional care, lifelong relationships, and stress-free experiences</strong> 
                        in a warm, welcoming environment.
                    </p>

                    {/* Key Benefits List with Icons */}
                    <ul className='mt-6 space-y-3 text-lg'>
                        <li className='flex items-center'>
                            <IoMdCheckmark className='text-[#dd9639] mr-2' size={30} /> <strong>Transparent & Honest Pricing</strong> – No surprises, just fair treatment.
                        </li>
                        <li className='flex items-center'>
                            <IoMdCheckmark className='text-[#dd9639] mr-2' size={30}/> <strong>Unmatched Warranty</strong> – We stand by our work with a guarantee.
                        </li>
                        <li className='flex items-center'>
                            <IoMdCheckmark className='text-[#dd9639] mr-2' size={30}/> <strong>FREE Lifetime Whitening!</strong> – Keep your smile shining, always.
                        </li>
                    </ul>

                    <p className='mt-6 italic text-xl flex'><FaHeart className='text-orange-500 ' size={30} /> <strong>Your Comfort, Our Priority!</strong> From painless treatments to cutting-edge technology, we ensure a gentle and satisfying dental experience.</p>

                </div>

                {/* Right Image Section */}
                <div className='flex-shrink-0 mt-6 lg:mt-0'>
                    <Image
                        src={"/images/d1.jpg"}
                        alt='Expert Dentist'
                        width={300}
                        height={300}
                        className='shadow-lg w-[400px] h-[300px]'
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default About
