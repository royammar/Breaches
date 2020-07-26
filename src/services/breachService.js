import axios from 'axios'

var Axios = axios.create({
    withCredentials: true, 
    headers: {
        'X-Best-Pokemon': 'Pikachu',
        'Access-Control-Allow-Origin': '*',
    }
});


export default {
    getBreaches,

}


async function getBreaches(offset=0){
    const {data}= await  Axios.get(`https://guard.io/v2/hiring/fe/breaches?offset=${offset}`)
    let breaches=data.items
    return [...breaches]
  }


 