import Link from "next/link"

export function Router({ isOpen }) {
  return (
    <nav role="navigation" className={`${isOpen ? "block" : "hidden"} fixed right-0 w-1/2 bg-secondary `}>
      <div className="flex-1 relative w-full sm:max-w-4xl sm:mx-auto h-screen sticky">
        <div className={`${isOpen ? "block" : "hidden"} sm:block list-none h-screen`}>
          <li className="block justify-right text-right ">
            <Link
              href="/"
              className="px-3 my-10 rounded-md text-4xl font-medium text-white hover:text-white hover:bg-gray-700 text-4xl mb-10"
            >
              Home
            </Link>
          </li>
          <li className="block justify-right text-right">
            <Link
              href="/projects"
              className="px-3 my-10 rounded-md text-4xl font-medium text-white hover:text-white hover:bg-gray-700 text-4xl mb-10"
            >
              Projects
            </Link>
          
          </li>
        </div>
      </div>
    </nav>
  )
}
