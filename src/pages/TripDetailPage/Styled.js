import styled from "styled-components";

export const PlaceTitle = styled.div`
padding: 20px;
font-family: 'Bebas Neue', cursive;
font-size: xx-large;
display: flex;
flex-direction: column;
align-items: center;
color: #8B0000;
`
export const ButtonTrip = styled.div`
font-family: 'Bebas Neue', cursive;
`
export const ContainerTrip = styled.div`

background-color: transparent;
color: #8B0000;
font-family: 'Bebas Neue', cursive;
font-size: larger;
width: auto;
padding: 20px;
cursor: pointer;
:hover{
    background-color: #8B0000;
    color: white;
    min-width: 250px;
    min-height: 250px;
}
`
export const ContentContainer = styled.div`
display: grid;
grid-auto-flow: column;
gap: 32px;
`
export const ListCadindates = styled.div`
display: flex;
align-items: center;
margin: auto;
padding: 8px;
`
export const ApprovedCandidates = styled.div`
display: flex;
margin-left: auto;
`
export const ButtonDelete = styled.div`
font-family: 'Bebas Neue', cursive;
`