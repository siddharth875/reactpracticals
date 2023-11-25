import { useState, useContext } from "react";
import { UserContext } from "./Context/UserContext";

function Login (){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext);
    const handleClick = (e) => {
        e.preventDefault()
        setUser({username,password});
    }
return(
    <>
    <h2>Login To Profile</h2>
    <input type="text" value={username} placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
    {" "}
    <input type="text" placeholder="password" value = {password} onChange={(e)=>setPassword(e.target.value)} />
    {" "}
    <button onClick={handleClick}>Submit</button>
    </>
)
}

export default Login