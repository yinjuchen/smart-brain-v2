import './App.scss';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';
import Register from './routes/register/register.component';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
// import Clarifai from 'clarifai'
// import { useEffect } from 'react';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='auth' element={<Authentication />} />
        </Route>
      </Routes>
    </div>

  )
}

export default App;
