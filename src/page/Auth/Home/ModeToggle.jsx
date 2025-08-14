import { Check, MonitorCheck, Moon, Sun } from "lucide-react";

import { Button } from "../../../component/button";
import { useTheme } from "../../../component/theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../component/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="
            glass-effect border-primary/30
            hover:border-primary hover:shadow-lg hover:shadow-primary/20
            transition-all duration-300
            focus-visible:outline-none focus-visible:ring-0
            data-[state=open]:border-primary data-[state=open]:shadow-lg data-[state=open]:shadow-primary/20  data-[state=open]:bg-primary/10
          "
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="glass-effect border-primary/30 bg-background/95 backdrop-blur-md"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`hover:bg-primary/10 focus:bg-primary/10 mb-1`}
        >
          <Sun className="mr-2 h-4 w-4" />
          Light
          {theme === "light" && (
            <Check className="ml-auto h-4 w-4 text-accent-foreground" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`hover:bg-primary/10 focus:bg-primary/10 mb-1 `}
        >
          <Moon className="mr-2 h-4 w-4" />
          Dark
          {theme === "dark" && (
            <Check className="ml-auto h-4 w-4 text-accent-foreground" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`hover:bg-primary/10 focus:bg-primary/10 mb-1`}
        >
          <MonitorCheck className="mr-2 h-4 w-4" />
          System
          {theme === "system" && (
            <Check className="ml-auto h-4 w-4 text-accent-foreground" />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
