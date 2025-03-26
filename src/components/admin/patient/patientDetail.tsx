import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'
import { ArrowUpRight, Cake, CalendarCheck, Home, Mail, Phone, VenusAndMars } from 'lucide-react'
import React from 'react'
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts'

const chartData = [
  { browser: "safari", visitors: 23, fill: "var(--color-safari)" },
]
const chartConfig = {
  visitors: {
    label: "Days",
  },
  safari: {
    label: "Safari",
    color: "rgb(36,145,235)",
  },
} satisfies ChartConfig


const PatientDetail = (props: Props) => {
  return (
    <div >
      <div className='grid grid-cols-3 gap-3'>
        <Card>
          <CardHeader>
            <p className='font-heading font-[600] text-xl '>General Information</p>
          </CardHeader>
          <CardContent>
            <div className='flex gap-3 mb-7 items-center'>
              <VenusAndMars />
              <div>
                <p className='text-sm text-gray-500'>Gender</p>
                <p>Male</p>
              </div>
            </div>
            <div className='flex gap-3 mb-7 items-center'>
              <Cake />
              <div>
                <p className='text-sm text-gray-500'>Birth date</p>
                <p>Jan-20-2000</p>
              </div>
            </div>
            <div className='flex gap-3 mb-7 items-center'>
              <Phone />
              <div>
                <p className='text-sm text-gray-500'>Phone Number</p>
                <p>096637523542</p>
              </div>
            </div>
            <div className='flex gap-3 mb-7 items-center'>
              <Mail />
              <div>
                <p className='text-sm text-gray-500'>Mail</p>
                <p>jhone@gmailcom</p>
              </div>
            </div>
            <div className="flex gap-3 mb-7 items-center">
              <Home />
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p>1234 Elm St, Springfield</p>
              </div>
            </div>
            <div className="flex gap-3 mb-7 items-center">
              <CalendarCheck />
              <div>
                <p className="text-sm text-gray-500">Last Visit</p>
                <p>Feb-10-2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="max-h-[540px] relative overflow-hidden">
          <CardHeader  >
            <p className="font-heading font-[600] text-xl">Appointment Schedule</p>
          </CardHeader >
          <div className="relative px-2">
            <p className="absolute top-0 mt-2 left-[17px] h-[90%] border-2 border-dashed border-[#56a9ec]"></p>

            {[...Array(4)].map((_, index) => (
              <CardContent key={index} className={`${index === 3 ? "opacity-50" : ""}`}>
                <div className="absolute left-[7px] flex items-center justify-center h-6 w-6 border-2 bg-[#ffffff] border-[#2e92e3] rounded-full">
                  <div className="h-4 w-4 bg-[#2a91e6] rounded-full"></div>
                </div>
                <p className="text-sm text-gray-500 px-2 mb-1">Jan-20-2024</p>
                <Card>
                  <CardHeader>
                    Brace treatment
                    <p className="text-sm text-gray-400">Follow-up for braces adjustment.</p>
                  </CardHeader>
                </Card>
              </CardContent>
            ))}
          </div>

          {/* Fading overlay at the bottom */}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
        </Card>
        <div >
          <Card className='pb-4'>
            <CardHeader className='font-heading font-[600] text-xl'>
              Member dentalical
            </CardHeader>
            <div className='flex '>
              <CardContent className="flex-1 pb-0">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square max-h-[200px]"
                >
                  <RadialBarChart
                    data={chartData}
                    startAngle={-100}
                    endAngle={150}
                    innerRadius={80}
                    outerRadius={120}
                  >
                    <PolarGrid
                      gridType="circle"
                      radialLines={false}
                      stroke="none"
                      className="first:fill-muted last:fill-background"
                      polarRadius={[86, 74]}
                    />
                    <RadialBar dataKey="visitors" background cornerRadius={10} />
                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                      <Label
                        content={({ viewBox }) => {
                          if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                            return (
                              <text
                                x={viewBox.cx}
                                y={viewBox.cy}
                                textAnchor="middle"
                                dominantBaseline="middle"
                              >
                                <tspan
                                  x={viewBox.cx}
                                  y={viewBox.cy}
                                  className="fill-foreground text-4xl font-bold"
                                >
                                  {chartData[0].visitors.toLocaleString()}
                                </tspan>
                                <tspan
                                  x={viewBox.cx}
                                  y={(viewBox.cy || 0) + 24}
                                  className="fill-muted-foreground"
                                >
                                  Days
                                </tspan>
                              </text>
                            )
                          }
                        }}
                      />
                    </PolarRadiusAxis>
                  </RadialBarChart>
                </ChartContainer>
              </CardContent>
              <CardContent className='self-center mr-4'>
                <p className='text-gray-500'>Start date joined</p>
                <p className='font-semibold text-xl mb-3'>Jan 2 2025</p>
                <Button variant="outline" className='px-6 flex items-center font-semibold text-[17px]'>
                  Extend <ArrowUpRight />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PatientDetail