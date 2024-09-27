

const UserContact = ({ userData }: any) => {
    return (
        <div className="flex items-center gap-4">
            <button className="rounded-full border border-solid border-gray-300 bg-gray-50 py-3 px-4 text-sm font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-50 hover:bg-gray-100 hover:border-gray-300">
                +91 {userData?.phone}
            </button>
            <button className="rounded-full border border-solid border-bluePrimary bg-bluePrimary py-3 px-4 text-sm font-semibold text-white whitespace-nowrap shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:bg-bluePrimary hover:border-bluePrimary">Edit profile</button>
        </div>
    )
}

export default UserContact