import Image from "next/image"
import AuctionInventory from "public/Images/SceneIt.png"

export function ProjectThree() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 pb-8">
      <div className="col-span-1">
        <h3 className="-m-1 pb-5 text-4xl md:text-6xl font-extrabold tracking-tighter uppercase">
          Scene It
        </h3>
        <p className="font-light justify-self-center">
          <a href="https://github.com/Jong-ko/Sceneit-Project" target="_blank" className="underline">
            Github
          </a>
          {" "}|{" "}
          <a href="https://jong-ko.github.io/Sceneit-Project/" target="_blank" className="underline">
            Live Site
          </a>
        </p>
        <p className="font-light">
          Created a front end that consumed RESTful APIs that allowed users to access a database of
          movies and save them to a personal list.
        </p>
      </div>
      <div className="col-span-1 self-center ">
        <Image
          src={AuctionInventory}
          alt="Picture of the author"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // layout="fill" // required
          objectFit="cover" // change to suit your needs
          placeholder="blur" // Optional blur-up while loading
          className="self-center pl-8"
        />
      </div>
    </div>
  )
}
