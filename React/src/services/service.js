import axios from "axios";

const config = axios.create({
    baseURL : 'http://localhost:8090/',
    timeout : 15000
})

export const save = (name,surname,email,password) =>{

    const sendObj = {
        name : name,
        surname : surname,
        email : email,
        password : password
    }
    return config.post('student/save',sendObj)
}

export const login = (email,password) =>{

    const sendObj = {
        email : email,
        password : password
    }
    return config.post('student/login',sendObj)
}


export const applicationSave = (studentName,university,course) =>{

    const sendObj = {
        studentName : studentName,
        university : university,
        course : course
    }
    return config.post('application/save',sendObj)
}
