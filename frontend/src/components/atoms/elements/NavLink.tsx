import Link from "next/link";
import React, {ReactNode} from "react";

export type NavLinkProps = {
    children: ReactNode;
    href: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
    return (
        <Link href={href} passHref legacyBehavior>
            <a className="ml-2 mr-2 font-semibold border-b-0 hover:border-b-2 hover:text-vividRed hover:border-vividRed">{children}</a>
            </Link>
    );
};

