import { Router } from "@/components/router/Router"
import { MenuIcon } from "@/components/hamburger-menu/MenuIcon"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // const headerAnimation = {
  //   initial: { opacity: 0, y: -20 },
  //   animate: { opacity: 1, y: 0 },
  //   transition: { duration: 0.7 },
  // }

  return (
    <>
      <motion.div
        // initial={{ x: 350, scale: 1.5 }}
        // animate={{ x: 0, scale: 1 }}
        // transition={{ delay: 1, duration: 0.7 }}
        className="flex flex-row text-sm md:text-xl uppercase font-extralight"
      >
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          // variants={headerAnimation}
          className="m-4"
        >
          Jeremy Ongko
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.33, duration: 0.5 }}
          // variants={headerAnimation}
          className="m-4"
        >
          Full Stack Web Dev
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.66, duration: 0.5 }}
          // variants={headerAnimation}
          className="m-4"
        >
          Based in Atlanta
        </motion.p>
        <MenuIcon toggleMenu={toggleMenu} isOpen={isOpen} />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="flex-grow hidden md:block m-4"
        >
          <p className="text-right">
            <Link href="/">Home</Link> | <Link href="/projects">Projects</Link> |{" "}
            <Link href="/">Photography</Link>
          </p>
        </motion.div>
      </motion.div>
      <Router toggleMenu={toggleMenu} isOpen={isOpen} />
    </>
  )
}
