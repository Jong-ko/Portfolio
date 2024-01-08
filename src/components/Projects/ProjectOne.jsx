import Image from "next/image"
import BarterHouse from "public/Images/BarterHouse.png"

export function ProjectOne() {
  return (
    <div className="pb-10 md:flex md:flex-row-reverse place-items-center justify-center">
      <div className="">
        <Image
          src={BarterHouse}
          alt="BarterHouse Website"
          width={5000}
          height={5000}
          // blurDataURL="data:..." automatically provided
          // layout="fill" // required
          objectFit="cover" // change to suit your needs
          placeholder="blur" // Optional blur-up while loading
          className="pb-2"
        />
      </div>
      <div className="">
        <h3 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase">
          Barter House
        </h3>
        <p className="font-light justify-self-center">
          Github{" "}
          <a href="https://github.com/Jong-ko/TradeUpFront" target="_blank" className="underline">
            Frontend
          </a> 
          &nbsp;
          <a href="https://github.com/Jong-ko/TradeUpBack" target="_blank" className="underline">
            Backend
          </a>{" "}
          |{" "}
          <a
            href="http://ec2-3-138-123-221.us-east-2.compute.amazonaws.com/"
            target="_blank"
            className="underline"
          >
            Live Site
          </a>
        </p>
        <p className="font-light">
          An online platform that allows users to trade items with each other. Users can post items
          they no longer need and are willing to exchange for something else, browse other users'
          items, and communicate with potential trading partners. The website offers a convenient
          and eco-friendly way to get rid of unwanted items and acquire new ones without spending
          money. The interface is user-friendly and intuitive, making it easy to search for items,
          make offers, and finalize trades. With the item swap app, users can save money, reduce
          waste, and connect with others in their community who share similar interests.
        </p>
      </div>
    </div>
  )
}
