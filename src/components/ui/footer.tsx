"use client"
import Link from "next/link"
import { Mail, Phone, MapPin, Building2 } from "lucide-react"

export default function Footer({logoText}: {logoText: string}) {

  const nav = [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "About Us",
      href: "/about",
    },
    {
      id: 3,
      title: "Services",
      href: "/services",
    },
  ]


  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto w-full px-4 py-10 container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className={`h-8 w-8 text-black`} />
              <span className={`text-xl font-medium transition-colors text-black`}>
                {logoText}
              </span>
            </Link>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="mr-2 h-4 w-4" />
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="mr-2 h-4 w-4" />
                <span>(0123) 456789 </span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="mr-2 h-4 w-4" />
                <span>johndoe@example.com</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className={`mb-4 font-medium tracking-wider text-gray-900 `}>Quick Links</h3>
              <ul className="space-y-2">
                {nav.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href={item.href} className="text-sm text-gray-600 hover:text-gray-900">
                        {item.title}
                      </Link>
                    </li>
                  )
                })}

              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className={`mb-4 font-medium tracking-wider text-gray-900 `}>Projects</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/power-plant" className="text-sm text-gray-600 hover:text-gray-900">
                    Power Plant
                  </Link>
                </li>
                <li>
                  <Link href="/lng-plant" className="text-sm text-gray-600 hover:text-gray-900">
                    LNG Plant
                  </Link>
                </li>
                <li>
                  <Link href="/gas-plant" className="text-sm text-gray-600 hover:text-gray-900">
                    GAS Plant
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright (tetap sama) */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex space-x-6">
              <Link href="https://www.instagram.com/mekanuma/?hl=en" className="text-gray-600 hover:text-gray-900" target='_blank' rel='noopener noreferrer'>
                <span className="sr-only">Instagram</span>
                {/* <FaInstagram className="h-5 w-5" /> */}
              </Link>
              <Link href="https://www.tiktok.com/@mekanuma?traffic_type=others&referer_url=amp_dankormarcup2021&referer_video_id=7030043175297273114" target='_blank' rel='noopener noreferrer' className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Tiktok</span>
                {/* <FaTiktok className="h-5 w-5" /> */}
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-2 text-sm text-gray-600 md:flex-row md:space-x-4 md:space-y-0">
              <span>© {new Date().getFullYear()} Company. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}