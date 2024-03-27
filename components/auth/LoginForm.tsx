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
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Login } from '@/actions/auth/login';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { LoginSchema } from '@/schema';
import Image from 'next/image';



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
  };



  return (
    <div className='flex h-[100vh] w-full items-center justify-center'>
      <div className='flex h-[70%] w-[50%]'>
        <div className='w-1/2   rounded-l-lg p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
          <div>
            <h1 className='text-center text-3xl font-semibold'>Managing made <span className='font-bold underline decoration-4 underline-offset-8'>EZ</span>.</h1>
          </div>
          <div className='my-12 flex justify-center'>
            <Image src="/mlsaLogo.png" alt='mlsa logo' width={100} height={100} />
          </div>

          <div className=''>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Email</FormLabel> */}
                      <FormControl>
                        <Input placeholder="Email" {...field} disabled={isPending} />
                      </FormControl>
                      {/* <FormDescription>
                        This is your kiit email id.
                      </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Password</FormLabel> */}
                      <FormControl>
                        <Input placeholder="Password" {...field} disabled={isPending} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button type="submit" className='h-10 w-full bg-black text-white'>Login</Button>
              </form>
            </Form>
            <div>
              <h3 className='mt-5 flex justify-center text-sm font-light'>Forgot Password ?</h3>
            </div>
          </div>

        </div>
        <div className='w-1/2'>
          <Image src='/loginForm.png' width={500} height={500} alt='loginform' className='size-[100%] rounded-r-lg' />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
