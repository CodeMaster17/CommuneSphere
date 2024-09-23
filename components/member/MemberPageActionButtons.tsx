import React from 'react'
import { Button } from '../ui/button'
import AddFormModal from './AddFormModal'

const MemberPageActionButtons = () => {
    return (
        <div className='flex w-full items-center justify-end gap-4'>
            <AddFormModal />
            <Button variant="outline">
                Import from CSV
            </Button>
        </div>
    )
}

export default MemberPageActionButtons