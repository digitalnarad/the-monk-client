import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogOut, MonitorCheck, Moon, Sun, User2, UserCog } from "lucide-react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { logout } from "../store/globalSlice";
function ProfileMenu() {
  const dispatch = useDispatch();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className="group relative size-10 rounded-full border border-primary/40 bg-gradient-to-b from-primary/80 to-primary shadow-sm transition-all duration-300 hover:shadow-lg hover:brightness-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 data-[state=open]:shadow-lg data-[state=open]:brightness-110 data-[state=closed]:drop-shadow-none"
          onClick={() => navigate("/profile")}
        >
          <>
            <span className="pointer-events-none absolute inset-px rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,.35),rgba(255,255,255,0))] opacity-40 group-hover:opacity-60 data-[state=open]:opacity-60 duration-300" />
            <span className="pointer-events-none absolute -inset-2 rounded-full blur-xl bg-primary/50 opacity-0 transition-opacity duration-300 group-hover:opacity-25 data-[state=open]:opacity-25" />
            <User2
              className="relative text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-110 data-[state=open]:scale-110"
              size={22}
              strokeWidth={2.5}
            />
          </>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="glass-effect border-primary/30 bg-background/95 backdrop-blur-md"
      >
        <DropdownMenuItem
          onClick={() => {}}
          className={`hover:bg-primary/10 focus:bg-primary/10 mb-1 `}
        >
          <UserCog className="mr-2 h-4 w-4" />
          Manage Profile
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            dispatch(logout());
          }}
          className={`hover:bg-primary/10 focus:bg-primary/10 mb-1`}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileMenu;
