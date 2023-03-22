import React, { useState } from "react";
import "./form.css";

function Form() {

  const [login,setLogin] = useState(true)

  return (
    <div className="form">
      <div className="form__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          alt=""
        />
      </div>
      <div className="form__text">
        <p>
          SOME RANDOM TEXT, SOME RANDOM <br /> TEXT, SOME RANDOM TEXT ,SOME
          RANDOM TEXT
        </p>
      </div>
      <div className="form__loginSignUpcontainer">
        <p className={login ? 'active' : 'form__loginSignUpLogin'} onClick={()=> setLogin(true)}>Login</p>
        
        <p className={!login ? 'active' : 'form__loginSignUpLogin'} onClick={()=> setLogin(false)}>SignUp</p>
      </div>
      <form>
        <div className="form__input__btncontainer">
          <input type="email" placeholder="Email Address" className="form__input" />
          <br />
          <input type="password" placeholder="Password" className="form__input" />
          <br/>
          <button className="form__button">LOGIN</button>
        </div>
        <p className="form__forgot">Forgot Password?</p>
      </form>
      <div>
        <p className="form__loginWith">or login with</p>
      </div>
      <div className="form__loginWithContainer">
        <img className="form__loginWithImage" src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="" />
        <img className="form__loginWithImage" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
        <img  className="form__loginWithImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png" alt="" />
      </div>
      <div>
        <p>Don't have an account? <span>Create new one!</span> </p>
        <p>By signing up, you are agree with our <span className="span">Terms & Conditions</span></p>
      </div>
    </div>
  );
}

export default Form;
