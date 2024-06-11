'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { EventRegisterSchema } from "@/schema/event-schema"
import { FormSuccess } from "@/components/shared/form-success/FormSuccess"
import { FormError } from "@/components/shared/form-error/FormError"

import { useState, useTransition } from "react"
import { registerEvent } from "@/actions/event.action"
import { Heading } from '@/components/shared/Heading'


const AddEvent = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [, startTransition] = useTransition();


    const form = useForm<z.infer<typeof EventRegisterSchema>>({
        resolver: zodResolver(EventRegisterSchema),
        defaultValues: {
            name: "",
            date: "",
            expected_participants: "500",
            actual_participants: "Upcoming",
            target_year: "First",
        }
    })

    function onSubmit(data: z.infer<typeof EventRegisterSchema>) {
        setError("");
        setSuccess("");
        startTransition(() => {
            registerEvent(data)
                .then((data: any) => {
                    setError(data.error);
                    setSuccess(data.success);
                });
        });

        console.log({ data })
    }

    return (
        <div className='my-10 w-full  rounded-md border border-gray-300 bg-white p-5'>
            <div className="ml-5">
                <Heading type="medium">
                    Add Event
                </Heading>
            </div>
            
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="col-span-3 w-full space-y-6 p-5">

                    <div className="grid grid-cols-2 gap-4 gap-x-10">
                        {/* event name */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Event name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter event name" {...field} className="border-gray-300 text-gray-500"/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* event date */}
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Event date</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter event date" type="date" {...field} className="border-gray-300 text-gray-500"/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Select Target Year */}
                        <FormField
                            control={form.control}
                            name="target_year"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Target year</FormLabel>
                                    {/* <Select onValueChange={field.onChange} defaultValue={field.value}> */}
                                    <Select onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger className="border-gray-300 text-gray-500">
                                                <SelectValue placeholder="Select events's target year" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="First">1</SelectItem>
                                            <SelectItem value="Second">2</SelectItem>
                                            <SelectItem value="Third">3</SelectItem>
                                            <SelectItem value="Fourth">4</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Duration of Event */}
                        <FormField
                            control={form.control}
                            name="duration"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Duration of event (in hours)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter duration of event" type="number" {...field} className="border-gray-300 text-gray-500"/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Expected Participants */}
                        <FormField
                            control={form.control}
                            name="expected_participants"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Expected participants</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter expected participants" {...field} className="border-gray-300 text-gray-500"/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Actual Participants */}
                        <FormField
                            control={form.control}
                            name="actual_participants"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Actual participants</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter actual participants" {...field} className="border-gray-300 text-gray-500"/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Location */}
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Location</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter location" type="text" {...field} className="border-gray-300 text-gray-500"/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Thumbnail link */}
                        <FormField
                            control={form.control}
                            name="event_thumbnail"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Thumbnail link</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter thumbnail link" type="text" {...field} className="border-gray-300 text-gray-500"/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <div className="flex justify-end pt-3">
                        <Button type="submit" className="h-[50%]">Save changes</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default AddEvent