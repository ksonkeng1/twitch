"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { start } from "repl";
import Link from "next/link";
import { UserAvatar } from "@/components/user-avatar";




interface UserItemProps {
    username: string;
    imageUrl: string;
    isLive?: boolean;
};

export const UserItem = ({
    username,
    imageUrl,
    isLive,
}: UserItemProps) => {
    const pathname= usePathname();

    const { collapsed } = useSidebar((state) => state);
    
    const href =  `/${username}`; //redirecting the user to username when they click button
    const isActive = pathname === href; // boolean to indicate to the user if they're seeing the screen of the user in the sidebar


    return(
        <Button
            asChild
            variant="ghost"
            className={cn(
                "w-full h-12",
                collapsed ? "justify-center" : "justify-start",
                isActive && "bg-accent",
            )}
        
        >
            <Link href={href}>
                <div className={cn(
                    "flex items-center w-full gap-x-4",
                    collapsed && "justify-center"
                )}>
                    <UserAvatar
                        imageUrl={imageUrl}
                        username={username}
                        isLive={isLive}
                    
                    />
                    


                </div>
            </Link>
        </Button>
    );
};