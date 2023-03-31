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
    <div className="flex flex-row">
      <p className="m-4 text-xl">Jeremy Ongko</p>
      <p className="m-4 text-xl">Full Stack Web Dev</p>
      <p className="m-4 text-xl">Based in Atlanta</p>
      <MenuIcon toggleMenu={toggleMenu} isOpen={isOpen} /> 
    </div>
     <Router isOpen={isOpen} />
     </>
  )
}
