import "@/global.css"
import { Header } from "@/components/Header"

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="meep"> 
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
