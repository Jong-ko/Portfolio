import AuctionInventory from "public/Images/AuctionInventory.png"
import Image from "next/image"

export function ProjectTwo() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 pb-8">
      <div className="col-span-1 self-center m:pr-8" > 
      <Image
        src={AuctionInventory}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // layout="fill" // required
        objectFit="cover" // change to suit your needs
        placeholder="blur" // Optional blur-up while loading
        className="pr-8"
      />
    </div>
    <div className="col-span-1">
      <h3 className="-m-1 pb-5 text-4xl md:text-6xl font-extrabold tracking-tighter uppercase">
        Auction Inventory
      </h3>
      <p className="font-light">
        I am a driven Full Stack Web developer and Product Photographer, constantly seeking growth
        and innovation. My passion for creating with my hands fuels me to forge connections and
        relationships with others. When not working, I enjoy snowboarding, discovering new music,
        and cooking.
      </p>
    </div>
  </div>
  )
}