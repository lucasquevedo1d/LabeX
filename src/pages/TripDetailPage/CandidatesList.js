import React from 'react'
import { ApprovedCandidates, ContainerTrip, ListCadindates } from './Styled'
import ThumbUpAlt from "@material-ui/icons/ThumbUpAlt"
import ThumbDownAlt from "@material-ui/icons/ThumbDownAlt"
import axios from "axios"

const CandidatesList = (props) => {

  const approveCandidate = () =>{
     props.approveCandidates(true, props.candidates.id)
   }

   const rejectCandidate = () =>{
    props.approveCandidates(false, props.candidates.id)
   }

 
  const mapCandidates = props.candidates.map((candidate) =>{
    return  <ListCadindates>
      {candidate.name}
      <ApprovedCandidates>
      <ThumbUpAlt onClick={approveCandidate}/>
      <ThumbDownAlt onClick={rejectCandidate}/>
      </ApprovedCandidates>
      </ListCadindates>
      
  })

  return (
    <div>
        <ContainerTrip>
          <h2>Informções dos Cadidatos</h2>
          <p>{mapCandidates}</p>
          </ContainerTrip>
    </div>
  )
}

export default CandidatesList