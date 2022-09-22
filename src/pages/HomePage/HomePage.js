import React from 'react'
import { ContainerHome, FontButton, ImageHome, Paragrafo, PlaceTitle, SpaceButton } from './Styled'
import { ButtonHome } from "./Styled"
import Astronauta from "../../img/astronauta.webp"
import { goToApplicationTrip, goToLogin } from '../../Routes/Coordinator'
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <ContainerHome>
      <PlaceTitle>
    <ImageHome src={Astronauta}/>
        <h1>LabeX</h1>
      </PlaceTitle>
      <Paragrafo>
      <p>Viajar é colecionar memórias sobre o universo!</p>
      </Paragrafo>
      <SpaceButton>
        <ButtonHome color='primary' variant='contained' onClick={() => goToLogin(navigate)}> <FontButton>Adiministrador</FontButton></ButtonHome>
        <ButtonHome color='primary' variant='contained' onClick={() => goToApplicationTrip(navigate)}><FontButton>Candidatar viagens</FontButton></ButtonHome>
      </SpaceButton>

    </ContainerHome>
  )
}

export default HomePage