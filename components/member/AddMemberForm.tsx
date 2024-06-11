'use client'
import React, { useState, useTransition } from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from "@/components/ui/input"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { RegisterSchema } from '@/schema'
import { Button } from '../ui/button'
import { registerUser } from '@/actions/user.register'
import { toast } from "sonner"
import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'
import { Trash2,Pencil } from 'lucide-react';



const AddMemberForm = ({ closeModalFunction }: { closeModalFunction: (event: React.MouseEvent<HTMLButtonElement>) => void }) => {
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            role: "USER",
            email: "",
            password: "1234567",
            name: "",
            current_year: "First",
        }
    })
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [, startTransition] = useTransition();

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof RegisterSchema>) {
        console.log("Button Clicked")
        console.log(values)
        setError("");
        setSuccess("");

        startTransition(() => {
            registerUser(values)
                .then((data: any) => {
                    setError(data.error);
                    setSuccess(data.success);
                    toast("Member has been created.")
                }).catch((error) => {
                    console.error("Error during form submission:", error);
                    setError("An error occurred during submission.");
                    toast("Error adding member.");
                });;
        });

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <div className='flex w-full justify-center gap-4 bg-white'>
                    <Avatar className='size-20'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="CommuneSphere" />
                        <AvatarFallback>CM</AvatarFallback>
                    </Avatar>
                    <div className='space-y-2'>
                        <Button className='flex h-9 w-40 gap-2 rounded-md border-2 border-bluePrimary bg-bluePrimary text-xs text-white hover:bg-white hover:text-bluePrimary'>
                            <Pencil className='size-4'/>Add Image
                        </Button>
                        <Button className='flex h-9 w-40 gap-2 rounded-md border-2 border-errorRed bg-white text-xs text-errorRed hover:bg-errorRed hover:text-white'>
                            <Trash2 className='size-4'/>Remove Image
                        </Button>
                        {/* <br /> */}
                        {/* <span className='rounded-md bg-golden p-1 text-xs text-darkGolden'>Domain</span> */}
                    </div>
                </div>
                {/* edit form */}
                <div className="grid flex-1 grid-cols-2 gap-2 pt-4">

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter name" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="roll_number"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Roll Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter roll number" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* branch */}
                    <FormField
                        control={form.control}
                        name="branch"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Branch</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="border-gray-300 text-gray-500">
                                            <SelectValue placeholder="Select branch" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="CSE">CSE</SelectItem>
                                        <SelectItem value="ECE">ECE</SelectItem>
                                        <SelectItem value="ME">ME</SelectItem>
                                        <SelectItem value="CE">CE</SelectItem>
                                        <SelectItem value="EE">EE</SelectItem>
                                        <SelectItem value="IT">IT</SelectItem>
                                        <SelectItem value="MCA">MCA</SelectItem>
                                        <SelectItem value="MBA">MBA</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* year and gender */}
                    <FormField
                        control={form.control}
                        name="domain"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Domain</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="border-gray-300 text-gray-500">
                                            <SelectValue placeholder="Select domain" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value='web'>
                                            Web
                                        </SelectItem>
                                        <SelectItem value='app'>
                                            App
                                        </SelectItem>
                                        <SelectItem value='cloud'>
                                            Cloud
                                        </SelectItem>
                                        <SelectItem value='cyber'>
                                            Cyber Security
                                        </SelectItem>
                                        <SelectItem value='ml'>
                                            Machine Learning
                                        </SelectItem>
                                        <SelectItem value='video_editing'>
                                            Video Editing
                                        </SelectItem>
                                        <SelectItem value='content_writing'>
                                            Content Writing
                                        </SelectItem>
                                        <SelectItem value='marketing'>
                                            Marketing
                                        </SelectItem>
                                        <SelectItem value='finance'>
                                            Finance
                                        </SelectItem>
                                        <SelectItem value='public_relations'>
                                            Public Relations
                                        </SelectItem>
                                        <SelectItem value='creative'>
                                            Creative
                                        </SelectItem>
                                        <SelectItem value='design'>
                                            Design
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* current year */}
                    <FormField
                        control={form.control}
                        name="current_year"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Current year</FormLabel>

                                <Select onValueChange={field.onChange}>
                                    <FormControl>
                                        <SelectTrigger className="border-gray-300 text-gray-500">
                                            <SelectValue placeholder="Select current year" />
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


                    {/* role */}
                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Gender</FormLabel>

                                <Select onValueChange={field.onChange}>
                                    <FormControl>
                                        <SelectTrigger className="border-gray-300 text-gray-500">
                                            <SelectValue placeholder="Select gender" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* email */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter email" {...field} className="border-gray-300" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* personal email */}
                    <FormField
                        control={form.control}
                        name="personal_email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Personal email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter personal email" type="email" {...field} className="border-gray-300" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* phone number */}
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter phone number"  {...field} className="border-gray-300" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* socials */}

                </div>
                <br />
                <FormError message={error} />
                <FormSuccess message={success} />
                <div className='flex w-full gap-2'>

                    <Button type="button" className='w-1/2 border-2 border-errorRed bg-white text-errorRed hover:bg-errorRed hover:text-white' onClick={closeModalFunction}>Discard</Button>
                    <Button type="submit" className='w-1/2 border-2 border-sucessGreen bg-sucessGreen text-white hover:bg-white hover:text-sucessGreen' onClick={(event: React.MouseEvent<HTMLButtonElement>) => onSubmit(form.getValues())}>Save changes</Button>
                </div>

            </form>
        </Form>
    )
}

export default AddMemberForm
