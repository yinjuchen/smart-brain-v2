import Rank from "../../components/rank/rank.component"
import ImageLinkForm from "../../components/image-link-form/image-link-form.component"
import './home.styles.scss'
import { Outlet } from "react-router-dom"

const Home = () => {
  return(
     <div className="home-container">
          <h1>This is Home</h1>
          <Rank />    
     </div>
  )
}

export default Home