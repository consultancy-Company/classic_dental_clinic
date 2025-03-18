import React, { useEffect, useState, useRef } from "react";
import { treatmentSteps } from "@/lib/data/services";
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from "framer-motion";

type Props = {
    treatmentName: string;
};

const TreatmentSteps = ({ treatmentName }: Props) => {
    const steps = (treatmentSteps as { [key: string]: string[] })[treatmentName];
    const [activeStep, setActiveStep] = useState<number | null>(null);
    const stepsRef = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = stepsRef.current.findIndex((el) => el === entry.target);
                        if (index !== -1) {
                            setActiveStep(index);
                        }
                    }
                });
            },
            { threshold: 0.6 }
        );

        const currentSteps = stepsRef.current;
        currentSteps.forEach((step) => {
            if (step) observer.observe(step);
        });

        return () => {
            currentSteps.forEach((step) => {
                if (step) observer.unobserve(step);
            });
        };
    }, []);

    return (
        <div className="py-14 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center text-gray-800 mb-12"
                >
                    Treatment Steps
                </motion.h2>
                <div className="relative w-[90%] md:w-[80%] mx-auto">
                    <div className="relative ">
                        <div className="absolute ml-3 md:ml-0  md:block w-1 bg-[#104B82] h-full md:left-1/2 transform -translate-x-1/2"></div>
                        {steps?.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`md:flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} `}
                            >
                                <div className="relative md:w-1/2 px-8 py-4">
                                    <div className={`absolute w-12 h-12 rounded-full top-0 flex items-center justify-center ${index % 2 === 0 ? '-left-4' : '-right-4'}`}>
                                        <FaCheckCircle size={24} className="text-[#104B82]" />
                                    </div>
                                    <div className={`bg-white p-6 rounded-lg shadow-sm ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                                        <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                                            Step {index + 1}
                                        </h3>
                                        <p className="text-gray-900 text-xl mt-2 font-body">{step}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreatmentSteps;
