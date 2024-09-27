// SocialLink.tsx

import Link from "next/link";

interface SocialLinkProps {
    href: string | undefined;
    Icon: React.ElementType; // Accept a component type for the icon
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, Icon }) => {
    if (!href) return null; // Render nothing if href is undefined

    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-solid border-gray-300 group bg-gray-50 transition-all duration-500 hover:bg-bluePrimary hover:border-bluePrimary"
        >
            <Icon className="w-6 h-6 text-gray-500 hover:text-white  group-hover:white transition-all duration-500" />
        </Link>
    );
};

export default SocialLink;
