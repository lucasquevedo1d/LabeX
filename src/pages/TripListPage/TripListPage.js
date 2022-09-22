import React from 'react';
import { ButtonTrip, PlaceTitle, ContainerTrip } from './Styled';
import Button from "@material-ui/core/Button"
import { useNavigate } from "react-router-dom"
import { goToCreateTrip, goToTripDetail } from '../../Routes/Coordinator';
import { UseTripsList } from '../../Hooks/UseTripsList';
import { useProtectedPage } from '../../Hooks/UseProtectedPage';
import { CircularProgress } from '@material-ui/core';



const TripListPage = () => {
    useProtectedPage()
const navigate = useNavigate()
const trips = UseTripsList()

    return (
        <div>
            <PlaceTitle>
                <h3>Lista de Viagens</h3>
            </PlaceTitle>
            {trips && trips.map((trip) =>{
            return (
            <ContainerTrip key={trip.id} onClick={() => goToTripDetail(navigate, trip.id) }>{trip.name}</ContainerTrip>
            )     
                    
        })}
        
        <br></br>
        <Button variant='contained' color='primary' fullWidth onClick={() => goToCreateTrip(navigate)}>{trips.isLoading ? <CircularProgress color={'inherit'} size={'24px'}></CircularProgress> : <ButtonTrip>Criar Viagem</ButtonTrip>}</Button>

        </div>
    )

}

export default TripListPage