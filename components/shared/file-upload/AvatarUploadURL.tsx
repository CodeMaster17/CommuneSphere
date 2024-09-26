'use client';

import { ImageUpdateModal } from './ImageUpdateModal';
import UserAvatar from './UserAvatar';

import MALE_USER_AVATAR from '@/public/man-profile-image.png'
import FEMALE_USER_AVATAR from '@/public/woman-profile.png'

const AvatarUpload = ({ userData }: any) => {

    return (
        <div className="w-40 h-40 flex items-center  justify-center relative z-10 mb-2.5">
            {userData.image ? <UserAvatar src={userData.image} /> :

                // if gender is male, render male avatar,
                userData.gender === "male" ?
                    <UserAvatar src={MALE_USER_AVATAR.src} /> :
                    <UserAvatar src={FEMALE_USER_AVATAR.src} />}

            <div className="absolute right-0 bottom-0">
                <ImageUpdateModal userData={userData} />
            </div>
        </div>
    );
};

export default AvatarUpload;
