import React,{useState,useEffect} from 'react'
import Trendup from '../../images/trendup.svg'
import CampaignCard from './CampaignCard'
import {getAllCampaigns} from '../Api'

export default function CampaignScreen() {

    const [campaignData, setcampaignData] = useState(null)


useEffect(() => {
    getCampaigns()
    return () => {
       
    }
}, [1])

const getCampaigns = async()=>{
const res = await getAllCampaigns();
// console.log('res is ',res.data)
return setcampaignData(res.data.campaigns)
}





    return (
        <div>

<div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-10 ">
            <br/>
         
       <center><h2 className="section__title mb-6"> Trending campaigns
        <img style={{marginLeft : '10px'}} src={Trendup}/></h2></center> 
        </div>


  

{ campaignData && campaignData.map((item,index)=>{
    return <CampaignCard key={index} item={item}/>
}) }












    </div>
</div>


           
        </div>
    )
}
