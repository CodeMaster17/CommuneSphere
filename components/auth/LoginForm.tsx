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
  // eslint-disable-next-line no-unused-vars
  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      Login(values)
        .then((data ) => {
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
  };



  return (
    <div className='flex h-[100vh] w-full items-center justify-center'>
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
                      <Input placeholder="Email" {...field} disabled={isPending} />
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
                      <Input placeholder="Password" {...field} disabled={isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button type="submit" className='w-full bg-black text-white'>Submit</Button>
            </form>
          </Form>
        </div>
        <div className='w-1/2'></div>
      </div>
    </div>
  );
};

export default LoginForm;
