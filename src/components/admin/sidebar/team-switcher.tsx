"use client"

import * as React from "react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import Image from "next/image"

export function TeamSwitcher() {
    const { isMobile } = useSidebar()

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="md"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <div className="flex aspect-square  items-center justify-center rounded-lg  text-sidebar-primary-foreground">
                                <Image 
                                    src={"/images/logo/logo-1.png"}
                                    width={100}
                                    height={100}
                                    alt="logo"
                                    className="bg-cover"
                                />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">
                                    Classic dental
                                </span>
                            </div>
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
