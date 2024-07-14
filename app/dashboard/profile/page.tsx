
import { auth } from '@/auth'

const Profile = async () => {
    const getUser = await auth()
    const data = getUser?.user
    return (
        <section className='min-h-screen border-2 pr-4'>
            {JSON.stringify(data)}
            Profile
        </section>
    )
}

export default Profile
