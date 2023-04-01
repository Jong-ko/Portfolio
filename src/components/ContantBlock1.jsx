export function ContentBlock1() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-3">
        <div className="col-span-1">
          <h3 className="-m-1 pb-5 text-4xl md:text-6xl font-extrabold tracking-tighter uppercase">
            Who you lookin at
          </h3>
          <p className="font-light">
            I am a driven Full Stack Web developer and Product Photographer, constantly seeking
            growth and innovation. My passion for creating with my hands fuels me to forge
            connections and relationships with others. When not working, I enjoy snowboarding,
            discovering new music, and cooking.
          </p>
        </div>
        <div></div>
        <div className="col-span-1 col-start-2 pt-8">
          <h3 className="-m-1 pb-5 text-4xl md:text-6xl font-extrabold tracking-tighter uppercase">
            Contact Me
          </h3>
          <div className="font-light">Jeremy Ongko</div>
          <a href="mailto:contact@ongkojeremy.com" className="font-light">
            Contact@OngkoJeremy.com
          </a>
          <div className="font-light">(404)993-9626</div>
          <br></br>
          <a href="https://www.linkedin.com/in/jeremyongko/" className="font-light block">
            LinkedIn
          </a>
          <a href="https://github.com/Jong-ko" className="font-light block">
            Github
          </a>
        </div>

        <div className="col-span-1 col-start-1 font-light">
          <h3 className="-m-1 pb-5 text-4xl md:text-6xl font-extrabold tracking-tighter uppercase">
            Projects
          </h3>
        </div>
      </div>
    </>
  )
}
