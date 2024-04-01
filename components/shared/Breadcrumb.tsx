'use client'


import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Breadcrumb = () => {
    const pathname = usePathname()
    const splitURL: string[] = pathname.split('/')
    return (
        <div className=''>
            {splitURL.map((url: string, index: number) => (
                <span key={index} className='font-light'>
                    <Link href="#">
                        {url.length > 0 ? url[0].toUpperCase() + url.slice(1) : ""} {(index === 0 || index === splitURL.length - 1) ? '' : ' > '}
                    </Link>

                </span>
            ))}
        </div>
    )
}

export default Breadcrumb
