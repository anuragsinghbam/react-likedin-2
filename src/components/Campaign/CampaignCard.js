import React from 'react'

export default function CampaignCard({item}) {
// console.log('Item is',item)

    return (
        <div className="col-lg-4" style={{ marginTop : '40px' }}>
        <div className="card" >
           { item.artWork && <img src={item.artWork.imgUrl} style={{maxWidth : '200px' , marginLeft : 'auto' , marginRight : 'auto' ,}} className="card-img-top" alt="..." />}
          
          <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.desc}</p>
              <p></p>
              <a href="#" className="btn btn-primary">Claim Artwork</a>
            </div>
          </div>
        </div>
    )
}
