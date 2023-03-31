import Link from "next/link"

export function Router({ isOpen }) {
  return (
    <nav role="navigation" className={`${isOpen ? "block" : "hidden"} fixed right-0 w-1/2 bg-secondary`}>
      <div className="flex-1 relative w-full sm:max-w-4xl sm:mx-auto ">
        <div className={`${isOpen ? "block" : "hidden"} sm:block list-none`}>
          <li className="block justify-right text-right">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-gray-700 text-4xl mb-10"
            >
              Home
            </Link>
          </li>
          <li className="block justify-right text-right">
            <Link
              href="/about"
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-gray-700 text-4xl mb-10"
            >
              About
            </Link>
          </li>
          <li className="block justify-right text-right">
            <Link
              href="/contact"
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-gray-700 text-4xl mb-10"
            >
              Contact
            </Link>
          </li>
        </div>
      </div>
    </nav>
  )
}
