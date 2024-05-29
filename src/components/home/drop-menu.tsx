import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AvatarUser from "./avatar";
import { Button } from "../ui/button";
import Profile from "@/app/home/_components/profile";
import { signOut } from "next-auth/react";
import GoogleLogout from "../google-logout";

export function DropMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="overflow-hidden rounded-full" asChild>
        <div className="cursor-pointer">
            <AvatarUser />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Profile />
        <DropdownMenuItem>Meu plano</DropdownMenuItem>
        <GoogleLogout/>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
