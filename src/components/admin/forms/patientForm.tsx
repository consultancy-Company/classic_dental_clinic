import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { UserPlus } from "lucide-react";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

interface PatientFormProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const sections = ["General Info", "Medical History", "Emergency Contact", "Dental Info"];

const PatientForm = ({ show, setShow }: PatientFormProps) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dateOfBirth: "",
    bloodType: "",
    medicalHistory: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    lastDentalVisit: "",
    gumCondition: "",
  });

  const handleNext = () => {
    // Basic validation - Ensure all fields in the current step are filled before moving forward
    const requiredFields = {
      0: ["name", "gender", "dateOfBirth", "bloodType"],
      1: ["medicalHistory"],
      2: ["emergencyContactName", "emergencyContactPhone"],
      3: ["lastDentalVisit", "gumCondition"],
    };

    const isValid = requiredFields[step].every((field) => formData[field as keyof typeof formData] !== "");

    if (isValid) {
      setStep((prev) => Math.min(prev + 1, sections.length - 1));
    } else {
      alert("Please fill in all required fields before proceeding.");
    }
  };

  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!show) return null;

  return (
    <Card className="mx-auto px-3 fixed top-0 right-0 mt-8 mr-3  z-50 shadow-lg bg-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Patient Form</CardTitle>
          <button
            className="text-gray-600 hover:text-red-500 transition"
            aria-label="Close form"
            onClick={() => setShow(false)}
          >
            <IoClose size={30} />
          </button>
        </div>
      </CardHeader>
      <Separator />

      {/* Section Navigation */}
      <CardContent>
        <div className="flex justify-between mt-4">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <UserPlus
                size={24}
                strokeWidth={3}
                className={`h-8 w-8 rounded-full p-2 text-white ${index === step ? "bg-blue-600" : "bg-gray-400"
                  }`}
              />
              <span className={`text-sm ${index === step ? "font-bold text-blue-600" : "text-gray-500"}`}>
                {section}
              </span>
            </div>
          ))}
        </div>
      </CardContent>

      {/* Form Sections */}
      <CardContent>
        {step === 0 && (
          <div className="space-y-4">
            <input type="text" name="name" placeholder="Full Name" className="w-full p-2 border rounded" onChange={handleChange} />
            <input type="text" name="email" placeholder="Email" className="w-full p-2 border rounded" onChange={handleChange}/>
            <input type="text" name="phoneNumber" placeholder="Phone number" className="w-full p-2 border rounded" onChange={handleChange}/>
            <input type="text" name="address" placeholder="address"/>
            <select name="gender" className="w-full p-2 border rounded" onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
            <input type="date" name="dateOfBirth" className="w-full p-2 border rounded" onChange={handleChange} />
            <select name="bloodType" className="w-full p-2 border rounded" onChange={handleChange}>
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <textarea name="medicalHistory" placeholder="Medical History" className="w-full p-2 border rounded" onChange={handleChange}></textarea>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <input type="text" name="emergencyContactName" placeholder="Emergency Contact Name" className="w-full p-2 border rounded" onChange={handleChange} />
            <input type="text" name="emergencyContactPhone" placeholder="Emergency Contact Phone" className="w-full p-2 border rounded" onChange={handleChange} />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <input type="date" name="lastDentalVisit" className="w-full p-2 border rounded" onChange={handleChange} />
            <select name="gumCondition" className="w-full p-2 border rounded" onChange={handleChange}>
              <option value="">Select Gum Condition</option>
              <option value="Healthy">Healthy</option>
              <option value="Gingivitis">Gingivitis</option>
              <option value="Periodontitis">Periodontitis</option>
            </select>
          </div>
        )}
      </CardContent>

      {/* Navigation Buttons */}
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handlePrev} disabled={step === 0}>
          Previous
        </Button>
        <Button onClick={handleNext}>{step === sections.length - 1 ? "Submit" : "Next"}</Button>
      </CardFooter>
    </Card>
  );
};

export default PatientForm;
