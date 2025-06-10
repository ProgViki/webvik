
import './App.css'
import BannerDetails from './components/bannerDetails/BannerDetails'
import Blogs from './components/blogs/Blogs'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import OverviewCounter from './components/overiew/OverviewCounter'
import SimpleBanner from './components/simpleBanner/SimpleBanner'

function App() {
 

  return (
    <>
      <Navbar />
      <Hero />
      <OverviewCounter />
      <BannerDetails />
      {/* <BannerDetails reverse={true}/> */}
      <SimpleBanner />
      {/* <Blogs /> */}
      <Footer />

    </>

  )
}

export default App
