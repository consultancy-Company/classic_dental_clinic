import { AppSidebar } from "@/components/admin/sidebar/app-sidebar"
import { ChartAreaInteractive } from "@/components/admin/sidebar/chart-area-interactive"
import { AppointmentTable } from "@/components/admin/appointment/appointment-table"
import { SectionCards } from "@/components/admin/sidebar/section-cards"
import { SiteHeader } from "@/components/admin/sidebar/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import AppointmentList from "@/components/admin/appointment/appointment-list"


export default function Page() {
    return (
        <SidebarProvider>
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            <SectionCards />
                            <div className="flex ">
                                <div className="w-[70%] px-4 lg:px-6 gap-5 flex flex-col">
                                    <ChartAreaInteractive />
                                    <AppointmentTable />
                                </div>
                                <div className="w-full pr-4 lg:pr-6">
                                    <AppointmentList />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
