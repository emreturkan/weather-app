"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const CommandSearch = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Button
        variant={"outline"}
        size={"lg"}
        onClick={() => setOpenMenu(true)}
        className="h-9 w-full whitespace-nowrap px-4"
      >
        <p className="text-sm text-muted-foreground">
          Search city...{" "}
          <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 hover:bg-primary md:ml-28">
            <span className="text-xs">⌘</span>J
          </kbd>
        </p>
      </Button>
      <CommandDialog open={openMenu} onOpenChange={setOpenMenu}>
        <CommandInput placeholder="Search city..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>sa</CommandItem>

            <CommandItem>sxx</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandSearch;
