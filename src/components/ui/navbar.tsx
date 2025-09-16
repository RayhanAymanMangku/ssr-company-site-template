"use client"

import { useState, useEffect } from "react"
import { Menu, Building2, Phone, Mail, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavbarProps {
  logoText?: string
  telNumber?: string
  email?: string
}

export default function Navbar({ logoText, telNumber, email }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
  ]

  const menuItems = [
    { name: "Power Plant", href: "/projects/power-plant" },
    { name: "LNG Plant", href: "/projects/lng-plant" },
    { name: "GAS Plant", href: "/projects/gas-plant" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className={`h-8 w-8 transition-colors ${isScrolled ? "text-primary" : "text-white"}`} />
            <span className={`text-xl font-medium transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
              {logoText}
            </span>
          </Link>
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-amber-400"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex gap-2 focus:outline-0 items-center text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-amber-400"
                }`}>Projects<ChevronDown /></DropdownMenuTrigger>
              <DropdownMenuContent>
                {menuItems.map((item) => (
                  <DropdownMenuItem key={item.name} className="mr-0">
                    <Link href={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="flex items-center">
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className={`h-4 w-4 transition-colors ${isScrolled ? "text-primary" : "text-white"}`} />
                <div className="flex flex-col text-right">
                  <a
                    href={`tel:${telNumber}`}
                    className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
                  >
                    {telNumber}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className={`h-4 w-4 transition-colors ${isScrolled ? "text-primary" : "text-white"}`} />
                <div className="flex flex-col text-right">
                  <a
                    href={`mailto:${email}`}
                    className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className={`h-6 w-6 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`} />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle></SheetTitle>
                <div className="flex flex-col space-y-4 p-4">
                  <Link href="/" className="flex items-center space-x-2 mb-8">
                    <Building2 className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold">{logoText}</span>
                  </Link>

                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="font-medium text-foreground hover:text-amber-400 transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="border-t pt-6 mt-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Call Us</p>
                        <a href={`tel:${telNumber}`} className="font-medium">{telNumber}</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email Us</p>
                        <a href={`mailto:${email}`} className="font-medium">{email}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}