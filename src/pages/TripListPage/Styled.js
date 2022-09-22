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
width: 300px;
padding: 20px;
cursor: pointer;
:hover{
    background-color: #8B0000;
    color: white;
    transition: color .15s;
}
display: flex;
justify-content: space-between;
margin: auto;
`