'use client'
import React, { useEffect, } from 'react'
import { DataTable } from '../table/member-data-table'
import { getUserById } from '@/actions/user.action'
import { useSelector } from 'react-redux'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
import { Github, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';


interface TableDataProps {
    data: any
    columns: any
}

const TableData = ({ data, columns }: TableDataProps) => {


    const [loading, setLoading] = React.useState<boolean>(true)
    const userId = useSelector((data: any) => data.id)
    console.log("userId:", userId)
    const [userData, setUserData] = React.useState<any>({})
    const handleClickTableRow = (id: string) => { }
    useEffect(() => {
        console.log("UseEffectTableId", userId)

        async function fetchData() {
            setLoading(true)
            const data = await getUserById(userId)
            await setUserData(data)
            setLoading(false)
            console.log("user data :", userData)
        }

        fetchData()

    }, [userId])

    return (
        <div className='flex items-center justify-between gap-4 border-2 border-red-500 '>
            <div className='w-[70%]'>
                <DataTable columns={columns} data={data} handleClickedRow={handleClickTableRow} />
            </div>
            <div className='h-[60vh] w-[35%] rounded-lg border-2 bg-white  p-2 shadow-md'>
                <div className="relative h-20 w-full rounded-md bg-[url('/loginForm.png')] bg-cover bg-no-repeat ">
                    <div className='absolute bottom-[-40%] left-[5%] size-16 rounded-full bg-white '>
                        {/* <Image src="/images/avatar.png" alt="avatar" width={100} height={100} /> */}
                        <Avatar className='size-full'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>

                </div>
                <div className='mt-10'>
                    <div className='flex w-full justify-end gap-4'>
                        <Link href={loading ? "Loading..." : userData ? userData.github : ""} className='rounded-full bg-gray-300 p-1 hover:bg-gray-500'>
                            <Github className=' text-sm text-white' />
                        </Link>
                        <Link href={loading ? "Loading..." : userData ? userData.facebook : ""} className='rounded-full bg-gray-300 p-1 hover:bg-gray-500'>
                            <Facebook className=' text-sm text-white' />
                        </Link>
                        <Link href={loading ? "Loading..." : userData ? userData.linkedin : ""} className='rounded-full bg-gray-300 p-1 hover:bg-gray-500'>
                            <Instagram className=' text-sm text-white' />
                        </Link>
                        <Link href={loading ? "Loading..." : userData ? userData.github : ""} className='rounded-full bg-gray-300 p-1 hover:bg-gray-500'>
                            <Twitter className=' text-sm text-white' />
                        </Link>
                        <Link href={loading ? "Loading..." : userData ? userData.github : ""} className='rounded-full bg-gray-300 p-1 hover:bg-gray-500'>
                            <Linkedin className=' text-sm text-white' />
                        </Link>

                    </div>
                    <div className='mt-2 flex justify-between border-2 p-2'>
                        <p>
                            Name
                        </p>
                        <p>
                            {loading ? "Loading..." : userData ? userData.name : ""}
                        </p>
                    </div>
                    <div className='flex justify-between border-2 p-2'>
                        <p>
                            Role
                        </p>
                        <p>
                            {loading ? "Loading..." : userData ? userData.role : ""}
                        </p>
                    </div>
                    <div className='flex justify-between border-2 p-2'>
                        <p>
                            Branch
                        </p>
                        <p>
                            {loading ? "Loading..." : userData ? userData.branch : ""}
                        </p>
                    </div>
                    <div className='flex justify-between border-2 p-2'>
                        <p>
                            Year Of Joining
                        </p>
                        <p>
                            {loading ? "Loading..." : userData ? userData.year_of_joining : ""}
                        </p>

                    </div>
                    <div className='flex justify-between border-2 p-2'>
                        <p>
                            Position
                        </p>
                        <p>
                            {loading ? "Loading..." : userData ? userData.position : ""}
                        </p>

                    </div>


                    <div className='flex justify-between border-2 p-2'>
                        <p>
                            Personal Email
                        </p>
                        <p>
                            {loading ? "Loading..." : userData ? userData.personal_email : ""}
                        </p>
                    </div>
                </div>
                <h1>


                </h1>
            </div>
        </div>
    )
}

export default TableData
