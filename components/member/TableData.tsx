import { DataTable } from '../table/member/member-data-table'

interface TableDataProps {
    data: any
    columns: any
}

const TableData = async ({ data, columns }: TableDataProps) => {

    return (
        <>
            <DataTable columns={columns} data={data} />
        </>
    )
}

export default TableData
