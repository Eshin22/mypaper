"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {
  FileText,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  Bell,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sheet, SheetContent } from "../components/sheet";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isAdmin = pathname?.includes("/dashboard/admin");

  const navigation = [
    {
      name: "Dashboard",
      href: isAdmin ? "/dashboard/admin" : "/dashboard/marker",
      icon: Home,
      current:
        pathname === "/dashboard/admin" || pathname === "/dashboard/marker",
    },
    {
      name: "Papers",
      href: isAdmin
        ? "/dashboard/admin?tab=papers"
        : "/dashboard/marker?tab=assigned",
      icon: FileText,
      current: pathname?.includes("papers"),
    },
  ];

  if (isAdmin) {
    navigation.push({
      name: "Team",
      href: "/dashboard/admin?tab=team",
      icon: Users,
      current: pathname?.includes("team"),
    });
  }

  navigation.push({
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    current: pathname === "/dashboard/settings",
  });

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto border-r bg-white">
          <div className="flex items-center flex-shrink-0 px-4">
            <span className="text-xl font-bold">MyPaper</span>
          </div>
          <div className="mt-5 flex-1 flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    item.current
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon
                    className={`mr-3 flex-shrink-0 h-5 w-5 ${
                      item.current
                        ? "text-gray-500"
                        : "text-gray-400 group-hover:text-gray-500"
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="w-[240px] sm:w-[280px]">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xl font-bold">MyPaper</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex flex-col space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  item.current
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon
                  className={`mr-3 flex-shrink-0 h-5 w-5 ${
                    item.current ? "text-gray-500" : "text-gray-400"
                  }`}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden px-4"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <div className="flex-1 flex justify-end px-4">
            <div className="ml-4 flex items-center md:ml-6 space-x-3">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative rounded-full">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
