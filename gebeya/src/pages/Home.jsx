import Carousel from "../components/ImageSlider"
import Navbar from "../components/navbar"
const DATA = [ {
  "image": "brand.webp",
},
 {
  "image": "brand.webp",
},
 {
  "image": "brand.webp",
},

]


function Home() {
  return (
    <div className=" container  ">
      <Navbar />
      <Carousel data={DATA} />
    </div>
  )
}

export default Home
