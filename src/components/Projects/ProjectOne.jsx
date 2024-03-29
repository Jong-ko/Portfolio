import Image from "next/image"
import BarterHouse from "public/Images/BarterHouse.png"
import { motion } from "framer-motion"

export function ProjectOne() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="md:flex md:flex-row-reverse place-items-center justify-center pb-10 gap-3"
    >
      <div className="flex-1">
        <Image
          src={BarterHouse}
          alt="BarterHouse Website"
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
    </motion.div>
  )
}
