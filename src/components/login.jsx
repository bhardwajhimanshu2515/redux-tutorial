import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {loginItem} from '../data/reducers/user.reducer';
import {Redirect} from "react-router-dom";
function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch = useDispatch();
    const loggedIn=useSelector(state => state.userReducer).loggedIn;
    const loginButton=async(e)=>{
        e.preventDefault();
        let payload={
            email:email,
            password:password
        }
        try{
            let response=await dispatch(loginItem(payload));
            console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }
    if(loggedIn===true){
        return <Redirect to="/new">
            
        </Redirect>
    }
    return(
        <div id="login">
            <form>
                <input type="email" name="email" value={email} placeholder="email" onChange={e=>{setEmail(e.target.value)}}></input>
                <input type="password" name="password" value={password} placeholder="password" onChange={e=>{setPassword(e.target.value)}}/>
                <button onClick={loginButton}>Login</button>
            </form>
        </div>
    );
}

export default Login;