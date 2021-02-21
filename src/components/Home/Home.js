import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Navbar/Footer'
import Testimonial from './Testimonial'
import Services from './Services'
import Team from './Team'


export default function Home() {
    return (
        <div>
         
        <main className="main">
          <section className="section section-hero py-0 gradient-light--lean-right">
            <div className="container">
              <figure className="figure highlight-background highlight-background--lean-right">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1291px" height="480px">
                  <defs>
                    <linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%">
                      <stop offset="28%" stopColor="rgb(244,245,250)" stopOpacity={1} />
                      <stop offset="100%" stopColor="rgb(252,253,255)" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  <path fillRule="evenodd" opacity="0.1" fill="rgb(0, 0, 0)" d="M480.084,0.001 L1290.991,0.001 L810.906,831.000 L-0.000,831.000 L480.084,0.001 Z" />
                  <path fill="url(#PSgrad_0)" d="M480.084,0.001 L1290.991,0.001 L810.906,831.000 L-0.000,831.000 L480.084,0.001 Z" />
                </svg>
              </figure>
              {/* Highlight SVG Background */}
              <div className="row vh-100">
                <div className="col-md-8 offset-md-2 col-lg-5 offset-lg-0 align-self-center text-center text-lg-left">
                  <h1 className="mb-3" style={{fontWeight : 'bold'}}><strong>Grow your Linkedin Profile with us.</strong></h1>
                  <p className="lead mb-5">A Volunteer platform, designed to help members grow creating a strong personal brand through collaboration.</p>
                  <Link to="/login"><a  className="btn btn-primary btn--has-shadow" style={{color : 'white'}}>Get Started Now</a></Link>
                </div>
                <div className="d-none d-lg-block col-lg-7 align-self-end text-right">
                  <img src="images/hero_image@2x.png" srcSet="images/hero_image@2x.png 2x" alt="Fluxo Social Media Marketing Template" className="mw-100" />
                </div>
              </div>
            </div>
          </section>
          {/* END Section Hero */}




          <section className="section section-main-features gradient-light--upright">
            <figure className="figure highlight-background highlight-background--lean-left">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1439px" height="480px">
                <defs>
                  <linearGradient id="PSgrad_1" x1="42.262%" x2="0%" y1="90.631%" y2="0%">
                    <stop offset="28%" stopColor="rgb(245,246,252)" stopOpacity={1} />
                    <stop offset="100%" stopColor="rgb(255,255,255)" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <path fillRule="evenodd" fill="rgb(255, 255, 255)" d="M863.247,-271.203 L-345.788,-427.818 L760.770,642.200 L1969.805,798.815 L863.247,-271.203 Z" />
                <path fill="url(#PSgrad_1)" d="M863.247,-271.203 L-345.788,-427.818 L760.770,642.200 L1969.805,798.815 L863.247,-271.203 Z" />
              </svg>
            </figure>
            {/* Highlight SVG Background */}
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                  <h2 className="section__title mb-6">Meticulously planned campaigns running every week.</h2>
                </div>
                <div className="main-features__list col-md-12">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="main-feature text-center mb-md-0">
                        <div className="icon icon--rounded bg-primary">
                          <img src="images/icn_fluxo_influencer.svg" alt="Feature Icon" className="feature-icon" />
                        </div>
                        <h5 className="main-feature__title">
                          Influencer
                        </h5>
                        <p className="main-feature__content px-4 px-md-0 px-xl-4">
                          Sed ut perspiciatis unde omnis iste natus error is simply dummy text of the printing and typesetting industry.
                        </p>
                      </div>
                      {/* Main Feature */}
                    </div>
                    <div className="col-md-4">
                      <div className="main-feature text-center mb-md-0">
                        <div className="icon icon--rounded bg-primary">
                          <img src="images/icn_fluxo_chart.svg" alt="Feature Icon" className="feature-icon" />
                        </div>
                        <h5 className="main-feature__title">
                          Roi
                        </h5>
                        <p className="main-feature__content px-4 px-md-0 px-xl-4">
                          Sed ut perspiciatis unde omnis iste natus error is simply dummy text of the printing and typesetting industry.
                        </p>
                      </div>
                      {/* Main Feature */}
                    </div>
                    <div className="col-md-4">
                      <div className="main-feature text-center mb-0">
                        <div className="icon icon--rounded bg-primary">
                          <img src="images/icn_fluxo_cloud.svg" alt="Feature Icon" className="feature-icon" />
                        </div>
                        <h5 className="main-feature__title">
                          Database
                        </h5>
                        <p className="main-feature__content px-4 px-md-0 px-xl-4">
                          Sed ut perspiciatis unde omnis iste natus error is simply dummy text of the printing and typesetting industry.
                        </p>
                      </div>
                      {/* Main Feature */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* END Section Main Feature */}



<Services/>


<Testimonial/>


<Team/>






          <section className="section section-fact gradient-light--lean-left">
            <div className="container">
              <div className="row row-grid justify-content-center">
                <div className="col-md-8 col-lg-6 text-center">
                  <h2 className="section__title mb-6">We speak with numbers</h2>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="fact-item text-center mb-md-0 px-3">
                        <div className="icon icon--rounded bg-primary">
                          <img src="images/icn_fluxo_group-users.svg" alt="Feature Icon" className="feature-icon" />
                        </div>
                        <h3 className="fact__number">400,000+</h3>
                        <small className="fact__title">Active Users</small>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="fact-item text-center mb-md-0 px-3">
                        <div className="icon icon--rounded bg-primary">
                          <img src="images/icn_fluxo_office.svg" alt="Feature Icon" className="feature-icon" />
                        </div>
                        <h3 className="fact__number">1000+</h3>
                        <small className="fact__title">Companies</small>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="fact-item text-center mb-md-0 px-3">
                        <div className="icon icon--rounded bg-primary">
                          <img src="images/icn_fluxo_speaker.svg" alt="Feature Icon" className="feature-icon" />
                        </div>
                        <h3 className="fact__number">900,000+</h3>
                        <small className="fact__title">Campaign Posted</small>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="fact-item text-center mb-md-0 px-3">
                        <div className="icon icon--rounded bg-primary">
                          <img src="images/icn_fluxo_customer-support.svg" alt="Feature Icon" className="feature-icon" />
                        </div>
                        <h3 className="fact__number">24/7</h3>
                        <small className="fact__title">Customer Support</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* END Section Fact */}




          <section className="section section-subscribe gradient-light--upright">
            <figure className="figure pattern-svg">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1306px" height="225px">
                <path fillRule="evenodd" fill="rgb(35, 23, 123)" d="M-0.011,9.318 L8.682,6.988 L11.011,15.682 L2.318,18.011 L-0.011,9.318 Z" />
                <path fillRule="evenodd" fill="rgb(35, 23, 123)" d="M607.694,164.319 L612.680,161.693 L615.306,166.680 L610.320,169.305 L607.694,164.319 Z" />
                <path fillRule="evenodd" fill="rgb(93, 203, 250)" d="M667.343,205.646 L679.152,213.179 L671.620,224.988 L659.810,217.456 L667.343,205.646 Z" />
                <path fillRule="evenodd" fill="rgb(93, 203, 250)" d="M915.839,-0.008 L924.997,5.833 L919.156,14.991 L909.998,9.150 L915.839,-0.008 Z" />
                <path fillRule="evenodd" fill="rgb(35, 23, 123)" d="M989.000,93.000 C993.418,93.000 997.000,96.582 997.000,101.000 C997.000,105.418 993.418,109.000 989.000,109.000 C984.582,109.000 981.000,105.418 981.000,101.000 C981.000,96.582 984.582,93.000 989.000,93.000 Z" />
                <path fillRule="evenodd" fill="rgb(35, 23, 123)" d="M1165.000,8.000 C1167.761,8.000 1170.000,10.238 1170.000,13.000 C1170.000,15.761 1167.761,18.000 1165.000,18.000 C1162.239,18.000 1160.000,15.761 1160.000,13.000 C1160.000,10.238 1162.239,8.000 1165.000,8.000 Z" />
                <path fillRule="evenodd" fill="rgb(93, 203, 250)" d="M1303.500,118.000 C1304.881,118.000 1306.000,119.119 1306.000,120.500 C1306.000,121.880 1304.881,123.000 1303.500,123.000 C1302.119,123.000 1301.000,121.880 1301.000,120.500 C1301.000,119.119 1302.119,118.000 1303.500,118.000 Z" />
                <path fillRule="evenodd" fill="rgb(93, 203, 250)" d="M61.000,112.000 C62.657,112.000 64.000,113.343 64.000,115.000 C64.000,116.657 62.657,118.000 61.000,118.000 C59.343,118.000 58.000,116.657 58.000,115.000 C58.000,113.343 59.343,112.000 61.000,112.000 Z" />
                <path fillRule="evenodd" fill="rgb(74, 92, 246)" d="M265.500,-0.000 C271.299,-0.000 276.000,4.701 276.000,10.500 C276.000,16.299 271.299,21.000 265.500,21.000 C259.701,21.000 255.000,16.299 255.000,10.500 C255.000,4.701 259.701,-0.000 265.500,-0.000 Z" />
                <path fillRule="evenodd" fill="rgb(35, 23, 123)" d="M185.500,131.000 C187.985,131.000 190.000,133.015 190.000,135.500 C190.000,137.985 187.985,140.000 185.500,140.000 C183.015,140.000 181.000,137.985 181.000,135.500 C181.000,133.015 183.015,131.000 185.500,131.000 Z" />
              </svg>
            </figure>
            {/* Pattern SVG Background */}
            <div className="container">
              <div className="row row-grid justify-content-center">
                <div className="col-md-8 col-lg-7 col-xl-6 text-center">
                  <h2 className="section__title mb-4">Subscribe to our weekly newsletter.</h2>
                  <p>We don't spam !</p>
                  <form className="subscribe-form form-inline mt-5">
                    <div className="input-group mr-sm-3 mb-2">
                      <input type="email" className="form-control" id="email" placeholder="Email address" />
                    </div>
                    <button type="submit" className="btn btn-primary btn--has-shadow mb-2">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* END Section Subscribe */}
        </main>


<Footer showTalkToExpert={true}/>
    
        </div>
    )
}
