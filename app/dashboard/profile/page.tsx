
import { getUserById } from '@/actions/user.action';
import { auth } from '@/auth';
import UserContact from '@/components/profile/UserContact';
import UserInfoLeft from '@/components/profile/UserInfoLeft';
import AvatarUpload from '@/components/shared/file-upload/AvatarUploadURL';



const Profile = async () => {

    const getUser = await auth()
    const data = getUser?.user;

    // FIXME : This is temporary solution
    let user;
    if (data !== undefined && data?.id !== undefined) {
        user = await getUserById(data.id);
    }



    return (
        <section className="relative pt-36 pb-24 min-h-screen w-[95%]">
            <img src="https://pagedone.io/asset/uploads/1705471739.png" alt="cover" className="w-full absolute top-0 left-0 z-0 h-60 object-cover" />
            <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex items-center justify-center relative z-10 mb-2.5">
                    <AvatarUpload userData={user} />
                </div>

                <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
                    <UserInfoLeft userData={user} />
                    <UserContact userData={user} />
                </div>
                <h3 className="text-center font-manrope font-bold text-3xl leading-10 text-gray-900 mb-3">{data?.name}</h3>
                <p className="font-normal text-base leading-7 text-gray-500 text-center mb-8">A social media influencer and singer</p>
                {/* <UserSocials userData={user} /> */}
            </div>
        </section>
    )
}

export default Profile
