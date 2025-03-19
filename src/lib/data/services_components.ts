import DentalCleaning from "@/components/services/general/DentalCleaning";
import CheckUps from "@/components/services/general/CheckUps";
import Fillings from "@/components/services/general/Fillings";
import RootCanal from "@/components/services/endodontics/RootCanal";
import TeethWhitening from "@/components/services/cosmetic/TeethWhitening";
import Veneers from "@/components/services/cosmetic/Veneers";
import Braces from "@/components/services/orthodontics/Braces";
import Invisalign from "@/components/services/orthodontics/Invisalign";
import Implants from "@/components/services/restorative/Implants";
import Crowns from "@/components/services/restorative/Crowns";
import Bridges from "@/components/services/restorative/Bridges";
import PeriodontalTreatment from "@/components/services/others/PeriodontalTreatment";
import OralSurgery from "@/components/services/others/OralSurgery";
import PediatricDentistry from "@/components/services/others/PediatricDentistry";
import Prosthodontics from "@/components/services/others/Prosthodontics";
import DentalHygiene from "@/components/services/others/DentalHygiene";
import EmergencyDentistry from "@/components/services/others/EmergencyDentistry";

const needs_components = {
  name: "Services",
  href: "/services",
  isDropdown: true,
  subSections: [
    {
      name: "General Dentistry",
      href: "/services",
      subServices: [
        { name: "Check-ups", href: "/services/check-ups" },
        { name: "Fillings", href: "/services/fillings" },
        { name: "Cleanings", href: "/services/cleanings" },
      ],
    },
    {
      name: "Endodontics",
      href: "/services",
      subServices: [
        { name: "Root Canal Treatment", href: "/services/root-canal" },
      ],
    },
    {
      name: "Cosmetic Dentistry",
      href: "/services",
      subServices: [
        { name: "Teeth Whitening", href: "/services/teeth-whitening" },
        { name: "Veneers", href: "/services/veneers" },
      ],
    },
    {
      name: "Orthodontics",
      href: "/services",
      subServices: [
        { name: "Braces", href: "/services/braces" },
        { name: "Invisalign", href: "/services/invisalign" },
      ],
    },
    {
      name: "Restorative Dentistry",
      href: "/services",
      subServices: [
        { name: "Implants", href: "/services/implants" },
        { name: "Crowns", href: "/services/crowns" },
        { name: "Bridges", href: "/services/bridges" },
      ],
    },
    {
      name: "Periodontal Treatment",
      href: "/services/periodontal-treatment",
    },
    {
      name: "Oral Surgery",
      href: "/services/oral-surgery",
    },
    {
      name: "Pediatric Dentistry",
      href: "/services/pediatric-dentistry",
    },
    {
      name: "Prosthodontics",
      href: "/services/prosthodontics",
    },
    {
      name: "Dental Hygiene",
      href: "/services/dental-hygiene",
    },
    {
      name: "Emergency Dentistry",
      href: "/services/emergency-dentistry",
    },
  ],
};

export const service_components = {
  "check-ups": [CheckUps], // we add in the array any components specific to this route
  fillings: [Fillings],
  cleanings: [DentalCleaning],
  "root-canal": [RootCanal],
  "teeth-whitening": [TeethWhitening],
  veneers: [Veneers],
  braces: [Braces],
  invisalign: [Invisalign],
  implants: [Implants],
  crowns: [Crowns],
  bridges: [Bridges],

  "periodontal-treatment": [PeriodontalTreatment],
  "oral-surgery": [OralSurgery],
  "pediatric-dentistry": [PediatricDentistry],
  prosthodontics: [Prosthodontics],
  "dental-hygiene": [DentalHygiene],
  "emergency-dentistry": [EmergencyDentistry],
};
