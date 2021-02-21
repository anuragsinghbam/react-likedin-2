import {useEffect,useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Home from './components/Home/Home'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Navbar from './components/Navbar/Navbar'
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";
import CampaignScreen from "./components/Campaign/CampaignScreen";
import {reactLocalStorage} from 'reactjs-localstorage';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard/Dashboard';


function App() {


const [isAuth, setisAuth] = useState(false)

 

  useEffect(() => {

var data = JSON.parse(localStorage.getItem('linkedinToWinItUser'))
console.log('User Data is ',data)

    if(data){
     setisAuth(true)
    }
    return () => {
      
    }
  }, [])


  return (
    <div className="App">
 
      <Router>


      <Navbar/>
   <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/signup" component={Signup}/>
         <Route exact path="/login" component={Login}/>
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/dashboard" component={Dashboard}/>


         { isAuth && <div>
          <Route exact path="/profile" component={Profile}/>  
        <Route exact path="/campaigns" component={CampaignScreen}/>
         </div>   }


         <Route component={NotFound} />
       </Switch>
     </Router>
    </div>
  );
}

export default App
