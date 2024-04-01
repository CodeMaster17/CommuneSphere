
import { Button } from '@/components/ui/button'
import { UserType, columns } from "@/components/table/member/member-column"
import { getAllUsers } from '@/actions/user.action'
import { Heading } from '@/components/shared/Heading'
import { useDisplayYear } from '@/hooks/use-display-data'
import Breadcrumb from '@/components/shared/Breadcrumb'
import { Github, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import TableData from '@/components/member/TableData'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import DomainWiseData from '@/components/member/DomainWiseData'

async function getData(): Promise<UserType[]> {

    const data = await getAllUsers()

    // only returning the required fields
    return data?.map((user, index) => {
        return {
            sno: index + 1,
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            position: user.position,
            current_year: user.current_year,
            year_of_joining: useDisplayYear(user.year_of_joining) as '2021' || '2022' || '2023' || '2024' || '2025' || null,
        }
    }) || []
}

// This function will be called by Next.js on the server side

const Members = async () => {
    const data = await getData()
    console.log(data)



    return (


        <section className='flex w-full gap-4   '>
            <div className='w-[70%]'>
                <div className='flex gap-4  '>
                    <div className='w-1/4 rounded-[6px] bg-white p-4 '>

                        <Heading type='small' >
                            Top Members
                        </Heading>
                        <div className='mt-2 flex gap-8'>

                            <Card className="flex w-1/2 flex-col items-center justify-center p-4">
                                <Avatar className='size-12'>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="CommuneSphere" />
                                    <AvatarFallback>CM</AvatarFallback>
                                </Avatar>
                                <br />
                                <p className='text-xs font-light'>Harshit Yadav</p>
                                <span className='rounded-md bg-green-500 px-2 text-xs font-light text-white'>420</span>
                            </Card>
                            <Card className="flex w-1/2 flex-col items-center justify-center p-4">
                                <Avatar className='size-12'>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="CommuneSphere" />
                                    <AvatarFallback>CM</AvatarFallback>
                                </Avatar>
                                <br />
                                <p className='text-xs font-light'>Harshit Yadav</p>
                                <span className='rounded-md bg-green-500 px-2 text-xs font-light text-white'>420</span>
                            </Card>
                        </div>


                    </div>
                    <div className='flex w-2/3  flex-col gap-4  '>
                        <div className='flex gap-4'>
                            <Card className="w-1/2 py-4 pl-4">
                                <p>Total Members</p>
                                <p className='text-4xl font-bold'>133</p>
                            </Card>
                            <Card className="w-1/2 py-4 pl-4">
                                <p>Total Members</p>
                                <p className='text-4xl font-bold'>133</p>
                            </Card>
                        </div>
                        <div className='flex gap-4'>
                            <Card className="w-1/2 py-4 pl-4">
                                <p>Total Members</p>
                                <p className='text-4xl font-bold'>133</p>
                            </Card>
                            <Card className="w-1/2 py-4 pl-4">
                                <p>Total Members</p>
                                <p className='text-4xl font-bold'>133</p>
                            </Card>
                        </div>

                    </div>
                </div>
                <Tabs defaultValue="account" className="mt-8 w-full">
                    <TabsList className="grid w-[20%] grid-cols-2">
                        <TabsTrigger value="table">View All</TabsTrigger>
                        <TabsTrigger value="domain">Domain View</TabsTrigger>
                    </TabsList>
                    <TabsContent value="table">
                        <TableData data={data} columns={columns} />
                    </TabsContent>
                    <TabsContent value="domain">
                        <DomainWiseData />
                    </TabsContent>
                </Tabs>
            </div>
            <div className='w-[30%]  pr-4'>
                <div className='flex w-full items-center justify-end gap-4'>
                    <Button variant="outline">
                        Add Members
                    </Button>
                    <Button variant="outline">
                        Import from CSV
                    </Button>
                </div>
                {/* side profile view */}
                <div className='mt-4 w-full rounded-[7.54px]  bg-white p-4'>
                    <div className='flex w-full justify-end'>
                        {/* pencil icons */}
                    </div>
                    <div className='flex w-full gap-4 bg-white'>
                        <Avatar className='size-20'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="CommuneSphere" />
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className='text-xl'>Harshit Yadav</p>
                            <span>Position</span>
                            <br />
                            <span>Domain</span>
                        </div>
                    </div>
                    <div className='mt-4 flex w-full justify-between'>
                        <div className='flex w-1/3 flex-col items-start justify-start border-r-2'>
                            <p>Year</p>
                            <p className='text-2xl font-bold'>2nd</p>
                        </div>
                        <div className='flex w-1/3 flex-col items-center justify-center border-r-2'>
                            <p>Joined On</p>
                            <p className='text-2xl font-bold'>2022</p>
                        </div>
                        <div className='flex w-1/3 flex-col items-center justify-center'>
                            <p>Branch</p>
                            <p className='text-2xl font-bold'>CSE</p>
                        </div>
                    </div>
                    <div className='mt-4 flex w-full gap-4'>
                        <Github />
                        <Linkedin />
                        <Instagram />
                    </div>
                    <div className='mt-4 w-full gap-2'>
                        <p className='text-lg'>Details</p>
                        <br />
                        <div className='flex justify-between'>
                            <p className='text-sm font-light'>Roll Number</p>
                            <div className='w-[70%] rounded-sm border-[1px]  py-1 pl-3 text-sm font-light'>
                                <p>2019CS103</p>
                            </div>
                        </div>
                        <br />
                        <div className='flex justify-between'>
                            <p className='text-sm font-light'>Phone Number</p>
                            <div className='w-[70%] rounded-sm border-[1px]  py-1 pl-3 text-sm font-light'>
                                <p>2019CS103</p>
                            </div>
                        </div>
                        <br />
                        <div className='flex justify-between'>
                            <p className='text-sm font-light'>Roll Number</p>
                            <div className='w-[70%] rounded-sm  border-[1px] py-1 pl-3 text-sm font-light'>
                                <p>2019CS103</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* graph */}
                <div className='mt-4 h-[40vh] w-full rounded-[7.54px]  bg-white p-4'>
                    <Tabs defaultValue="account" className=" w-full">
                        <TabsList defaultValue={"Year"} className="grid w-full grid-cols-3">
                            <TabsTrigger defaultValue={"Year"} value="Year">Year</TabsTrigger>
                            <TabsTrigger value="Gender">Gender</TabsTrigger>
                            <TabsTrigger value="Domain">Domain</TabsTrigger>
                        </TabsList>
                        <TabsContent value="Year" className='flex size-full items-center justify-center'>
                            No graph to show
                        </TabsContent>
                        <TabsContent value="Gender" className='flex size-full items-center justify-center'>
                            No graph to show
                        </TabsContent>
                        <TabsContent value="Domain" className='flex size-full items-center justify-center'>
                            No graph to show
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>

    )
}

export default Members
