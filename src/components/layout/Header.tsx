"use client"

import * as React from "react"
import { Bars3Icon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { Button } from "../ui/button"
import { IoIosArrowDown } from "react-icons/io";


const navigation = [
    {
        name: "About Us",
        href: "/about",
        isDropdown: true,
        subSections: [
            { name: "Careers", href: "/about/careers" },
            { name: "Meet the Team", href: "/about/meet-team" },
            { name: "Blog", href: "/about/blog" },
            { name: "About Our Clinic", href: "/about/clinic" },
        ]
    },
    {
        name: "Services",
        href: "/services",
        isDropdown: true,
        subSections: [
            {
                name: "General Dentistry",
                href: "/services/general-dentistry",
                subServices: [
                    { name: "Check-ups", href: "/services/general-dentistry/check-ups" },
                    { name: "Fillings", href: "/services/general-dentistry/fillings" },
                    { name: "Cleanings", href: "/services/general-dentistry/cleanings" }
                ]
            },
            {
                name: "Endodontics",
                href: "/services/endodontics",
                subServices: [
                    { name: "Root Canal Treatment", href: "/services/endodontics/root-canal" }
                ]
            },
            {
                name: "Cosmetic Dentistry",
                href: "/services/cosmetic-dentistry",
                subServices: [
                    { name: "Teeth Whitening", href: "/services/cosmetic-dentistry/teeth-whitening" },
                    { name: "Veneers", href: "/services/cosmetic-dentistry/veneers" }
                ]
            },
            {
                name: "Orthodontics",
                href: "/services/orthodontics",
                subServices: [
                    { name: "Braces", href: "/services/orthodontics/braces" },
                    { name: "Invisalign", href: "/services/orthodontics/invisalign" }
                ]
            },
            {
                name: "Restorative Dentistry",
                href: "/services/restorative-dentistry",
                subServices: [
                    { name: "Implants", href: "/services/restorative-dentistry/implants" },
                    { name: "Crowns", href: "/services/restorative-dentistry/crowns" },
                    { name: "Bridges", href: "/services/restorative-dentistry/bridges" }
                ]
            },
            {
                name: "Periodontal Treatment",
                href: "/services/periodontal-treatment"
            },
            {
                name: "Oral Surgery",
                href: "/services/oral-surgery"
            },
            {
                name: "Pediatric Dentistry",
                href: "/services/pediatric-dentistry"
            },
            {
                name: "Prosthodontics",
                href: "/services/prosthodontics"
            },
            {
                name: "Dental Hygiene",
                href: "/services/dental-hygiene"
            },
            {
                name: "Emergency Dentistry",
                href: "/services/emergency-dentistry"
            }
        ]
    },
    { name: "Contact Us", href: "/contact" },
]

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({});
    const [isScrolled, setIsScrolled] = React.useState(false);

    const toggleSection = (section: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section]
        }));
    };
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="fixed w-screen inset-x-0 top-0 z-50 transition-all duration-500 ">
            <nav aria-label="Global" className="flex flex-col">
                <div className={`flex items-center justify-between transition-all duration-500 shadow-sm  ${isScrolled ? "bg-[#FFF] shadow-sm" : "bg-transparent"}  px-8 lg:px-14 pb-1 pt-2`}>
                    {/* Logo */}
                    <Link href={"/"} className="flex items-center gap-2">
                        <div
                            style={{
                                backgroundImage: "url('/images/logo/logo-1.png')",
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                width: "70px",
                                height: "70px",
                            }}
                        ></div>
                        <h1 className="font-serif text-xl md:text-2xl font-semibold flex flex-col text-[#104b82]">
                            <span className="text-[#dd9639] text-2xl md:text-3xl">Classic</span>{" "}
                            Specialty
                        </h1>
                    </Link>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${isScrolled ? "text-gray-900": "text-white" }  transition-all ease-linear duration-300`}
                        >
                            {mobileMenuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <Bars3Icon aria-hidden="true" className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:gap-x-8 items-center text-xl  font-semibold">
                        {navigation.map((item) =>
                            item.isDropdown ? (
                                <div key={item.name} className="group inline-block relative">
                                    <Link href={item.href} className={`${isScrolled ? "text-gray-900": "text-white" } hover:text-primary-500 cursor-pointer `}>
                                        {item.name}
                                    </Link>
                                    {/* Main dropdown menu */}
                                    <ul className="absolute left-0 hidden text-gray-700  group-hover:block transition-all shadow-lg duration-300 ease-in-out border-t-4  border-[#104B82] ">
                                        {item.subSections?.map((subSection) => (
                                            <li
                                                key={subSection.name}
                                                className="relative group/item bg-white min-w-[290px] "
                                            >
                                                <Link
                                                    href={subSection.href}
                                                    className="rounded-t  block whitespace-no-wrap transition-all duration-200 ease-in-out "
                                                >
                                                    <p className="text-lg font-medium text-gray-900 group-hover/item:bg-gray-100  hover:bg-gray-100 px-5 py-2 flex justify-between gap-3">
                                                        {subSection.name}
                                                        {subSection.subServices && (
                                                            <IoIosArrowDown
                                                                size={20}
                                                                className="group-hover/item:rotate-180 transition-all duration-300"
                                                            />
                                                        )}
                                                    </p>
                                                </Link>
                                                {/* Show subServices when hovering over subSection */}
                                                {subSection.subServices && (
                                                    <ul className="absolute hidden text-gray-700 group-hover/item:block top-0 left-[290px] shadow-xl transition-all duration-200 ease-in-out border-t-4 border-[#104B82] min-w-[240px]">
                                                        {subSection.subServices?.map((subService) => (
                                                            <li key={subService.name}>
                                                                <Link
                                                                    href={subService.href}
                                                                    className="bg-white text-lg font-medium text-gray-900 hover:bg-gray-100 py-2 px-8 block  transition-all duration-200 ease-in-out "
                                                                >
                                                                    {subService.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`${isScrolled ? "text-gray-900": "text-white" }  hover:text-primary-500`}
                                >
                                    {item.name}
                                </Link>
                            )
                        )}
                        <div>
                            <Link href={"/appointment"}>
                                <Button variant="default" className="h-[50px] md:ml-20">
                                    Request Appointment
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile navigation  */}
                {mobileMenuOpen && (
                    <div className="inset-y-0 right-0 z-50 shadow-lg  bg-white px-8  text-xl font-semibold border-t-4 border-[#104B82] lg:hidden w-[80%] mx-auto max-h-[600px] overflow-y-scroll transition-all duration-300 ease-in">
                        <div className="">
                            <div className="space-y-2  ">
                                {navigation.map((item) =>
                                    item.isDropdown ? (
                                        <div
                                            key={item.name}
                                            className="space-y-2 cursor-pointer border-b-2"
                                        >
                                            <div className="flex justify-between items-center hover:bg-gray-50 px-2 py-2">
                                                <p className="text-gray-900">{item.name}</p>
                                                <button
                                                    onClick={() => toggleSection(item.name)}
                                                    className="text-gray-700 hover:bg-gray-100 rounded-md p-2"
                                                >
                                                    {openSections[item.name] ? (
                                                        <MinusIcon className="h-5 w-5" />
                                                    ) : (
                                                        <PlusIcon className="h-5 w-5" />
                                                    )}
                                                </button>
                                            </div>
                                            {openSections[item.name] && (
                                                <div className="pl-4 space-y-2">
                                                    {item.subSections.map((subSection) => (
                                                        <div key={subSection.name}>
                                                            <div className="flex justify-between text-lg px-3 py-2 text-gray-900 hover:bg-gray-50 border-b-2">
                                                                <Link href={subSection.href}>
                                                                    {subSection.name}
                                                                </Link>
                                                                {subSection.subServices && (
                                                                    <button
                                                                        onClick={() =>
                                                                            toggleSection(subSection.name)
                                                                        }
                                                                        className="text-gray-700 hover:bg-gray-100 rounded-md p-2"
                                                                    >
                                                                        {openSections[subSection.name] ? (
                                                                            <MinusIcon className="h-5 w-5" />
                                                                        ) : (
                                                                            <PlusIcon className="h-5 w-5" />
                                                                        )}
                                                                    </button>
                                                                )}
                                                            </div>
                                                            {subSection.subServices &&
                                                                openSections[subSection.name] && (
                                                                    <div className="pl-6 space-y-2  text-[16px]">
                                                                        {subSection.subServices.map(
                                                                            (subService) => (
                                                                                <Link
                                                                                    key={subService.name}
                                                                                    href={subService.href}
                                                                                    className="block border-b-2   last:border-0 px-3 py-2 text-gray-800 hover:bg-gray-50"
                                                                                >
                                                                                    {subService.name}
                                                                                </Link>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block py-3 px-2 text-gray-900 hover:bg-gray-50 border-b-2 last:border-0"
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </nav>
            {/* Mobile Menu Dialog */}
        </header>
    );
}

export default Header
