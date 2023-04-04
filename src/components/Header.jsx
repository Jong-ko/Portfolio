import { Router } from "@/components/router/Router"
import { MenuIcon } from "@/components/hamburger-menu/menuIcon"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <div className="flex flex-row self-stretch text-sm md:text-xl uppercase font-extralight">
      <p className="m-4 self-stretch">Jeremy Ongko</p>
      <p className="m-4 self-stretch">Full Stack Web Dev</p>
      <p className="m-4 self-stretch">Based in Atlanta</p>
      <MenuIcon toggleMenu={toggleMenu} isOpen={isOpen} /> 
    </div>
     <Router toggleMenu={toggleMenu} isOpen={isOpen} />
     </>
  )
}
