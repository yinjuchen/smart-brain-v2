
import './authentication.styles.scss'
import Register from '../register/register.component'
import SignIn from '../sign-in/sign-in.component'


const Authentication = () => {

    return (
      <div className="authentication-container">
         <SignIn />
         <Register />
      </div> 
  ) 
}
  

   


export default Authentication