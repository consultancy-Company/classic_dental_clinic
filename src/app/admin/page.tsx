import { AppSidebar } from "@/components/admin/sidebar/app-sidebar"
import { ChartAreaInteractive } from "@/components/admin/sidebar/chart-area-interactive"
import { DataTable } from "@/components/admin/sidebar/data-table"
import { SectionCards } from "@/components/admin/sidebar/section-cards"
import { SiteHeader } from "@/components/admin/sidebar/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"


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
                            <div className="px-4 lg:px-6 grid grid-cols-2 gap-3">
                                <ChartAreaInteractive />
                                <DataTable />
                            </div>
                            <div className="px-4 lg:px-6">
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
