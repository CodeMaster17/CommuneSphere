
import { auth } from '@/auth'
import { Icons } from '@/constants/icons';
import Link from 'next/link';


const Profile = async () => {


    const getUser = await auth()
    const data = getUser?.user

    return (
        <section className="relative pt-36 pb-24 min-h-screen w-[95%]">
            <img src="https://pagedone.io/asset/uploads/1705471739.png" alt="cover" className="w-full absolute top-0 left-0 z-0 h-60 object-cover" />
            <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex items-center justify-center relative z-10 mb-2.5">
                    <img src="https://pagedone.io/asset/uploads/1705471668.png" alt="user-avatar" className="border-4 border-solid border-white rounded-full object-cover" />
                </div>
                <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
                    <ul className="flex items-center gap-5">
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>
                            <a href="javascript:void(0);" className="flex items-center gap-2 cursor-pointer group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="20" viewBox="0 0 5 20" fill="none">
                                    <path d="M4.12567 1.13672L1 18.8633" stroke="#E5E7EB" strokeWidth="1.6" strokeLinecap="round" />
                                </svg>
                                <span className="font-medium text-base leading-7 text-gray-400">Profile</span>
                                <span className="rounded-full py-1.5 px-2.5 bg-indigo-50 flex items-center justify-center font-medium text-xs text-indigo-600">New</span>
                            </a>
                        </li>
                    </ul>
                    <div className="flex items-center gap-4">
                        <button className="rounded-full border border-solid border-gray-300 bg-gray-50 py-3 px-4 text-sm font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-50 hover:bg-gray-100 hover:border-gray-300">Contact</button>
                        <button className="rounded-full border border-solid border-indigo-600 bg-indigo-600 py-3 px-4 text-sm font-semibold text-white whitespace-nowrap shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:bg-indigo-700 hover:border-indigo-700">Edit profile</button>
                    </div>
                </div>
                <h3 className="text-center font-manrope font-bold text-3xl leading-10 text-gray-900 mb-3">{data?.name}</h3>
                <p className="font-normal text-base leading-7 text-gray-500 text-center mb-8">A social media influencer and singer</p>
                <div className="flex items-center justify-center gap-5">

                    <Link href={"/dashboard/prfile"} className="p-3 rounded-full border border-solid border-gray-300 group bg-gray-50 transition-all duration-500 hover:bg-indigo-700 hover:border-indigo-700">
                        <Icons.Github className="w-6 h-6 text-gray-500 hover:text-white group-hover:text-indigo-700 transition-all duration-500" />
                    </Link>
                    <Link href={"/dashboard/prfile"} className="p-3 rounded-full border border-solid border-gray-300 group bg-gray-50 transition-all duration-500 hover:bg-indigo-700 hover:border-indigo-700">
                        <Icons.Instagram className="w-6 h-6 text-gray-500 hover:text-white group-hover:text-white transition-all duration-500" />
                    </Link>
                    <Link href={"/dashboard/prfile"} className="p-3 rounded-full border border-solid border-gray-300 group bg-gray-50 transition-all duration-500 hover:bg-indigo-700 hover:border-indigo-700">
                        <Icons.Linkedin className="w-6 h-6 text-gray-500 hover:text-white group-hover:text-indigo-700 transition-all duration-500" />
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default Profile
