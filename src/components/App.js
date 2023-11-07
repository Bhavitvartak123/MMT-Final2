import React, { useState } from 'react';
import '../styles/App.css';
import ApiFetch from './FetchData/ApiFetch';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar.jsx';
// import SearchContent from './Navbar/SearchContent.jsx';
import TrainsApi from './FetchData/TrainsApi';
import Hotels from './FetchData/Hotels.jsx';
import NotFound from './NotFound';
import Login from './LOGIN/Login';
import SignUp from './SignUP/SignUp'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from './Modal/Modal';
import Modal2 from './Modal/Modal2';
export const DataParentContext = React.createContext();
// check fault
const App = () => {
  const [filters, setfilter] = useState([]);
  const [item, setItem] = useState();
  const [destination, setDestination] = useState()
  const [source, setSource] = useState()
  const [LoginDetails, setLoginDetails] = useState([])
  //console.log("garima", LoginDetails)
  return (
    <>
      <BrowserRouter>
        <DataParentContext.Provider value={{filters, setfilter, LoginDetails, setLoginDetails, destination, setDestination, source, setSource, item, setItem}} >
          <Navbar />
          <Routes>
            <Route path='/login' element={<Login setLoginDetails={setLoginDetails} />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/' element={<ApiFetch />} />
            <Route path='/hotels' element={<Hotels />} />
            <Route path='/trains' element={<TrainsApi />} />
            <Route path='/modal' element={<Modal/>} />
            <Route path='/modal2' element={<Modal2/>} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          <Footer />
        </DataParentContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App;
