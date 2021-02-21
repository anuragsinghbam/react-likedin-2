import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="container" style={{overflow : 'hidden'}}>
                <div className="row align-items-center">
                    <div className="col-lg-5">

                        <h3>Ooops ! This page is not found.
                            Please login and try again.
                        </h3>
                        <br/>
                       
                        <Link to="/login"><a  className="btn btn-primary btn--has-shadow" style={{color : 'white'}}>Login</a></Link>

                    </div>
                    <div className="col-lg-6">
                        <img style={{maxWidth : '100%'}} src="https://cdn.dribbble.com/users/2071065/screenshots/6559618/dribble_4-19_4x.png?compress=1&resize=800x600" />
                    </div>
                </div>
        </div>
    )
}
