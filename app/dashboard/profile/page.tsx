
import React from 'react'
import { auth } from '@/auth'

const Profile = async () => {
    // const [user, setUser] = useState({})
    const getUser = await auth()
    const data = getUser?.user
    return (
        <div>
            {JSON.stringify(data)}
            Profile
        </div>
    )
}

export default Profile
