import Image from "next/image"
import ProfilePicture from "public/Images/JeremyOngkoProfilePicture.jpg"

export function HomePageHeader() {
  return (
    <>
      <div className="flex flex-col pb-10">
        <div className=" md:max-w-2xl pb-10">
          <div className="">
            <h3 className="-m-1 pb-5 text-4xl md:text-6xl font-extrabold tracking-tighter uppercase">
              Who you lookin at
            </h3>
            <p className="font-light">
              As a web developer and photographer, I possess a diverse background in both technology
              and creative fields. My ability to approach challenges with a multifaceted perspective
              enables me to analyze problems thoroughly and develop comprehensive solutions. Whether
              working independently or collaboratively with others, I excel in fast-paced
              environments that require a balance of technical expertise and creativity. I have a
              passion for acquiring new skills and techniques, and I am committed to using my
              abilities to positively impact the lives of others.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <Image
            src={ProfilePicture}
            alt="Jeremy Ongko"
            width={300}
            height={500}
            // blurDataURL="data:..." automatically provided
            // layout="fill" // required
            objectFit="cover" // change to suit your needs
            placeholder="blur" // Optional blur-up while loading
            className=" pb-10 content-center"
          />
          <div className="pb-10 items-end md:text-right">
            <h3 className="-m-1 pb-5 text-4xl md:text-6xl font-extrabold tracking-tighter uppercase">
              Contact Me
            </h3>
            <div className="font-light">Jeremy Ongko</div>
            <a href="mailto:contact@ongkojeremy.com" target="_blank" className="font-light">
              Contact@OngkoJeremy.com
            </a>
            <div className="font-light">(404)993-9626</div>
            <br></br>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vQ41OQPKwln9ve0sKrU3bfFPyvHNlHCzFGi5L8t3pKWt8FEPQUW35qu6DeXQDqGUbwmynHaIf8GzNVt/pub"
              target="_blank"
              className="font-light"
            >
              Resume
            </a>
            <br></br>
            <a
              href="https://www.linkedin.com/in/jeremyongko/"
              target="_blank"
              className="font-light block"
            >
              LinkedIn
            </a>
            <a href="https://github.com/Jong-ko" target="_blank" className="font-light block">
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
