'use client'
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
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
import { RegisterSchema } from "@/schema/register.schema"

import { useState, useTransition } from "react"
import { registerUser } from "@/actions/user.register"

import { FormSuccess } from "@/components/shared/form-success/FormSuccess"
import { FormError } from "@/components/shared/form-error/FormError"
import { Button } from "@/components/ui/button"
import { ROLE_USER } from "@/constants/role.constant"
import { SUCCESS_MEMBER_CREATED } from "@/constants/success.message"

const AddMember = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    console.log(isPending);

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            role: ROLE_USER,
            email: "",
            password: "",
            name: "",
            current_year: "First",
        }
    })

    function onSubmit(data: z.infer<typeof RegisterSchema>) {
        setError("");
        setSuccess("");

        startTransition(() => {
            registerUser(data)
                .then((data: any) => {
                    setError(data.error);
                    setSuccess(data.success);
                });
        });
        toast(SUCCESS_MEMBER_CREATED)

    }

    return (
        <div className='w-full rounded-md border border-gray-300 bg-white p-4 px-6 text-sm'>
            {/* <h1 className="text-2xl font-bold">Add Member</h1> */}
            <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)} className="col-span-3 w-full space-y-6 ">

                    <div className="grid grid-cols-2 gap-5">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter name" {...field} className="border-gray-300" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* roll number */}
                        <FormField
                            control={form.control}
                            name="roll_number"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Roll number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter KIIT roll number" type="text" {...field} className="border-gray-300" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid grid-cols-2 gap-4">
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
                                            <Input placeholder="Personal email" type="email" {...field} className="border-gray-300" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter password" {...field} className="border-gray-300" />
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
                        </div>
                        {/* Role dropdown */}
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Role</FormLabel>
                                    {/* <Select onValueChange={field.onChange} defaultValue={field.value}> */}
                                    <Select onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger className=" border-gray-300 text-gray-500">
                                                <SelectValue placeholder="Select role" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="ADMIN">ADMIN</SelectItem>
                                            <SelectItem value="USER">USER</SelectItem>

                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* github link */}
                        <FormField
                            control={form.control}
                            name="github"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Github</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Github URL" type="url" {...field} className="border-gray-300" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* linkedin link */}
                        <FormField
                            control={form.control}
                            name="linkedin"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>LinkedIn</FormLabel>
                                    <FormControl>
                                        <Input placeholder="LinkedIn URL" type="url" {...field} className="border-gray-300" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* twitter link */}
                        <FormField
                            control={form.control}
                            name="twitter"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Twitter</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Twitter URL" type="url" {...field} className="border-gray-300" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* instagram link */}
                        <FormField
                            control={form.control}
                            name="instagram"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Instagram</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Instagram URL" type="url" {...field} className="border-gray-300" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* facebook link */}
                        <FormField
                            control={form.control}
                            name="facebook"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Facebook</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Facebook URL" type="url" {...field} className="border-gray-300" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-2 gap-4">

                            {/* current year */}
                            <FormField
                                control={form.control}
                                name="current_year"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Current year</FormLabel>
                                        {/* <Select onValueChange={field.onChange} defaultValue={field.value}> */}
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
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {/* select year of joinning */}
                            <FormField
                                control={form.control}
                                name="year_of_joining"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Year of joinning</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="border-gray-300 text-gray-500">
                                                    <SelectValue placeholder="Select year of joinning" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {/* starting from 2020 to 2025 */}
                                                <SelectItem value="Y_2020">2020</SelectItem>
                                                <SelectItem value="Y_2021">2021</SelectItem>
                                                <SelectItem value="Y_2022">2022</SelectItem>
                                                <SelectItem value="Y_2023">2023</SelectItem>
                                                <SelectItem value="Y_2024">2024</SelectItem>
                                                <SelectItem value="Y_2025">2025</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* select position */}
                            <FormField
                                control={form.control}
                                name="position"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Position</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className=" border-gray-300 text-gray-500">
                                                    <SelectValue placeholder="Select position" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>

                                                <SelectItem value="Member">Member</SelectItem>
                                                <SelectItem value="Lead">Lead</SelectItem>
                                                <SelectItem value="Vice_Lead">Vice_Lead</SelectItem>
                                                <SelectItem value="Tech_Lead">Tech_Lead</SelectItem>
                                                <SelectItem value="PR_Lead">PR_Lead</SelectItem>
                                                <SelectItem value="CR_Lead">CR_Lead</SelectItem>
                                                <SelectItem value="Executive">Executive</SelectItem>
                                                <SelectItem value="Creative_Lead">Creative_Lead</SelectItem>
                                                <SelectItem value="Design_Lead">Design_Lead</SelectItem>
                                                <SelectItem value="Ar_Lead">Ar_Lead</SelectItem>
                                                <SelectItem value="Web_Lead">Web_Lead</SelectItem>
                                                <SelectItem value="App_Lead">App_Lead</SelectItem>
                                                <SelectItem value="Vr_Lead">Vr_Lead</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <div className="flex justify-end">
                        <Button type="submit" className="h-[50%] bg-[#1f273c]">Save changes</Button>
                    </div>

                </form>
            </Form>
        </div>
    )
}

export default AddMember   
