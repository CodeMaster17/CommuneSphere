
type Props = {
    src: string;
}

const UserAvatar = ({ src }: Props) => {
    return (
        <img src={src} alt="user-avatar" className="w-40 max-h-40 border-4 border-solid border-white rounded-full object-cover " />
    )
}

export default UserAvatar