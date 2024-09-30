
"use client"
import { useState } from 'react'
import RestuatrantHeader from '../components/RestuatrantHeader'
import RestuatranLogin from '../components/RestuatrantLogin'
import RestuatranSignUp from '../components/RestuatrantSignUp'
import Footer from '../components/Footer'

const Restuarant = () => {
  const [login, setLogin] = useState(true)
  return (
    <>
      <RestuatrantHeader/>
      <div class="flex items-center justify-center flex-col mt-2 pb-40">
        {
          login ? <RestuatranLogin /> : <RestuatranSignUp />
        }
        <div>
          <button className="m-2" onClick={() => setLogin(!login)}>
            {login ? "Do not have account?SignUp" : "Already have Account?Login"}
          </button>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Restuarant