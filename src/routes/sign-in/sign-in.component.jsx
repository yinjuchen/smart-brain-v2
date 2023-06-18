import { useContext, useState } from "react"
import './sign-in.styles.scss'
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../components/contexts/user.context"


const defaultFormFields = {
  displayName: '',
  Email: '',
  Password: '',
  ConfirmPassword: ''
}

const SignIn = () => {
  const [formFiedls, setformFields] = useState(defaultFormFields)
  const {email, password} = formFiedls
  console.log(formFiedls)

  const {setCurrentUser} = useContext(UserContext)
  
  const navigate = useNavigate()


  const handleSubmit = async(event) => {
    event.preventDefault()
    setCurrentUser(true)
    navigate('/')
   
  }
  
  const handleChange = (event) => {
    const {name, value} = event.target
    setformFields({...formFiedls, [name]:value})
  }

  return(
    <div className="sign-in-form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          required 
          type="email"
          onChange={handleChange}
          name="email"
          value={email}/>
        <label>Password</label>
          <input 
          required 
          type="password"
          onChange={handleChange}
          name="password"
          value={password}/>
      
        <div className="button-container">
        <button type="submit">Sign In</button>
        </div>
          <div>
        </div>
      </form>
    </div>
  )
}

export default SignIn