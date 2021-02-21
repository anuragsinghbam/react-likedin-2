import React from 'react'

export default function Contact() {
    return (
        <div>


<div className="container">
    <div className="row">
     

    <div className="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
                <h3 className="color--white mb-5">Get in Touch</h3>
                <ul className="contact-info__list list-style--none position-absolute z-index-101">
                  <li className="mb-4 pl-4">
                    <span className="position-absolute"><i className="fas fa-envelope" /></span>
                    support@fluxo.com
                  </li>
                  <li className="mb-4 pl-4">
                    <span className="position-absolute"><i style={{transform: 'rotate(90deg)'}} className="fas fa-phone" /></span>
                    (021)-241454-545
                  </li>
                  <li className="mb-4 pl-4">
                    <span className="position-absolute"><i className="fas fa-map-marker-alt" /></span>
                    Fluxo Technologies Inc.<br />
                    2694 Ivy City Rainbow Drive<br />
                    Washington 99161
                    <div className="mt-3">
                      <a href="https://www.google.com/maps" target="_blank" className="text-link link--right-icon text-white">Get directions <i className="link__icon fa fa-directions" /></a>
                    </div>
                  </li>
                </ul>
                <figure className="figure position-absolute m-0 opacity-06 z-index-100" style={{bottom: 0, right: '10px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="444px" height="626px">
                    <defs>
                      <linearGradient id="PSgrad_1" x1="0%" x2="81.915%" y1="57.358%" y2="0%">
                        <stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity={1} />
                        <stop offset="100%" stopColor="rgb(0,54,207)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <path fillRule="evenodd" opacity="0.302" fill="rgb(72, 155, 248)" d="M816.210,-41.714 L968.999,111.158 L-197.210,1277.998 L-349.998,1125.127 L816.210,-41.714 Z" />
                    <path fill="url(#PSgrad_1)" d="M816.210,-41.714 L968.999,111.158 L-197.210,1277.998 L-349.998,1125.127 L816.210,-41.714 Z" />
                  </svg>
                </figure>
              </div>


              <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                <form action="https://weboth.us/preview/fluxo-v1.0.0/html/contact.html#" className="contact-form form-validate" noValidate="novalidate">
                  <div className="row">
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label className="required-field" htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Wendy" />
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Appleseed" />
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label className="required-field" htmlFor="email">Email</label>
                        <input type="text" className="form-control" id="email" name="email" placeholder="wendy.apple@seed.com" />
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" className="form-control" id="phone" name="phone" placeholder="(021)-454-545" />
                      </div>
                    </div>
                    <div className="col-sm-12 mb-3">
                      <div className="form-group">
                        <label className="required-field" htmlFor="message">How can we help?</label>
                        <textarea className="form-control" id="message" name="message" rows={4} placeholder="Hi there, I would like to....." defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-sm-12 mb-3">
                      <button type="submit" name="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </form>
              </div> {/* End Contact Form Wrapper */}

    </div>
</div>











           
        </div>
    )
}
