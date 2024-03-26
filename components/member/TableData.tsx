'use client'
import React, { useEffect, useRef } from 'react'
import { DataTable } from '../table/member-data-table'
import { getUserById } from '@/actions/user.action'


interface TableDataProps {
    data: any
    columns: any
}

const TableData = ({ data, columns }: TableDataProps) => {


    const [tableId, setTableId] = React.useState<string>('')
    const [userData, setUserData] = React.useState<any>({})

    const handleClickTableRow = (id) => {

        setUserData(userData)
        console.log("Tabledata", userData)

    }

    // useEffect(() => {
    //     console.log("UseEffectTableId", tableId)

    //     async function fetchData() {
    //         const data = await getUserById(tableId)
    //         setUserData(data)
    //         console.log(userData)
    //     }

    //     fetchData()

    // }, [tableId])

    return (
        <div className='flex justify-between'>
            <div className='w-[60%]'>
                <DataTable columns={columns} data={data} handleClickedRow={handleClickTableRow} />
            </div>
            <div className='w-[35%] border-2'>
                <h1>Heelo</h1>
            </div>
        </div>
    )
}

export default TableData
