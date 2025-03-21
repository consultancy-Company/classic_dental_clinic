"use client"

import { MailIcon, PlusCircleIcon, type LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

export function NavMain({
    items, name
}: {
    name?: string
    items: {
        title: string
        url: string
        icon?: LucideIcon
    }[]
}) {
    return (
        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                {name && <SidebarGroupLabel><span className="text-[14px] -mb-2">{name}</span></SidebarGroupLabel>}
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton tooltip={item.title} >
                                <Link href={item.url} className="flex items-center gap-2">
                                    {item.icon && <item.icon />}
                                    <span className="text-[16px]">{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
