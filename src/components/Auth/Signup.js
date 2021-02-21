import React,{useState,useEffect} from 'react'
import SignupImage from '../../images/signup.jpg'
import {SignupUser} from '../Api'
import {Modal,Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

export default function Signup() {

const history = useHistory()
const [name, setname] = useState('')
const [email, setemail] = useState('')
const [pwd, setpwd] = useState('')
const [confirmpwd, setconfrimpwd] = useState('')
const [phoneNumber, setphoneNumber] = useState('')
const [linkedinUrl, setlinkedinUrl] = useState('')
const [modalHeading, setmodalHeading] = useState('')
const [modalText, setmodalText] = useState('')
const [modalButton, setmodalButton] = useState('')

const [show, setShow] = useState(false);
const [Error, setError] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



const handleSignup =async(e)=>{
e.preventDefault()
const data = {
  name,email,pwd,phoneNumber,linkedinUrl
}

console.log('Data for signup is',data)

if(pwd===confirmpwd){
  try{
    const res = await SignupUser(data) ;
    console.log('Res is' ,res.data)

    if(res.error){
      setmodalHeading('Oops')
      setmodalText(res.data)
      setmodalButton('Okay !')
      setShow(true)
      return setError(true)
    }else{
      setmodalHeading('Sign Up Sucessful')
      setmodalText(`${name} your Linkedin To Win It has been created successfully !`)
      setmodalButton('Go to dashboard')
      setShow(true)
    }

   
    }catch(e){
      console.log(e)
     
    }

}else{
  setmodalHeading('Oops')
  setmodalText(`Passwords do not match...`)
  setmodalButton('Try Again !')
  setShow(true)
  return setError(true)
}



}




    return (
        <div className="container">
            <div className="row">
         


            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        { setError ? ( <Button variant="primary" onClick={handleClose}>
          {modalButton}
          </Button>) : ( <Button variant="primary" onClick={()=>history.push('/campaigns')}>
          {modalButton}
          </Button>) }
         
        
        </Modal.Footer>
      </Modal>








         <div className="col-lg-7 mb-2 contact-form__wrapper p-1 order-lg-1">

         <center>
             <h2>Create Account</h2>
         </center>

         <br/>
        


                <form action="#" className="contact-form form-validate" onSubmit={handleSignup}>
                  <div className="row">
                    <div className="col-sm-12 mb-3">
                      <div className="form-group">
                        <label className="required-field" htmlFor="firstName">Full Name</label>
                        <input onChange={(e)=>setname(e.target.value)} type="text" className="form-control" id="firstName" name="firstName" placeholder="Wendy" />
                      </div>
                    </div>
                    
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label className="required-field" htmlFor="email">Email</label>
                        <input onChange={(e)=>setemail(e.target.value)} type="text" className="form-control" id="email" name="email" placeholder="wendy.apple@seed.com" />
                      </div>
                    </div>



                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onChange={(e)=>setphoneNumber(e.target.value)} type="tel" className="form-control" id="phone" name="phone" placeholder="(021)-454-545" />
                      </div>
                    </div>
                   

                    {/* <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="phone">Date of birth</label>
                        <input type="date" className="form-control" id="phone" name="phone" placeholder="(021)-454-545" />
                      </div>
                    </div>
                   

                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="phone">Upload Image</label>
                        <input type="file" className="form-control" id="phone" name="phone" placeholder="" />
                      </div>
                    </div> */}
                   
                    <div className="col-sm-12 mb-3">
                      <div className="form-group">
                        <label htmlFor="phone">Password</label>
                        <input  onChange={(e)=>setpwd(e.target.value)} type="password" className="form-control" id="phone" name="phone" placeholder="*******" />
                      </div>
                    </div>

                    <div className="col-sm-12 mb-3">
                      <div className="form-group">
                        <label htmlFor="phone">Confirm Password</label>
                        <input onChange={(e)=>setconfrimpwd(e.target.value)} type="password" className="form-control" id="phone" name="phone" placeholder="*******" />
                      </div>
                    </div>


                    <div className="col-sm-12 mb-3">
                      <div className="form-group">
                        <label htmlFor="phone">Linkedin Profile URL</label>
                        <input onChange={(e)=>setlinkedinUrl(e.target.value)} type="text" className="form-control" id="phone" name="phone" placeholder="linkedin profile....." />
                      </div>
                    </div>



                    <div className="col-sm-12 mb-3">
                      <input type="submit" value="Sign Up" name="submit" className="btn btn-primary" />
                    </div>
                  </div>
                </form>
              </div> {/* End Contact Form Wrapper */}


              <div className="col-lg-5" style={{overflow : 'hidden'}}>
    <img style={{objectFit : 'contain' , width : '80%'}} src={SignupImage} />
    </div>


              </div>
        </div>
    )
}
