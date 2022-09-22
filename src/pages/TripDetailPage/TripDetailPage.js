import React, { useEffect, useState } from 'react'
import CandidatesList from './CandidatesList'
import { ButtonDelete, ContentContainer, PlaceTitle } from './Styled'
import TripInfo from './TripInfo'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { useProtectedPage } from '../../Hooks/UseProtectedPage'
import { Button, CircularProgress } from '@material-ui/core'
import { goToTripList } from '../../Routes/Coordinator'


const TripDetailPage = () => {
  useProtectedPage()
  const [trip, setTrip] = useState()
  const [deleteTrips, setDeleteTrips] = useState()
  const params = useParams()
  const navigate = useNavigate()

  const getTripsId = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lucas-Quevedo-Silveira/trip/${params.id}`, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    })
      .then((res) => {
        setTrip(res.data.trip)
      })
      .catch((err) => {
        console.log(err)
      })
  }



  const approveCandidates = (approve) => {
    const body = {
      approve: approve
    }

    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lucas-Quevedo-Silveira/trips/${params.id}/candidates/${trip.candidates[0].id}/decide`, body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    })
      .then((res) => {
        getTripsId()
      })
      .catch((err) => {
        console.log(err.data.response.message)
      })
  }

  const deleteTrip = () => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lucas-Quevedo-Silveira/trips/${params.id}`, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    })
      .then((res) => {
        alert("Viagem deletada com sucesso!")
        setDeleteTrips(res.data)
        goToTripList(navigate)
      })
      .catch((err) => {
        console.log(err)
      })

  }

  useEffect(() => {
    getTripsId()
  }, [])


  return (
    <div>
      <PlaceTitle><h2>Detalhes da viagem</h2></PlaceTitle>
      {trip ? <ContentContainer>

        <TripInfo info={trip} />

        <CandidatesList
          candidates={trip.candidates}
          approveCandidates={approveCandidates}
        />

      </ContentContainer> : <CircularProgress></CircularProgress>}
      <br></br>
      <Button onClick={() => deleteTrip()} variant='contained' color='primary' fullWidth><ButtonDelete>Deletar</ButtonDelete></Button>
    </div>
  )
}

export default TripDetailPage