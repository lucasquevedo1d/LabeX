import { useEffect, useState } from "react"
import axios from "axios"
export const UseTripsList = () =>{
    const [trips, setTrips] = useState([])
    const [isLoading, setIsloading] = useState(false) 
    useEffect(() =>{
      setIsloading(true)
       axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lucas-Quevedo-Silveira/trips")
    .then((res) =>{
      setTrips(res.data.trips)
    setIsloading(false)
    })
    .catch((err) =>{
      alert(err.response.data.message)
      setIsloading(false)
    })
},[])
    return trips
  }
  
