// import { Link } from 'react-router-dom'/
import { SignupForm } from './components/signup-form'
// import { Button } from './components/ui/button'

function Signup() {
  return (
    <>
     <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm ">
            <SignupForm /> <br/>
           
          </div>
          </div>
    </>
  )
}

export default Signup