import React, { useEffect, useState, useRef } from "react";
import { treatmentSteps } from "@/lib/data/services";

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
            { threshold: 0.6 } // Step becomes active when 60% visible
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
        <div className="max-w-3xl mx-auto px-12 py-20 bg-white">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Treatment Steps
            </h1>

            {steps ? (
                <div className="relative">
                    <h2 className="text-xl font-semibold mb-10 text-center text-[#DD9639]">
                        {treatmentName}
                    </h2>

                    <ul className="relative space-y-8 w-[80%] md:w-[60%] mx-auto">
                        {steps.map((step, index) => (
                            <li
                                key={index}
                                ref={(el) => (stepsRef.current[index] = el)}
                                className="relative flex items-center gap-6 transition-all duration-300"
                            >
                                {/* Vertical line with animation */}
                                {index !== steps.length - 1 && (
                                    <div
                                        className={`absolute left-[23px] top-[50px] h-[60px] w-[3px] transition-all duration-1000 ${activeStep !== null && activeStep >= index ? "bg-[#DD9639]" : "bg-gray-300"
                                            }`}
                                    ></div>
                                )}

                                {/* Step number (circle) with animation */}
                                <div
                                    className={`h-[50px] w-[50px] rounded-full flex justify-center items-center text-lg font-bold shadow-md transition-all duration-1000 ${activeStep !== null && activeStep >= index
                                        ? "bg-[#DD9639] text-white"
                                        : "bg-gray-300 text-gray-700"
                                        }`}
                                >
                                    {index + 1}
                                </div>

                                {/* Step description */}
                                <div className="text-lg text-gray-800">{step}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className="text-red-500 text-center mt-4">
                    No steps available for this treatment.
                </p>
            )}
        </div>
    );
};

export default TreatmentSteps;
