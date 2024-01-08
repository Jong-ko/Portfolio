import { ProjectOne } from "@/components/Projects/ProjectOne"
import { ProjectTwo } from "@/components/Projects/ProjectTwo"
import { ProjectThree } from "@/components/Projects/ProjectThree"

function Projects() {
  return (
    <>
      <div className="flex flex-col">
        <ProjectOne className="" />
        <ProjectTwo className="" />
        <ProjectThree className="" />
        {/* <ProjectTwo />
        <ProjectThree /> */}
      </div>
    </>
  )
}

export default Projects
