import AddMemberForm from '@/components/add-member-form'
import { Button } from '@/components/ui/button'
import React from 'react'

const Members = () => {
    return (
        <div className='w-full'>
            <div>
                {/* // TODO: Breadcrumb  */}
            </div>
            <div>
                {/* // TODO: Search Bar and Button  */}
            </div>

            <div>
                {/* <Button variant="outline" >Add Member + </Button> */}
                <AddMemberForm/>
            </div>

        </div>
    )
}

export default Members
