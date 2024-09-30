'use client'
import {
    Form
} from "@/components/ui/form"
import { RegisterSchema } from "@/schema/register.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { registerUser } from "@/actions/user.register"
import { useState, useTransition } from "react"

import { Forms } from "@/components/forms/Forms"
import { FormError } from "@/components/shared/form-error/FormError"
import { FormSuccess } from "@/components/shared/form-success/FormSuccess"
import { ROLE_USER } from "@/constants/role.constant"
import { Button } from "@/components/ui/button"

const AddMember = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            role: ROLE_USER,
            email: "",
            password: "",
            name: "",
            roll_number: "",
            personal_email: "",
            phone: "",
            github: "",
            linkedin: "",
            twitter: "",
            instagram: "",
            facebook: "",
            current_year: "First",
            branch: "CSE",
            year_of_joining: "Y_2020",
            position: "Member",
            domain: "web",
            gender: "male"
        }
    })

    function onSubmit(values: z.infer<typeof RegisterSchema>) {
        console.log("Form submitted", values);
        setError("");
        setSuccess("");
        startTransition(() => {
            registerUser(values)
                .then((data: any) => {
                    setError(data.error);
                    setSuccess(data.success);
                    toast("Member has been created.")
                }).catch((error) => {
                    setError("An error occurred during submission.");
                    toast("Error adding member.");
                    throw error;
                });
        });

    }

    return (
        <div className='w-full rounded-md border border-gray-300 bg-white p-4 px-6 text-sm'>
            {/* <h1 className="text-2xl font-bold">Add Member</h1> */}
            <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)} className="col-span-3 w-full space-y-6 ">

                    <div className="grid grid-cols-2 gap-5">
                        {/* name */}
                        <Forms.InputField formName="Your Name" name="name" control={form.control} placeholder="Enter name" />

                        {/* roll number */}
                        <Forms.InputField formName="Roll Number" name="roll_number" control={form.control} placeholder="Enter KIIT roll number" />

                        <div className="grid grid-cols-2 gap-4">

                            {/* organization email */}
                            <Forms.InputField formName="Email" name="email" control={form.control} placeholder="Enter email" />

                            {/* personal email */}
                            <Forms.InputField formName="Personal Email" name="personal_email" control={form.control} placeholder="Enter personal email" />

                        </div>
                        <div className="grid grid-cols-2 gap-4">

                            {/* password */}
                            <Forms.InputField formName="Password" name="password" control={form.control} placeholder="Enter password" type="password" />

                            {/* phone number */}
                            <Forms.InputField formName="Phone" name="phone" control={form.control} placeholder="Enter phone number" />

                        </div>

                        {/* Role dropdown */}
                        <Forms.SelectField name="role" control={form.control} placeholder="Select role" options={[
                            { label: "ADMIN", value: "ADMIN" },
                            { label: "USER", value: "USER" },
                        ]} />

                        {/* github link */}
                        <Forms.InputField formName="Github (optional)" name="github" control={form.control} placeholder="Github URL" />

                        {/* linkedin link */}
                        <Forms.InputField formName="LinkedIn" name="linkedin" control={form.control} placeholder="LinkedIn URL" />

                        {/* twitter link */}
                        <Forms.InputField formName="Twitter" name="twitter" control={form.control} placeholder="Twitter URL" />

                        {/* instagram link */}
                        <Forms.InputField formName="Instagram" name="instagram" control={form.control} placeholder="Instagram URL" />

                        {/* facebook link */}
                        <Forms.InputField formName="Facebook" name="facebook" control={form.control} placeholder="Facebook URL" />

                        <div className="grid grid-cols-2 gap-4">

                            {/* current year */}

                            <Forms.SelectField name="current_year" control={form.control} placeholder="Select current year" options={[
                                { label: "1", value: "First" },
                                { label: "2", value: "Second" },
                                { label: "3", value: "Third" },
                                { label: "4", value: "Fourth" },
                            ]} />


                            {/* branch */}
                            <Forms.SelectField name="branch" control={form.control} placeholder="Select branch" options={[
                                { label: "CSE", value: "CSE" },
                                { label: "ECE", value: "ECE" },
                                { label: "ME", value: "ME" },
                                { label: "CE", value: "CE" },
                                { label: "EE", value: "EE" },
                                { label: "IT", value: "IT" },
                                { label: "MCA", value: "MCA" },
                                { label: "MBA", value: "MBA" },
                            ]} />

                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {/* select year of joinning */}
                            <Forms.SelectField name="year_of_joining" control={form.control} placeholder="Select year of joinning" options={[
                                { label: "2020", value: "Y_2020" },
                                { label: "2021", value: "Y_2021" },
                                { label: "2022", value: "Y_2022" },
                                { label: "2023", value: "Y_2023" },
                                { label: "2024", value: "Y_2024" },
                                { label: "2025", value: "Y_2025" },
                            ]} />

                            {/* select position */}
                            <Forms.SelectField name="position" control={form.control} placeholder="Select position" options={[
                                { label: "Member", value: "Member" },
                                { label: "Lead", value: "Lead" },
                                { label: "Vice Lead", value: "Vice_Lead" },
                                { label: "Tech Lead", value: "Tech_Lead" },
                                { label: "PR Lead", value: "PR_Lead" },
                                { label: "CR Lead", value: "CR_Lead" },
                                { label: "Executive", value: "Executive" },
                                { label: "Creative Lead", value: "Creative_Lead" },
                                { label: "Design Lead", value: "Design_Lead" },
                                { label: "AR Lead", value: "Ar_Lead" },
                                { label: "Web Lead", value: "Web_Lead" },
                                { label: "App Lead", value: "App_Lead" },
                                { label: "VR Lead", value: "Vr_Lead" },
                            ]} />
                        </div>
                    </div>

                    <FormError message={error} />
                    <FormSuccess message={success} />

                    <div className="flex justify-end">
                        <Button type="submit" disabled={isPending} className="h-[50%] bg-[#1f273c]">
                            {isPending ? "Saving..." : "Save changes"}
                        </Button>
                    </div>

                </form>
            </Form>
        </div>
    )
}

export default AddMember   
