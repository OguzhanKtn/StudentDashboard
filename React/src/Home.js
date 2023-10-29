import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { applicationSave } from "./services/service";

function Home() {

    const [studentName,setStudentName] = useState('')
    const [university,setUniversity] = useState('')
    const [course,setCourse] = useState('')


    const sendForm = async (evt)=>{
        evt.preventDefault()

        await applicationSave(studentName,university,course).then(res=>{
            console.log(res.data)
        })
    }

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              Student Dashboard
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown" id="dropPosition">
                  <a
                    class="nav-link dropdown-toggle"
                    id="dropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi bi-box-arrow-in-right mr-1"></i>
                    <strong> Log in</strong>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <NavLink class="dropdown-item btn" to="/login">
                        <i class="bi bi-box-arrow-in-right mr-1"></i>
                        Log in
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="dropdown-item btn" to="/register">
                        <i class="bi bi-sign-intersection mr-1"></i>
                        Sign in
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4" > 
            <form onSubmit={sendForm} id="applicationForm">
            <h3 id="text-application">Application Form</h3>
            <div class="mt-5">
              <input type="text" class="form-control" placeholder="name" onChange={(evt)=> setStudentName(evt.target.value)} />
            </div>
            <div className="mt-4">
              <input
                class="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type to search university"
                onChange={(evt)=> setUniversity(evt.target.value)}
              />
              <datalist id="datalistOptions">
                <option value="Akdeniz University" />
                <option value="Antalya Bilim University" />
                <option value="Istanbul University" />
                <option value="Istanbul Yeni Yuzyil University" />
                <option value="Bogazici University" />
              </datalist>
            </div>
            <div className="mt-4">
              <input
                class="form-control"
                list="datalistOptions2"
                placeholder="Type to search course"
                onChange={(evt)=> setCourse(evt.target.value)}
              />
              <datalist id="datalistOptions2">
                <option value="Software Engineering" />
                <option value="Electrical & Electronic Engineering" />
                <option value="Medicine" />
                <option value="Computer Engineering" />
              </datalist>
            </div>
            <div className='text-center mt-5'>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>         
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
