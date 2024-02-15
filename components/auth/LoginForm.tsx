// LoginForm.tsx
'use client'
import React, { useState, useTransition } from 'react';
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Login } from '@/actions/auth/login';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { LoginSchema } from '@/schema';
const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
})


const LoginForm: React.FC = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })



  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  function onSubmit(values: z.infer<typeof LoginSchema>) {

    console.log(values)
    startTransition(() => {
      Login(values)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  }



  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <div className='w-[40%]'>
        <div className='w-1/2'>


          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your kiit email id.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button type="submit" className='bg-black text-white w-full'>Submit</Button>
            </form>
          </Form>
        </div>
        <div className='w-1/2'></div>
      </div>
    </div>
  );
};

export default LoginForm;
