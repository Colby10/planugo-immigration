import React, { useState } from 'react'
import '../css/login.css'
import Input from '../component_reuseable/Input';
import Button from '../component_reuseable/Button';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config-files/firebase';




export default function Login() {

  const [showLoader, setShowLoader] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleLogin = async (e) => {
    e.preventDefault();
    e.target.reset();
    setShowLoader(true)
    setTimeout(() => setShowLoader(false), 2000)
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user);
        localStorage.setItem("planugo-user", JSON.stringify(user))
        
        window.location = '/dashboard'
        //window.history.back()
      })

      .catch((error) => {

        console.log(error.code);
        console.log(error.message);
      });

  };

  return (
    <div className='container'>
      <div className="wrap-login">
        <div className="body-login text-center">
          <img src={"/logo/logo.png"} className='mb-2' alt="logo" />
          <h5>ESPACE PERSONNEL</h5>
        </div>
        <div className="error"></div>
        <form action='/' onSubmit={handleLogin}>
          <div className="form-row">

            <Input className="col-md-12 "
              type={"email"}
              name={"Email"}
              placeholder="Adresse email"
              onChange={(event) => { setEmail(event.target.value); }}

            />
            <Input className="col-md-12 mb-4"
              type={"password"}
              name={"Password"}
              placeholder="Mot de passe"
              onChange={(event) => { setPassword(event.target.value); }}

            />
            <Button className=" btn btn-md btn-login col-md-12"
              disabled={showLoader}
              type="submit"
              loading={showLoader}
            >
              Me connecter
            </Button>

          </div>
        </form>
      </div>
    </div>

  )
}
