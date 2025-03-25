// import { useState } from 'react';
// 
// import PropTypes, { any } from 'prop-types';

// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/home', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })
//         .then(data => data.json())

// }
// function Login() {
//     const [username, setUsername] = useState();
//     const [password, setPassword] = useState();
//      const handleSubmit = async e => {
//     e.preventDefault();
//     const token = await loginUser({
//       username,
//       password
//     });
//     setToken(token);
//   }
//     return (
//         <div className='flex flex-col justify-between min-h-screen'>
//             <h1 className='bg-[#6881FE]  w-[1000px] h-[100px] rounded-lg text-white  '>PLEASE LOGIN HERE</h1>
//             <form className='"mt-[40000px]"'>
//                 <label>
//                     <p>Username</p>
//                     <input type="text" className="bg-[#61B422] text-white p-4 w-[400px] h-[45px] rounded-lg" onChange={e => setUsername(e.target.value)} />
//                 </label>

//                 <label className="flex flex-col items-center justify-start mb-4 mt-auto h-[100px]"> {}
//                     <p className="flex items-center justify-center">Password</p>
//                     <input type="password" className="bg-[#61B422] text-white p-4 w-[400px] h-[45px] rounded-lg" onChange={e => setPassword(e.target.value)} />
//                 </label>

//                 <button type="submit" className="bg-[#6881FE] text-white p-4 w-[185px] h-[50px] rounded-lg">
//                     Login
//                 </button>


//             </form>
//         </div>

//     )
// }
// Login.PropTypes = {
//     setToken: PropTypes.func.isRequired
// }
// export default Login;
import React, { use, useState } from "react";

function Login() {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const correctUsername = "admin";
    const correctPassword = "admin12";
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName === correctUsername && password === correctPassword) {
            setMessage("Login succesfully")
        }
        else {
            setMessage("Invalid email or password")

        }

    };
    return (
        <div>
            <h2>Login </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={userName}
                    onChange={(e) => setUsername(e.target.value)} required

                />
                <br />
                <input type="password" placeholder="Password" value={password}  onChange={(e)=> setPassword(e.target.value)} required/>
                <br />
                <button type="submit">Login</button>

            </form>
            <p>{message}</p>
        </div>
    );

}
export default Login;