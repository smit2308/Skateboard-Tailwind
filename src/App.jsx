import React from "react"
import {Routes, Route} from "react-router-dom"
import {Home, Products} from "./root/pages"
import { SigninForm } from "./auth/forms/SigninForm"
import { SignupForm } from "./auth/forms/SignupForm"
import {AuthLayout} from "./auth/AuthLayout"
import RootLayout  from "./root/RootLayout"
import Nav from "./components/Nav"


// import HomeBanner from "./sections/HomeBanner"


const App = () => {


  return (
      <main className="flex flex-col ">
        <Nav />

        <div>
        <Routes>

          

          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SigninForm />} />
            <Route path="/sign-up" element={<SignupForm />} />
          </Route>


  
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Route>

        </Routes>

        </div>
      
      </main>
        
  )
}

export default App
