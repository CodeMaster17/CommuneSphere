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


const AddEvent = () => {

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
                // .then((data: any) => {
                //     setError(data.error);
                //     setSuccess(data.success);
                // });
        });

        console.log({ data })
    }

    return (
        <div className='w-full'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 col-span-3">

                    <div className="grid gap-4 py-4 border-2">
                        {/* event name */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Event name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Event name" {...field} />
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
                                    <FormLabel>Event Date</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Event date" type="date" {...field} />
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
                                    <FormLabel>Select Target Year</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Events's Target year" />
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
                                    <FormLabel>Duration of Event (in hours)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="duration of event" type="number" {...field} />
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
                                    <FormLabel>Expected Participants</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Expected Participants" {...field} />
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
                                    <FormLabel>Actual Participants</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Actual Participants" {...field} />
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
                                        <Input placeholder="Location" type="text" {...field} />
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
                                        <Input placeholder="Thumbnail Link" type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button type="submit">Save changes</Button>
                </form>
            </Form>
        </div>
    )
}

export default AddEvent