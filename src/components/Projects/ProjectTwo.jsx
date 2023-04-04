import AuctionInventory from "public/Images/AuctionInventory.png"
import Image from "next/image"

export function ProjectTwo() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 pb-8">
      <div className="col-span-1 self-center m:pr-8">
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
        <p className="font-light justify-self-center">
          <a
            href="https://github.com/5hakazulu/FullStackProjects"
            target="_blank"
            className="underline"
          >
            Github
          </a>{" "}
          |{" "}
          <a href="https://fullstackproject-04oi.onrender.com/" target="_blank" className="underline">
            Live Site
          </a>
        </p>
        <p className="font-light">
          Built a web-based platform tailored to the needs of auction houses, providing them with a
          comprehensive solution for managing their inventory, consignors, and customers. Through
          our platform, auction houses can easily create and manage detailed records of their
          inventory, track and report on consignors and customers, and manage the bidding and
          auction process efficiently. Our user-friendly interface and intuitive design make
          inventory management easy, while our sophisticated tracking and reporting features ensure
          that all information is kept secure and confidential. Overall, our website enables auction
          houses to streamline their operations, improve their inventory management practices, and
          enhance their customer experience.
        </p>
      </div>
    </div>
  )
}
