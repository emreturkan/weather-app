import React from "react";
import ThemeChanger from "./themeChanger";
import CommandSearch from "./commandSearch";
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between ">
      <div />
      <div className="flex py-4 items-center justify-between gap-x-2">
        <CommandSearch />
        <ThemeChanger />
        <Button className="h-10 shrink-0 flex items-center gap-x-2">
          <GitHubLogoIcon className="w-4 h-4" />
          <span className="">Support Me</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
