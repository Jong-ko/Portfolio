import "@/global.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="meep"> 
      <Header />
      <div className="p-10">
      <Component {...pageProps} />
      </div>
      
      <Footer />
    </div>
  )
}
