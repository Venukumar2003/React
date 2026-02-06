import React, { useState ,useEffect} from 'react'
import { Suspense ,lazy } from 'react';
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom"


// import HomePage from './components/HomePage'
// import AboutPage from './components/AboutPage'
// import ContactPage from './components/ContactPage'
// import Navbar from './components/Navbar'


const HomePage = lazy(()=> import("./components/HomePage"))
const AboutPage = lazy(()=> import("./components/AboutPage"))
const ContactPage = lazy(()=>import("./components/ContactPage"))



function App() {

  // const [HomePage, setHomePage] = useState(null)
  // const [AboutPage, setAboutPage] = useState(null);
  // const [ContactPage, setContactPage] = useState(null);


  // useEffect(() => {
  //   import("./components/HomePage").then((module) => setHomePage(() => module.default))

  // }, [])


  // const loadHomePage = () => {
  //   import("./components/HomePage").then((module) => setHomePage(() => module.default))
  // }

  // const loadAboutPage = () => {
  //   import("./components/AboutPage").then((module) => setAboutPage(() => module.default))
  // }

  // const loadContactPage = () => {
  //   import("./components/ContactPage").then((module) => setContactPage(() => module.default))
  // }





 

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      {/* <div>
        <nav>

          <ul>
            <li>
              <Link to="/" onClick={loadHomePage} > HomePage</Link>
            </li>

            <li>
              <Link to="/about" onClick={loadAboutPage} > AboutPage </Link>
            </li>

            <li>
              <Link to="/contact" onClick={loadContactPage}> ContactPage </Link>
            </li>
          </ul>


        </nav> */}

       
       {/* Using Suspence and lazy loading  */}

       <div>
        <nav>

          <ul>
            <li>
              <Link to="/" > HomePage</Link>
            </li>

            <li>
              <Link to="/about" > AboutPage </Link>
            </li>

            <li>
              <Link to="/contact"> ContactPage </Link>
            </li>
          </ul>


        </nav>
      

      {/* <Routes>
        <Route path="/" element={HomePage ? <HomePage /> : <div> Loading... </div>} />
        <Route path="/about" element={AboutPage ? <AboutPage /> : <div> Loading... </div>} />
        <Route path="/contact" element={ContactPage ? <ContactPage /> : <div> Loading...</div>} />

      </Routes> */}


      {/* Using Suspence and Lazy loading */}
<Suspense fallback= {<div>Loading ...</div>}>
      <Routes>
        <Route path="/" element={HomePage ? <HomePage /> : <div> Loading... </div>} />
        <Route path="/about" element={AboutPage ? <AboutPage /> : <div> Loading... </div>} />
        <Route path="/contact" element={ContactPage ? <ContactPage /> : <div> Loading...</div>} />

      </Routes>
      </Suspense>

      </div>



    </BrowserRouter>
  )
}

export default App
