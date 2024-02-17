
import { Button } from '@/components/ui/button'
import Link from 'next/link'


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

                <Button asChild variant="outline">
                    <Link href="/dashboard/members/add-member">Add Member</Link>
                </Button>
            </div>
            {/* //  TODO : Member Page */}
        </div>
    )
}

export default Members
