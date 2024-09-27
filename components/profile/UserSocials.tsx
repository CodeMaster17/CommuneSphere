import { Icons } from "@/constants/icons";
import { IUser } from "@/types/types";
import SocialLink from "./SocialLink";

interface UserProfileSocialsProps {
    userData: IUser;
}

const UserProfileSocials: React.FC<UserProfileSocialsProps> = ({ userData }) => {

    return (
        <div className="flex items-center justify-center gap-5">
            {userData.github && (
                <SocialLink href={userData.github} Icon={Icons.Github} />
            )}
            {userData.instagram && (
                <SocialLink href={userData.instagram} Icon={Icons.Instagram} />
            )}
            {userData.linkedin && (
                <SocialLink href={userData.linkedin} Icon={Icons.Linkedin} />
            )}

        </div>
    )
}

export default UserProfileSocials