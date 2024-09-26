'use client';

import { ImageUpdateModal } from './ImageUpdateModal';

const AvatarUpload = ({ userData }: any) => {

    return (
        <div className="w-40 h-40 flex items-center border-2 justify-center relative z-10 mb-2.5">
            <img src={userData.image} alt="user-avatar" className="w-40 max-h-40 border-4 border-solid border-white rounded-full object-cover " />
            <div className="absolute right-0 bottom-0">
                <ImageUpdateModal userData={userData} />
            </div>
        </div>
    );
};

export default AvatarUpload;
