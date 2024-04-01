'use client'
import React, { useEffect, } from 'react'
import { DataTable } from '../table/member/member-data-table'
import { getUserById } from '@/actions/user.action'
import { useSelector } from 'react-redux'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'



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
        }

        fetchData()

    }, [userId])

    return (
        <>
            <DataTable columns={columns} data={data} handleClickedRow={handleClickTableRow} />
        </>
    )
}

export default TableData
