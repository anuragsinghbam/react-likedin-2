import React from 'react'

export default function Team() {
    return (
        <div>
            
          <br/>  <center> <h2 className="section__title mb-6">Meet the team</h2></center>

<div className="container">
    <div style={{display : 'flex' , justifyContent : 'space-around'}}>
        

    <div className="card" style={{width: '22rem'}}>
        <img src="https://linkedinittowinit.com/assets/imgs/nasir-ali-thumb.jpg" style={{maxWidth : '200px' , marginLeft : 'auto' , marginRight : 'auto' }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Nasir Ali</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Read More</a>
        </div>
      </div>



      <div className="card" style={{width: '22rem'}}>
        <img src="https://linkedinittowinit.com/assets/imgs/ambreen-nadeem-thumb.jpg" style={{maxWidth : '200px' , marginLeft : 'auto' , marginRight : 'auto' }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Ambreen Nadeem</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Read More</a>
        </div>
      </div>





    </div>
</div>



        


        </div>
    )
}
