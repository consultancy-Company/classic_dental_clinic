"use client"

import * as React from "react"
import {
    LayoutDashboardIcon,
    UsersIcon,
    CalendarIcon,
    StethoscopeIcon,
    ClipboardListIcon,
    FileTextIcon,
    DatabaseIcon,
    SettingsIcon,
    HelpCircleIcon,
    SearchIcon,
    UserPlusIcon,
    FileCodeIcon,
    ArrowUpCircleIcon,
    BoxIcon,
    Stethoscope
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { NavSecondary } from "./nav-secondary"
import { NavProjects } from "./nav-projects"
import { title } from "process"
import { url } from "inspector"

// This is sample data.
const data = {
    user: {
        name: "Admin",
        email: "admin@hospital.com",
        avatar: "/avatars/admin.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "#",
            icon: LayoutDashboardIcon,
        },

    ],
    navManagement: [
        {
            title: "Medical Records",
            icon: FileTextIcon,
            url: "#",
            items: [
                {
                    title: "Active Records",
                    url: "#",
                },
                {
                    title: "Archived Records",
                    url: "#",
                },
            ],
        },
        {
            title: "Inventory",
            icon: DatabaseIcon,
            url: "#",
            items: [
                {
                    title: "Dental Supplies",
                    url: "#",
                },
                {
                    title: "Equipment",
                    url: "#",
                },
            ],
        },
        {
            title: "Staff Management",
            icon: UserPlusIcon,
            url: "#",
            items: [
                {
                    title: "Doctors",
                    url: "#",
                },
                {
                    title: "Nurses & Assistants",
                    url: "#",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Settings",
            url: "#",
            icon: SettingsIcon,
        },
        {
            title: "Get Help",
            url: "#",
            icon: HelpCircleIcon,
        },
        {
            title: "Search",
            url: "#",
            icon: SearchIcon,
        },
    ],
    clinic: [
        {
            title: "Appointments",
            url: "appointment",
            icon: CalendarIcon,
        },
        {
            title: "Patients",
            url: "#",
            icon:Stethoscope,
        },
        {
            title: "Billing",
            url: "#",
            icon: ClipboardListIcon,
        },
        {
            title:"Staff list",
            url:"#",
            icon: UsersIcon,
        }
    ],
    physicalAssets: [
        {
            title:"Stocks",
            url:"#",
            icon:BoxIcon
        }
    ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavMain items={data.clinic} name="Clinical"/>
                <NavMain items={data.physicalAssets} name="Physical Assets"/>
                {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}

