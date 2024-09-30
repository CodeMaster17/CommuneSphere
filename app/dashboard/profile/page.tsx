
import { getUserById } from '@/actions/user.action';
import { auth } from '@/auth';
import ProfileThumbnail from '@/components/profile/ProfileThumbnail';
import UserContact from '@/components/profile/UserContact';
import UserInfoLeft from '@/components/profile/UserInfoLeft';
import UserProfileSocials from '@/components/profile/UserSocials';
import AvatarUpload from '@/components/shared/file-upload/AvatarUploadURL';
import { ERR_FAILED_TO_LOAD_USER, ERR_USER_NOT_AUTHENTICATED } from '@/constants/error.message';
import { IUser } from '@/types/types';
import React from 'react';
import { toast } from 'sonner';

const Profile = async () => {

    let user: IUser | null = null;
    let error: string | null = null;

    try {

        const getUser = await auth()
        const data = getUser?.user;

        if (data && data.id) {
            user = await getUserById(data.id);
            if (!user) {
                error = `User not found.`;
                toast.error(error);
            }
        } else {
            error = ERR_USER_NOT_AUTHENTICATED + " or " + ERR_FAILED_TO_LOAD_USER;
        }
    } catch (err) {
        error = (err as Error).message || 'Failed to load user data.';
        toast.error(error);
    }

    return (
        <section className="relative pt-36 pb-24 min-h-screen w-[95%]">
            {error ? (
                <div className="text-center text-red-500">{error}</div>
            ) : (
                <React.Fragment>
                    <ProfileThumbnail />
                    <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
                        <div className="flex items-center justify-center relative z-10 mb-2.5">
                            {user && <AvatarUpload userData={user} />}
                        </div>

                        <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
                            <UserInfoLeft userData={user} />
                            <UserContact userData={user} />
                        </div>
                        <h3 className="text-center font-manrope font-bold text-3xl leading-10 text-gray-900 mb-3">{user?.name || 'Unknown User'}</h3>
                        <p className="font-normal text-base leading-7 text-gray-500 text-center mb-8">{user?.position}</p>
                        {user && <UserProfileSocials userData={user} />}
                    </div>
                </React.Fragment>
            )}
        </section>
    )
}

export default Profile
