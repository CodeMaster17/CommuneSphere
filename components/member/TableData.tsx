

import { DataTable } from '../table/member/member-data-table'
import { getAllUsers } from '@/actions/user.action'
import { useDisplayYear } from '@/hooks/use-display-data'
import { UserType } from '../table/member/member-column'



interface TableDataProps {
    data: any
    columns: any
}
// eslint-disable-next-line no-unused-vars
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
const TableData = async ({ data, columns }: TableDataProps) => {

    return (
        <>
            <DataTable columns={columns} data={data} />
        </>
    )
}

export default TableData
