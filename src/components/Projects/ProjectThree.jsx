import Image from "next/image"
import AuctionInventory from "public/Images/SceneIt.png"

export function ProjectThree() {
  return (
    <div className="pb-10 md:flex md:flex-row-reverse justify-center">
      <div className="self-center ">
        <Image
          src={AuctionInventory}
          alt="Picture of the author"
          width={5000}
          height={5000}
          // blurDataURL="data:..." automatically provided
          // layout="fill" // required
          objectFit="contain" // change to suit your needs
          placeholder="blur" // Optional blur-up while loading
          className="self-center"
        />
      </div>
      <div className="">
        <h3 className="-m-1 pb-5 text-4xl md:text-6xl font-extrabold tracking-tighter uppercase">
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
    </div>
  )
}
