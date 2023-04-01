export function Footer() {
  let date = new Date().getFullYear()

  return (
    <footer className="bg-white rounded-lg m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex-auto flex-auto md:items-center md:justify-between">
        <span className="flex text-sm text-gray-500 dark:text-gray-400 justify-center">
          © {date} <a href="#">Jeremy Ongko</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 justify-center">
          <li>
            <a href="https://www.linkedin.com/in/jeremyongko/" className="mr-4 hover:underline md:mr-6 ">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/Jong-ko" className="mr-4 hover:underline md:mr-6">
              Github
            </a>
          </li>
          <li>
            <a href="mailto:contact@ongkojeremy.com" className="mr-4 hover:underline md:mr-6">
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
