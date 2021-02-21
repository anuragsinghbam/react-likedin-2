import React,{useState} from 'react'
import loginImage from '../../images/images-image-login-chart.png'
import {Link} from 'react-router-dom'
import {loginUser} from '../Api'
import {Modal,Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'



export default function Login() {


const [email, setemail] = useState(null)
const [password, setpassword] = useState(null)
const history = useHistory()
const [modalHeading, setmodalHeading] = useState('')
const [modalText, setmodalText] = useState('')
const [modalButton, setmodalButton] = useState('')

const [show, setShow] = useState(false);
const [Error, setError] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
// Login user to system 
const login = async(e)=>{
  e.preventDefault()
const data = {
  email,
  pwd : password
}


try{

const res = await loginUser(data) ;
const done = await localStorage.setItem('linkedinToWinItUser',JSON.stringify(res.data))
setmodalHeading('Yayy !')
setmodalText(`Login Successfull`)
setmodalButton('View Dashboard !')
setShow(true)

return 0 ;
}catch(err){
  console.log(err)
}


}

    return (
        <div>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <a href="/campaigns">
          <Button variant="primary" >
          {modalButton}
          </Button>
          </a>
       
         
        
        </Modal.Footer>
      </Modal>


   <div className="container-fluid"  >
        <div className="row min-vh-100 align-items-stretch">
          <div className="col-lg-7 d-none d-lg-flex justify-content-center align-items-center gradient-brand-color">
            <div className="w-66 mt-2">
              <br/>
              <h2 className="color--white mb-5">We helps your business grow without compromise.</h2>
              <img className="ml-4 " src={loginImage} srcSet="images/image-login-chart@2x.png 2x" alt="Fluxo Login Page" /></div>
          </div>
          <div className="col-lg-5 d-flex align-items-center py-3 background--light">
            <div className="w-75 mx-auto overflow-hidden px-md-5 px-lg-3">
          
              
              
              <br/>
            
             
              
              <main className="main"><h3 className="mb-2">Login to your account</h3>
                <p className="mb-4">Need a Campaign? <Link to="/signup"><a>Create an account</a></Link></p>
                <form className="login-form" onSubmit={(e)=>login(e)}>
                  <div className="row">
                    <div className="col-sm-12 mb-2">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" onChange={(e)=>setemail(e.target.value)} className="form-control" id="email" placeholder="wendy.apple@seed.com" /></div>
                    </div>
                    <div className="col-sm-12 mb-2">
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={(e)=>setpassword(e.target.value)} className="form-control" id="password" placeholder="5 characters or more" /><span className="d-block text-lg-right mt-1">
                          <small><a href="#0">Forgot password?</a></small>
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 mb-2">
                      <input type="submit" value="Login" name="submit" className="btn btn-primary w-100" />
                    </div>


{/* social login button */}

                    {/* <div className="col-sm-12 mb-2 text-center position-relative pt-2 pb-3 px-0">
                      <hr className="mw-100 position-absolute z-index-100" style={{width: 'calc(100% - 30px)', marginLeft: '15px'}} /><small className="px-3 background--light position-relative z-index-105">Or log in with:</small>
                    </div>
                    <div className="col-sm-6 mb-2">
                      <a href="#0" className="btn color--white w-100 px-2" style={{backgroundColor: '#3f5d94'}}><i className="fab fa-facebook-square mr-1" /> Facebook</a>
                    </div>
                  
                    <div className="col-sm-6 mb-2">
                      <a href="#0" className="btn background--white border w-100 px-2">
                        <figure className="d-inline-block mr-1 mb-0"><svg viewBox="0 0 48 48" width={16} height={16} className="google-icon display-block" data-reactid={93}><defs data-reactid={94}><clipPath id="clip-path" data-reactid={95}><path fill="none" d="M44.5,20H24v8.5H35.8C34.7,33.9,30.1,37,24,37a13,13,0,0,1,0-26,12.72,12.72,0,0,1,8.1,2.9l6.4-6.4A22,22,0,1,0,24,46c11,0,21-8,21-22A18.25,18.25,0,0,0,44.5,20Z" data-reactid={96} /></clipPath></defs><g clipPath="url(#clip-path)" data-reactid={97}><path style={{fill: '#fbbc05'}} d="M0,37V11L17,24Z" data-reactid={98} /></g><g clipPath="url(#clip-path)" data-reactid={99}><path style={{fill: '#ea4335'}} d="M0,11,17,24l7-6.1L48,14V0H0Z" data-reactid={100} /></g><g clipPath="url(#clip-path)" data-reactid={101}><path style={{fill: '#34a853'}} d="M0,37,30,14l7.9,1L48,0V48H0Z" data-reactid={102} /></g><g clipPath="url(#clip-path)" data-reactid={103}><path style={{fill: '#4285f4'}} d="M48,48,17,24l-4-3L48,11Z" data-reactid={104} /></g></svg></figure>
                        Google
                      </a>
                    </div>
 */}


                  </div>
                </form>
              </main><footer className="mt-6"><small>©2021 - Linkedin-React. All rights reserved.</small>
              </footer></div>
          </div>
        </div>
      </div>
      
        </div>
    )
}
