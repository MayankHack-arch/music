'use client'

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
    return(
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="home">
                </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our courses">
                <div className="flex space-y-4 flex-col text-sm">
                <HoveredLink href="/courses">All courses</HoveredLink>
                <HoveredLink href="/courses">Basic courses</HoveredLink>
                <HoveredLink href="/courses">Advance courses</HoveredLink>
                <HoveredLink href="/courses">Trending courses</HoveredLink>
                </div>
                </MenuItem>
                <Link href={'/contact'}>
                <MenuItem setActive={setActive} active={active} item="Contact">
                <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/contact">Contact us</HoveredLink>
                <HoveredLink href="/feedback">Feedback</HoveredLink>
                </div>
                </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar