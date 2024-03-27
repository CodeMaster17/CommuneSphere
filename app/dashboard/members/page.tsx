
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { UserType, columns } from "@/components/table/member/member-column"
import { getAllUsers } from '@/actions/user.action'
import Leads from '@/components/member/LeadsSection'
import { Heading } from '@/components/shared/Heading'
import { useDisplayYear } from '@/hooks/use-display-data'
import Breadcrumb from '@/components/shared/Breadcrumb'

import TableData from '@/components/member/TableData'


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
            // roll_number: user.roll_number,
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


        <section className='w-full'>
            <div className='flex w-full justify-between'>
                {/* // TODO: Breadcrumb  */}
                <Breadcrumb />
                <Button asChild variant="outline">
                    <Link href="/dashboard/members/add-member">Add Member +</Link>
                </Button>
            </div>
            <div className='mt-4 w-full'>
                <Heading type="medium">
                    Leads
                </Heading>
                <Leads />
            </div>
            <div className='mt-4'>
                <Heading type="medium">
                    Members
                </Heading>
                {/* //  TODO : Member Page */}
            </div>
            <TableData data={data} columns={columns} />
        </section>

    )
}

export default Members
