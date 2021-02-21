import axios from "axios"


const baseUrl = 'https://linkdin-project.herokuapp.com'


const userData = JSON.parse(localStorage.getItem('linkedinToWinItUser'))

var token =  ''

if(userData){
    console.log('User data is',userData)
    token = userData.token
}

export const loginUser = async(data)=>{
    const res = await axios.post(`${baseUrl}/auth/login`,data) ;
    return res ;
}

export const SignupUser = async(data)=>{
    try{
    const res = await axios.post(`${baseUrl}/auth/signup`,data) ;
    return  { error : false , res : res }}catch(e){
        const err = { error : true , data : e.response.data.data }
        return err ;
    }
}


export const getAllCampaigns = async()=>{
        const res = await axios.get(`${baseUrl}/campaign/all`,{headers : { 'Authorization' : `Bearer ${token}`}}) ;
        return res ;
    }