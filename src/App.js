import React, { useEffect, useState } from 'react';
import ApiData from '../src/apiData/ApiData';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import AboutUs from './pages/about/AboutUs';
import Layout from './layout/layout';
import Login from './pages/auth/login/Login';
import SignupForm from './pages/auth/signUp/SignUp';
import PrivateRoutes from './routes/PrivateRoutes';
import Counter from './components/counter/counter';
const App = () => {
  // const count = useSelector(state => state.count);
  const [authenticate,setAuthenticate] = useState(false);
  // useEffect(() => {
  //   let logoutTimer;

  //   if (authenticate) {
  //     // Set a timer for 5 minutes (300000 milliseconds)
  //     logoutTimer = setTimeout(() => {
  //       setAuthenticate(false);
  //       alert('You have been logged out due to inactivity.');
  //     }, 10000); 
  //   }

  //   // Clear the timer when the component unmounts or when the user logs out
  //   return () => {
  //     if (logoutTimer) {
  //       clearTimeout(logoutTimer);
  //     }
  //   };
  // }, [authenticate]);
  return (
   
    <div>
  
  <Routes>

      {/* <Route  element={<PrivateRoutes authenticate={authenticate} />} > */}
      <Route path="/" element={authenticate == true ? <Layout /> : <Navigate to="/login" />}>
        <Route index  element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/api-data" element={<ApiData />} />
        <Route path="/counter" element={<Counter />} />
        </Route> 
      {/* </Route> */}
        <Route path='/login' element={<Login authenticate={authenticate} setAuthenticate={setAuthenticate} />}/>
        <Route path='/sign-up' element={<SignupForm/>}/>
      </Routes>

    </div>
  );
};

export default App;
