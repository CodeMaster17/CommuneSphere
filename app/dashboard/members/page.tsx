
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { UserType, columns } from "@/components/table/member-column"
import { DataTable } from "@/components/table/member-data-table"
import { getAllUsers } from '@/actions/user.action'
import Leads from '@/components/member/LeadsSection'
import { Heading } from '@/components/shared/Heading'
import { useDisplayYear } from '@/hooks/use-display-data'
import Breadcrumb from '@/components/shared/Breadcrumb'


async function getData(): Promise<UserType[]> {

    const data = await getAllUsers()

    // only returning the required fields
    return data?.map((user) => {
        return {
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


const Members = async () => {
    const data = await getData()
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
                <DataTable columns={columns} data={data} />
            </div>
        </section>
    )
}

export default Members
