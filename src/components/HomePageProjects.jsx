import { ProjectOne } from "@/components/Projects/ProjectOne"
import { ProjectTwo } from "@/components/Projects/ProjectTwo"
import { ProjectThree } from "@/components/Projects/ProjectThree"
import { motion } from "framer-motion"

export function HomePageProjects() {
  return (
    <motion.div className="pb-10 font-light">
      <h3 className="-m-1 pb-5 text-4xl md:text-6xl font-extrabold tracking-tighter uppercase content-center text-center">
        Projects
      </h3>
      <>
        <div className="flex flex-col">
          <ProjectOne className="" />
          <ProjectTwo className="" />
          <ProjectThree className="" />
          {/* <ProjectTwo />
        <ProjectThree /> */}
        </div>
      </>
    </motion.div>
  )
}
