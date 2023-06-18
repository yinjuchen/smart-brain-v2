import { useState } from "react"
import './register.styles.scss'
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../components/contexts/user.context"
import { useContext } from "react"

const defaultFormFields = {
  displayName: '',
  Email: '',
  Password: '',
  ConfirmPassword: ''
}

const Register = () => {
  const [formFiedls, setformFields] = useState(defaultFormFields)
  const {email, password, name} = formFiedls
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
    <div className="register-form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          required 
          type="name"
          onChange={handleChange}
          name="name"
          value={name}/>
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
            <button type="submit">Register</button>
          </div>      
      </form>
    </div>
  )
}

export default Register