import { Router } from "@/components/router/Router"
import { MenuIcon } from "@/components/hamburger-menu/MenuIcon"
import { useState } from "react"
import Link from "next/link"
export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="flex flex-row text-sm md:text-xl uppercase font-extralight">
        <p className="m-4">Jeremy Ongko</p>
        <p className="m-4">Full Stack Web Dev</p>
        <p className="m-4">Based in Atlanta</p>
        <MenuIcon toggleMenu={toggleMenu} isOpen={isOpen} />
        <div className="flex-grow hidden md:block m-4">
          <p className="text-right">
            <Link href="/">Home</Link> | <Link href="/projects">Projects</Link> |{" "}
            <Link href="/">Photography</Link>
          </p>
        </div>
      </div>
      <Router toggleMenu={toggleMenu} isOpen={isOpen} />
    </>
  )
}
