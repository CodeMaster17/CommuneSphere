"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Forms } from "../forms/Forms"

import {
    Form
} from "@/components/ui/form"



const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

const SearchProjects = () => {



    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        // Do something with the form data
        console.log(data)
    }



    return (

        <div className="grid w-full max-w-sm items-center gap-1.5" >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">

                    <Forms.InputField
                        name="username"
                        control={form.control}
                        placeholder="Search Projects" />
                </form>
            </Form>
        </div >
    )
}


export default SearchProjects