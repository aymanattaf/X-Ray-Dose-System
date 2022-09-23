// import { useRef, useState, useEffect, useDebugValue} from 'react';

// const Login = () => {
//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [psw, setPsw] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);
    
//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, psw])


//     const handleSubmit = async (e) =>{
//         e.preventDefault();
//         console.log(user, psw);
//         setUser('');
//         setPsw('');
//         setSuccess(true);
//     }

//     return(
//         <>
//             {success ? (
//                 <section>
//                     <h1>You are logged in!!</h1>
//                     <br />
//                     <p>
//                         <a href="#">Go to home</a>
//                     </p>
//                 </section>
//             ) : (
//         <section>
//             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//             <h1>connexion</h1>
//             <form onSubmit={handleSubmit}>
//                  <label htmlFor="username">id Utilisateur</label>
//                  <input 
//                     type="text" 
//                     id="username" 
//                     ref={userRef} 
//                     autoComplete="off" 
//                     onChange={(e) => setUser(e.target.value)} value={user} 
//                     required
//                  />

//                  <label htmlFor="password">password</label>
//                  <input 
//                     type="password" 
//                     id="password"  
//                     onChange={(e) => setPsw(e.target.value)} value={psw} 
//                     required
//                  />
//                 <button>Login</button>
//             </form>
//         </section>
//             )}
//             </>
//     )
// }

// export default Login