import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../images/logo.jpg'
import {useHistory} from 'react-router-dom'

export default function Navbar() {


  const [isAuth, setisAuth] = useState(false)
  const[user,setUser] = useState('')
const history = useHistory()
 

  useEffect(() => {

var data = JSON.parse(localStorage.getItem('linkedinToWinItUser'))


    if(data){
     setisAuth(true)
     setUser(data.name)
    }
    return () => {
      
    }
  }, [])



const handleLogout = ()=>{

localStorage.removeItem('linkedinToWinItUser')
setisAuth(false)
setUser('')
history.push('/')


}






    return (
        <div style={{height : '8vh' , marginBottom : '5vh'}}>
               <header className="header">
          <nav className="navbar navbar-expand-lg">
            <div className="container position-relative">
              <a className="navbar-brand" href="/">
                <img src={Logo} style={{maxWidth : '100px'}} alt="LinkediN" /></a>
              <button className="navbar-toggler border-0" type="button" data-toggle="offcanvas">
                <i className="navbar-toggler__bar navbar-toggler__bar--top" />
                <i className="navbar-toggler__bar navbar-toggler__bar--middle" />
                <i className="navbar-toggler__bar navbar-toggler__bar--bottom" />
              </button>
              {/* Navbar Toggle Button */}
              <div className="offcanvas-collapse ml-auto" id="navbarsExampleDefault">
                <ul className="navbar-nav">
                  <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link">Home</a></Link>
                  </li>
              
                

                  <li className="nav-item">
                  <Link to="/contact">
                    <a className="nav-link" >Contact</a></Link>
                  </li>



               {isAuth &&   <li className="nav-item">
                    <a className="nav-link" href="/profile">Profile</a>
                  </li> }

{  isAuth && <li className="nav-item">
                    <Link onClick={handleLogout}>
                    <a className="nav-link" >{user},Logout</a>
                    </Link> 

                  </li>} 
                  
               { !isAuth &&   <li className="nav-item">
                    <Link to="/login">
                    <a className="nav-link" >Login</a>
                    </Link>

                  </li> }
                 
               
                
                
                </ul>
              </div>
            </div>
          </nav>
          {/* END Navbar */}
        </header>
        </div>
    )
}
