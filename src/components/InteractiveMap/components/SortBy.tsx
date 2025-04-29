import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SortByIcon } from "@/assets/svg";

export function SortBy() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="text-sm border-0 text-[#9B9B9B] font-medium gap-1 cursor-pointer"
          >
            <span className="w-4 h-4">
              {" "}
              <SortByIcon />
            </span>
            Sort by
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-white rounded-[10px] border-0"
        >
          <DropdownMenuItem className="text-[#1D1D20] font-medium text-sm">
            Most Recent
          </DropdownMenuItem>
          <DropdownMenuSeparator className=" h-[0.5px] bg-[#EAEAEA]" />
          <DropdownMenuItem className="text-[#1D1D20] font-medium text-sm cursor-pointer">
            Based on your location
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
