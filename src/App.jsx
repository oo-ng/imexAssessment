
import Homepage from "./pages/HomePage"
import { useEffect, useState } from 'react';
import { onAuthStateChanged, getAuth } from "@firebase/auth";
import FBInstance from "./firebase/firebaseConfig";
import  {BrowserRouter, Route, Routes}  from 'react-router-dom';
import PageNotFound from "./pages/PageNotFound"; 
import { TrackingPage } from "./pages/TrackingPage";
import { SamplePage } from "./pages/SamplePage";
import ServicesPage from "./pages/ServicesPage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { ContactUsPage } from "./pages/ContactUsPage";
export const App = () => {

  const [signedIn, setSignedIn] = useState();

  useEffect(() => {
    const auth = getAuth(FBInstance);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setSignedIn(true);
            console.log('User is logged in:', user);
        } else {
            setSignedIn(false);
            console.log('User is logged out.');
        }
    });
  }, []);

  



  return(
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/' index element={<Homepage/>}/>
          <Route path='/contactus' index element={<ContactUsPage/>}/>
          <Route path='/trackpackage'  element={<TrackingPage signedIn={signedIn}/>}/>
          {signedIn?<Route signedIn={signedIn} path="/trackpackage/:id" element={<SamplePage />} />: <Route path='/login' element={<LoginPage/>}/>}
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignUpPage />}/>
          <Route path='*' element={<PageNotFound/>}></Route>

          
        </Routes>
      
      </BrowserRouter>


    </div>
  )
}

