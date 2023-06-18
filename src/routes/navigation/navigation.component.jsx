import { Link, Outlet } from "react-router-dom"
import { Fragment, useContext } from "react";
import {ReactComponent as CrownLogo} from '../../assets/bulb.svg';
import Tilt from 'react-parallax-tilt';
import './navigation.styles.scss';
import { UserContext } from "../../components/contexts/user.context";
import { useNavigate } from "react-router-dom";


const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext)
  console.log(currentUser)

  const navigate = useNavigate()
 
  const signOutHandler = () => {
     setCurrentUser(null)
     navigate('/auth')
  }
  
  return(
    <Fragment>
      <div className="navigation-container">
       <div className="logo-container">
          <Tilt  
          tiltMaxAngleX={35}
              tiltMaxAngleY={35}
              perspective={900}
                scale={1.1}
              transitionSpeed={2000}
              gyroscope={true}>
                <CrownLogo className='logo'/>
          </Tilt>
         </div>
         {
          currentUser ? (
            <div>
            <span className="nav-link" onClick={signOutHandler}>Sign Out</span>
            </div>
          )
          : (
           <div>
            <Link className="nav-link" to='/auth'>
              Sign In
           </Link>

           </div>
      
          )
         }
        
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation 



// <div className="navigation-container">
      //   <Link className="logo-container" to='sign-in'>
      //     <Tilt  
      //       tiltMaxAngleX={35}
      //       tiltMaxAngleY={35}
      //       perspective={900}
      //       scale={1.1}
      //       transitionSpeed={2000}
      //       gyroscope={true}>
      //       <CrownLogo className='logo'/>
      //     </Tilt>
      //   </Link>
      //   <Link className="nav-link" to='auth'>
      //     <Authentication/>
      //   </Link>
      // </div>