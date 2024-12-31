/**
 * v0 by Vercel.
 * @see https://v0.dev/t/obus3LxsAfo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    // <header className="top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
    // <header>
    <div className="flex justify-between">
      {/* <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6"> */}
      {/* <Link href="/" className="flex items-center gap-2 flex-shrink"> */}
      <Link href="/">
        <Image
          src="/Logo.png"
          height={75}
          width={150}
          alt="logo"
          className="flex flex-shrink"
        />
        {/* <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span> */}
      </Link>
      <nav className="hidden items-center justif gap-8 text-sm font-medium md:flex ml-auto">
        {/* <Link
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Home
          </Link> */}
        <Link
          href="#features"
          // className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          <h4>Features</h4>
        </Link>
        <Link
          href="#howitworks"
          // className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          <h4>How it Works</h4>
        </Link>
        <Link
          href="/validate"
          // className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          <h4>Validate!</h4>
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        {/* <div className="hidden items-center gap-2 text-sm font-medium md:flex">
            <Phone className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-500 dark:text-gray-400">
              123-456-7890
            </span>
          </div> */}
        {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="sr-only">Search</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px] p-4">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 w-full"
                />
              </div>
            </DropdownMenuContent>
          </DropdownMenu> */}
        {/* <Toggle aria-label="Toggle dark mode" className="rounded-full">
            <MoonIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </Toggle> */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className="rounded-lg md:hidden"
            >
              {/* <Menu className="h-5 w-5 text-gray-500 dark:text-gray-400" /> */}
              <Menu className="h-6 w-6" />
              {/* <span className="sr-only">Toggle navigation menu</span> */}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="md:hidden bg-[#f9e9d1]"
            onCloseAutoFocus={(event) => event.preventDefault()}
          >
            <div className="grid gap-4 p-4">
              <SheetClose asChild>
                <Link
                  href="/"
                  //   className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  //   prefetch={false}
                >
                  <h4>Home</h4>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/#features"
                  //   className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  //   prefetch={false}
                >
                  <h4>Features</h4>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/#howitworks"
                  //   className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  //   prefetch={false}
                >
                  <h4>How it Works</h4>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/validate"
                  //   className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  //   prefetch={false}
                >
                  <h4>Validate!</h4>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
    // </header>
  );
}
