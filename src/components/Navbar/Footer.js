import React from 'react'
import Logo from '../../images/logo.jpg'
import {Link} from 'react-router-dom'


export default function Footer({showTalkToExpert}) {
    return (
        <div>
                
        <footer className="footer background--dark">
          <div className="container">
            <div className="row">

{ showTalkToExpert &&     <div className="cta-block__wrapper col">
                <div className="cta-block gradient-brand-color py-5">
                  <div className="row">
                    <div className="col-10 offset-1 d-md-flex justify-content-between align-items-center">
                      <div className="cta__contet color--white">
                        <h2 className="color--white">Join our community <br/>for latest updates.</h2>
                        <p>1000+ plus members already joined.</p>
                      </div>
                      <div className="cta__button">
                        <a href="#0" className="btn btn-secondary">Join community</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

    }
           

              {/* CTA Block Wrapper */}
              <div className="footer-content col-12 d-md-flex justify-content-between align-items-center">
                <div className="footer__brand">
                  <a className="footer-logo" href="index.html"><img src={Logo} style={{maxWidth : '100px'}} alt="Fluxo" /></a>
                  <p className="mb-0">LinkedIn it to win is run by 1000+ members across the globe.</p>
                </div>
                <div className="footer__menu">
                  <ul className="footer-nav nav" >
                   
                    <li className="nav-item">
                    <Link to="/">
                      <a className="nav-link"  style={{color : 'white'}}>Home</a></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about">
                      <a className="nav-link"  style={{color : 'white'}}>About</a></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact">
                      <a className="nav-link" style={{color : 'white'}} >Contact</a></Link>
                    </li>
                    
                    <li className="nav-item">
                    <Link to="/login">
                      <a className="nav-link" style={{color : 'white'}} >Login</a></Link>
                    </li>
                    <li className="nav-item nav-item--btn">
                    <Link to="/signup">
                    <a  className="btn btn-primary btn-sm btn--has-shadow mt-3 mt-md-0" style={{color : 'white'}}>Sign up</a></Link>
                    
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer Content */}
              <div className="col-12">
                <div className="footer-copyright-column d-md-flex justify-content-between align-items-center">
                  <div className="copyright">
                    <p>Designed by TheBrandwick.</p>
                  </div>
                  <ul className="social-icons ml-auto mb-0">
                    <li><a href="#0"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#0"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#0"><i className="fab fa-instagram" /></a></li>
                    <li><a href="#0"><i className="fab fa-youtube" /></a></li>
                    <li><a href="#0"><i className="fab fa-pinterest-p" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* END Footer */}
        </div>
    )
}
