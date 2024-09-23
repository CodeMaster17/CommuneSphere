
import { countAllUsers, countFemaleMembers, countMaleMembers } from "@/actions/user.action"
import { Heading } from "../shared/Heading"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card } from "../ui/card"
import { domain } from "@/constants/domains_constants"


const MemberPageCard = async () => {


    const totalMembers = await countAllUsers()
    const femaleMemberCount = await countFemaleMembers()
    const maleMemberCount = await countMaleMembers()
    const totalDomains = domain.length

    return (
        <div className='mt-2 grid grid-cols-2 gap-4 '>
            <div className=' rounded-[6px] bg-white p-4 '>

                <Heading type='small' >
                    Top Members
                </Heading>
                <div className='mt-2 grid grid-cols-3 gap-4'>

                    <Card className="flex  flex-col items-center justify-center p-4">
                        <Avatar className='size-12'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="CommuneSphere" />
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <br />
                        <p className='text-xs font-light'>Harshit Yadav</p>
                        <span className='rounded-md bg-green-500 px-2 text-xs font-light text-white'>420</span>
                    </Card>
                    <Card className="flex  flex-col items-center justify-center p-4">
                        <Avatar className='size-12'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="CommuneSphere" />
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <br />
                        <p className='text-xs font-light'>Harshit Yadav</p>
                        <span className='rounded-md bg-green-500 px-2 text-xs font-light text-white'>420</span>
                    </Card>
                    <Card className="flex  flex-col items-center justify-center p-4">
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
            <div className='flex  flex-col gap-4  '>
                <div className='flex gap-4'>
                    <Card className="w-1/2 py-4 pl-4">
                        <p>Total Members</p>
                        <p className='text-4xl font-bold'>
                            {totalMembers}
                        </p>
                    </Card>
                    <Card className="w-1/2 py-4 pl-4">
                        <p>Total Female Members</p>
                        <p className='text-4xl font-bold'>{femaleMemberCount}</p>
                    </Card>
                </div>
                <div className='flex gap-4'>
                    <Card className="w-1/2 py-4 pl-4">
                        <p>Total Members</p>
                        <p className='text-4xl font-bold'>{maleMemberCount}</p>
                    </Card>
                    <Card className="w-1/2 py-4 pl-4">
                        <p>Total Domains</p>
                        <p className='text-4xl font-bold'>{totalDomains}</p>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default MemberPageCard
