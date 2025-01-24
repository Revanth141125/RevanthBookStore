import React,{useState} from 'react';
import axios from 'axios';
import './App.css';
const Register = () => {
   const [data,setData] = useState({
      email :'',
      password : '',
      confirmpassword : ''
   })
   const {email,password,confirmpassword} = data;

   const onChange = e =>{
      setData({...data,[e.target.name]:e.target.value})
      console.log(data);
   }
   const onSubmit = e =>{
      e.preventDefault();
      if (password === confirmpassword) {
         axios
             .post('https://revanth-9804a-default-rtdb.firebaseio.com/register.json', data)
             .then(() => alert("Successfully Submitted"))
             
     } else {
         alert("Passwords do not match");
     }
   
   }
 

   return (
          <div className='revanth'>
          <div className="content">
      <div className="text">
         Register Now
      </div>
      <form onSubmit={onSubmit}>
         <div className="field">
            <input required type="email" class="input" name='email' value={email} placeholder='email' onChange={onChange}/>
            <span class="span"><svg style = {{enablebackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y="0" x="0" height="20" width="50"><g><path class="" data-original="#000000" fill="#595959" d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"></path></g></svg></span>
            <label className='label'></label>
         </div>
         <div class="field">
            <input required type="password" class="input" name='password' value={password} placeholder='password' onChange={onChange}/>
            <span class="span"><svg style= {{enablebackground: 'new 0 0 512 512' }} viewBox="0 0 512 512" y="0" x="0" height="20" width="50"><g><path class="" data-original="#000000" fill="#595959" d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"></path></g></svg></span>
            <label className='label'></label>
         </div>
         <div class="field">
            <input required type="password" class="input" name='confirmpassword' value={confirmpassword} placeholder='re-enter password' onChange={onChange}/>
            <span class="span"><svg style= {{ enablebackground: 'new 0 0 512 512' }} viewBox="0 0 512 512" y="0" x="0" height="20" width="50"><g><path class="" data-original="#000000" fill="#595959" d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"></path></g></svg></span>
            <label className='label'></label>
         </div>
         <button class="button">Sign up</button>
        
      </form>
      </div>
      </div>
        );
      }
      
      export default Register;
      
      