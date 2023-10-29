import React ,{useState}from 'react'
import { NavLink} from 'react-router-dom'
import { login } from './services/service'


function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
const sendForm = async (evt) =>{
   evt.preventDefault()

   await login(email,password).then(res =>{
      console.log(res.data)
   })

}

  return (
    <>
    <div  id="login" className='login-page'>
        <form className="form-signin" onSubmit={sendForm} id='loginShadow'>
          <div className="text-center">
            <img
              className="mb-4"
              src="https://cdn-icons-png.flaticon.com/512/2170/2170153.png"
              alt=""
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          </div>
          <label className="sr-only">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email address"
            required
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <label className="sr-only">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
           Login
          </button>
          <NavLink
            to={"/register"}
            className="btn btn-lg btn-success btn-block"
          >
           Sign in
          </NavLink>
          <p className="mt-5 mb-3 text-muted">&copy; İstanbul Eğitim Akademi</p>
        </form>
      </div>
    </>
  );
}

export default Login;
