import React,{useState,useEffect} from 'react'
import {holidayAxios} from '../config/axiosClient'
import ListItems from './ListItems'

const Main =  () =>{
    const [items,dataSet] = useState(null)
    useEffect(()=>{
        async function fetchMyAPI() {
            let response = await holidayAxios.get(`/2020`)
            dataSet(response.data)
        }
        fetchMyAPI()
    },[])
    //console.log(items && items)

    return(
        <div>
            <ListItems items={items}/>
        </div>
    )
}

export default Main
