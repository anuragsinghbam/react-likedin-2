import React from 'react'
import Slider from "react-slick";



export default function Testimonial() {



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay : true,
    navs : true,
    arrows : true,
  };

    return (
        <div>
            

          <section className="section section-testimonials gradient-light--lean-left">
      
      {/* Highlight SVG Background */}

      <figure className="figure highlight-background highlight-background--lean-left">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1439px" height="480px">
          <defs>
            <linearGradient id="PSgrad_5" x1="42.262%" x2="0%" y1="90.631%" y2="0%">
              <stop offset="28%" stopColor="rgb(245,246,252)" stopOpacity={1} />
              <stop offset="100%" stopColor="rgb(255,255,255)" stopOpacity={1} />
            </linearGradient>
          </defs>
          <path fillRule="evenodd" fill="rgb(255, 255, 255)" d="M863.247,-271.203 L-345.788,-427.818 L760.770,642.200 L1969.805,798.815 L863.247,-271.203 Z" />
          <path fill="url(#PSgrad_5)" d="M863.247,-271.203 L-345.788,-427.818 L760.770,642.200 L1969.805,798.815 L863.247,-271.203 Z" />
        </svg>
      </figure>






      <div className="container">
        <div className="row">
          <div className="col-md-5 text-center text-md-left">
            <div className="icon icon--rounded bg-primary mb-4">
              <img src="images/icn_fluxo_quote.svg" alt="Feature Icon" className="feature-icon" />
            </div>
            <h2 className="mt-2 mb-5 mb-md-0">1000+ companies have switched to Fluxo</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className=" pt-5 pb-6">
              <div className="">







              <Slider {...settings}>
                
              <div className=" testimony__card p-3">
                  <blockquote className="blockquote shadow">
                    <span className="rating text-warning d-block mb-4">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </span>
                    <p className="mb-4">Finally, a Bootstrap template that suit my company.</p>
                    <footer className="blockquote-footer d-flex align-items-center">
                      <div className="testimony__avatar d-inline-block mr-3">
                        <img className="rounded-circle" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" srcSet="images/avatars/avatar_55_4@2x.png 2x" alt="Avatar" />
                      </div>
                      <div className="testimony__info d-inline-block">
                        <span className="info-name d-block">Beulah Baird</span>
                        <span className="info-company d-block">CEO, Some Company</span>
                      </div>
                    </footer>
                  </blockquote>
                </div>



                <div className=" testimony__card p-3">
                  <blockquote className="blockquote shadow">
                    <span className="rating text-warning d-block mb-4">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </span>
                    <p className="mb-4">I couldn't have done it without the team from Fluxo.</p>
                    <footer className="blockquote-footer d-flex align-items-center">
                      <div className="testimony__avatar d-inline-block mr-3">
                        <img className="rounded-circle" src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=501&q=80" srcSet="images/avatars/avatar_55_1@2x.png 2x" alt="Avatar" />
                      </div>
                      <div className="testimony__info d-inline-block">
                        <span className="info-name d-block">Jacob Lorenssen</span>
                        <span className="info-company d-block">CEO, Some Company</span>
                      </div>
                    </footer>
                  </blockquote>
                </div>

                
                
         
                <div className=" testimony__card p-3">
                  <blockquote className="blockquote shadow">
                    <span className="rating text-warning d-block mb-4">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </span>
                    <p className="mb-4">I couldn't have done it without the team from Fluxo.</p>
                    <footer className="blockquote-footer d-flex align-items-center">
                      <div className="testimony__avatar d-inline-block mr-3">
                        <img className="rounded-circle" src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=501&q=80" srcSet="images/avatars/avatar_55_1@2x.png 2x" alt="Avatar" />
                      </div>
                      <div className="testimony__info d-inline-block">
                        <span className="info-name d-block">Jacob Lorenssen</span>
                        <span className="info-company d-block">CEO, Some Company</span>
                      </div>
                    </footer>
                  </blockquote>
                </div>

                
                
         
         
                <div className=" testimony__card p-3">
                  <blockquote className="blockquote shadow">
                    <span className="rating text-warning d-block mb-4">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </span>
                    <p className="mb-4">I couldn't have done it without the team from Fluxo.</p>
                    <footer className="blockquote-footer d-flex align-items-center">
                      <div className="testimony__avatar d-inline-block mr-3">
                        <img className="rounded-circle" src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=501&q=80" srcSet="images/avatars/avatar_55_1@2x.png 2x" alt="Avatar" />
                      </div>
                      <div className="testimony__info d-inline-block">
                        <span className="info-name d-block">Jacob Lorenssen</span>
                        <span className="info-company d-block">CEO, Some Company</span>
                      </div>
                    </footer>
                  </blockquote>
                </div>

                
                
         

              

            
                 </Slider>




               










             
             
        



              </div>
           
            </div>
            {/* End Swiper Container */}
          </div>
        </div>
      </div>
    </section>
    {/* END Section Testimonials */}
        </div>
    )
}
