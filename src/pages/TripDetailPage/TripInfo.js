import React from 'react'
import { ContainerTrip } from './Styled'

const TripInfo = (props) => {
    const {name, planet, description, date, durationInDays} = props.info
    return (
        <div>
            <ContainerTrip>
                <h2>Informções da viagem</h2>
            <p>{name}</p>
            <p>{planet}</p>
            <p>{description}</p>
            <p>{date}</p>
            <p>{durationInDays} dias</p>
            </ContainerTrip>

        </div>
    )
}

export default TripInfo