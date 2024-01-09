import Image from "next/image"
import AuctionInventory from "public/Images/SceneIt.png"
import { motion } from "framer-motion"

export function ProjectThree() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} className="md:flex md:flex-row-reverse place-items-center justify-center pb-10 gap-3">
      <div className="flex-1">
        <Image
          src={AuctionInventory}
          alt="Picture of the author"
          width={5000}
          height={5000}
          // blurDataURL="data:..." automatically provided
          // layout="fill" // required
          placeholder="blur" // Optional blur-up while loading
          className="pb-5"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-4xl pb-5 md:text-6xl font-extrabold tracking-tighter uppercase">
          Scene It
        </h3>
        <p className="font-light justify-self-center">
          <a
            href="https://github.com/Jong-ko/Sceneit-Project"
            target="_blank"
            className="underline"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            href="https://jong-ko.github.io/Sceneit-Project/"
            target="_blank"
            className="underline"
          >
            Live Site
          </a>
        </p>
        <p className="font-light">
          Created a front end that consumed RESTful APIs that allowed users to access a database of
          movies and save them to a personal list.
        </p>
      </div>
    </motion.div>
  )
}
