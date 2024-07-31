import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Price from "./components/Price"
import Testimonials from "./components/Testimonials"
import WorkFlow from "./components/WorkFlow"

const App = () => {
  return (
   <>
   {/* Navbar */}
   <Navbar/>

  
   <div className="max-w-7xl mx-auto pt-20 px-6">

     {/* Hero-Section */}
   <HeroSection />
   
   {/* Feature-Section */}
   <FeatureSection />

   {/* Work-Flow */}
   <WorkFlow/>

   {/* Price */}
   <Price/>

   {/* testimonials */}
   <Testimonials />

   {/* Footer */}
   <Footer />

   </div>

   </>
  )
}

export default App
