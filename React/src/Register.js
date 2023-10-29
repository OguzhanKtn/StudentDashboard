import React,{useState} from 'react'
import { save } from './services/service'

function Register() {

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const sendForm = async(evt) =>{
    evt.preventDefault()

    await save(name,surname,email,password).then(res=>{
        console.log(res.data)
    })
  }

  return (
    <div className="register-page" id='register'>
    <div className="row">
        <div className="col-sm-4"></div>    
            <form onSubmit={sendForm} id='registerShadow'>
            <h2 className='h3 mb-3 ml-5 font-weight-normal'>User Register</h2>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input required type="text" className="form-control" onChange={(evt) => setName(evt.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Surname</label>
                    <input required type="text" className="form-control" onChange={(evt) => setSurname(evt.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input required type="email" className="form-control"  aria-describedby="emailHelp" onChange={(evt) => setEmail(evt.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input required type="password" className="form-control" onChange={(evt) => setPassword(evt.target.value)} />
                </div>
                <div className='text-center'>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                
            </form>
        
        <div className="col-sm-4"></div>
    </div>
</div>
  )
}

export default Register