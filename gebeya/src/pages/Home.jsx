import Navbar from "../components/navbar"
import ImageSlider from "../components/ImageSlider"
import { SliderData } from "../components/SliderData"


function Home() {
  return (
    <div>
      <Navbar />
      <ImageSlider slides={SliderData} />
    </div>
  )
}

export default Home
