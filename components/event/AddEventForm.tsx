'use client'
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'
import { Label } from "@/components/ui/label"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from "next/image"

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

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { EventRegisterSchema } from "@/schema/event-schema"
import { FormSuccess } from "@/components/shared/form-success/FormSuccess"
import { FormError } from "@/components/shared/form-error/FormError"
import { toast } from "sonner"

import { useState, useTransition } from "react"
import { registerEvent } from "@/actions/event.action"
import { Heading } from '@/components/shared/Heading'
import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';


const AddEventForm = ({ closeModalFunction }) => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();


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
                    toast("Event has been created.")
                }).catch((error) => {
                    console.error("Error during form submission:", error);
                    setError("An error occurred during submission.");
                    toast("Error adding event.");
                });;
        });

        console.log({ data })
    }

    return (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 col-span-3 p-5">

                    <div className="flex flex-col w-full justify-center gap-4 bg-white">
                        <div className="flex w-full items-center justify-center gap-4">
                        <Image src="/events-thumbnail.png" alt="intro" width={300} height={100} className="" />
                            <div className="space-y-2">
                              <Button className='rounded-md text-xs h-9 w-40 flex bg-white border-2 bg-bluePrimary border-bluePrimary text-white gap-2 hover:bg-white hover:text-bluePrimary'>
                                  <Pencil className='w-4 h-4'/>Add Image
                              </Button>
                              <Button className='rounded-md text-xs h-9 w-40 flex bg-white border-2 border-errorRed text-errorRed gap-2 hover:bg-errorRed hover:text-white'>
                                  <Trash2 className='w-4 h-4'/>Remove Image
                              </Button>
                    </div>
                        </div>
                    

                <div className="grid flex-1 grid-cols-2 gap-2">

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
                    </div>

                    <FormError message={error} />
                <FormSuccess message={success} />
                <div className='flex justify-between'>

                    <Button type="button" className='border-2 border-errorRed bg-white text-errorRed hover:bg-errorRed hover:text-white' onClick={closeModalFunction}>close</Button>
                    <Button type="submit" className='border-2 border-sucessGreen bg-white text-sucessGreen hover:bg-sucessGreen hover:text-white' onClick={(event: React.MouseEvent<HTMLButtonElement>) => onSubmit(form.getValues())}>Save changes</Button>
                </div>

            </form>
            </Form>
    )
}

export default AddEventForm