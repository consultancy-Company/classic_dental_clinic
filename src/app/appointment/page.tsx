"use client";

import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Calendar } from '@/components/ui/calendar';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge"
import Image from 'next/image';
import { PhoneInput } from "@/components/ui/phone-input";
import { toast } from "@/hooks/use-toast";

type Props = {};

const formSchema = z.object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    phone: z.string().min(10, 'Phone number is required'),
    email: z.string().email('Invalid email'),
    date: z.date({ required_error: 'Date is required' }),
    time: z.string().min(1, 'Time is required')
});

const Page = (props: Props) => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            date: undefined,
            time: ''
        }
    });
    const openTime = 2;
    const closeTime = 11;
    const timeSlots = Array.from({ length: (closeTime - openTime) * 2 + 1 }, (_, i) => {
        const hour = openTime + Math.floor(i / 2);
        const minute = i % 2 === 0 ? '00' : '30';
        const period = hour < 12 ? 'AM' : 'PM';
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // Convert to 12-hour format
        return `${formattedHour}:${minute} ${period}`;
    });

    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (showToast) {
            toast({
                title: "Success",
                description: "You have successfully logged in.",
                variant: "success",
            });
            setShowToast(false);
        }
    }, [showToast]);

    function onSubmit(values: z.infer<typeof formSchema>) {
        const formattedDate = values.date ? format(values.date, 'yyyy-MM-dd') : '';

        console.log({ ...values, date: formattedDate });
        setShowToast(true);
    }

    return (
        <Layout>
            <div className=' flex justify-center items-center'>
                <Card className='flex max-w-6xl justify-center items-center h-max my-28 relative'>
                    {/* <div className='bg-primary border-none rounded-none  shadow-none min-h-screen w-[30%] flex justify-center items-center'>
                        <Image 
                        src={"/images/logo/classic_logo.png"}
                        alt='logo'
                        width={300}
                        height={400}
                        />

                    </div> */}
                    <Card className='border-none w-[90%] shadow-none '>
                        <CardHeader>
                            <h1 className='text-2xl font-bold text-center'>Appointment</h1>
                            <p className='text-center text-sm text-muted-foreground'>You can book an appointment with us.</p>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-4'>
                                    <div className='grid md:grid-cols-2 gap-6'>
                                        <FormField control={form.control} name='firstName' render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>First Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='Enter your first name' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                        <FormField control={form.control} name='lastName' render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Last Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='Enter your last name' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />

                                        <FormField control={form.control} name='phone' render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone</FormLabel>
                                                <FormControl>
                                                    <PhoneInput placeholder='Enter your phone number' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />

                                        <FormField control={form.control} name='email' render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='Enter your email' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                    </div>

                                    <FormField control={form.control} name='date' render={({ field }) => (
                                        <FormItem className='w-full flex flex-col justify-center'>
                                            <FormLabel className='text-primary mt-3 self-center text-center text-lg font-subheading'>Pick your suitable date </FormLabel>
                                            <FormControl className='w-full'>
                                                <Calendar
                                                    selected={selectedDate}
                                                    onSelect={setSelectedDate}
                                                    onDayClick={(date) => {
                                                        form.setValue('date', date);
                                                        setSelectedDate(date);
                                                    }}
                                                    className="h-full w-full flex"
                                                    classNames={{
                                                        months:
                                                            "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
                                                        month: "space-y-4 w-full flex flex-col",
                                                        table: "w-full h-full border-collapse space-y-1",
                                                        head_row: "",
                                                        row: "w-full mt-2",
                                                    }}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    <FormField control={form.control} name='time' render={({ field }) => (
                                        <FormItem className='w-full flex flex-col justify-center mb-10'>
                                            <FormLabel className='text-primary  self-center text-center text-lg font-subheading'>Pick available time </FormLabel>
                                            <FormControl>
                                                <div className='flex flex-wrap gap-3 mb-10'>
                                                    {timeSlots.map((slot) => (
                                                        <Badge
                                                            key={slot}
                                                            variant={field.value === slot ? 'default' : 'outline'}
                                                            onClick={() => form.setValue('time', slot)}
                                                            className='cursor-pointer *:hover:bg-secondary *:hover:text-secondary-foreground font-normal text-base p-3'
                                                        >
                                                            {slot}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    <Button type='submit' className='w-full h-10 text-lg font-semibold  button'>Book Now</Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </Card>
            </div>
        </Layout>
    );
};

export default Page;
