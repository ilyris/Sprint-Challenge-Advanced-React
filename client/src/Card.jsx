import React from 'react'
import axios from 'axios';
import S from 'styled-components';

const Card = (props) => {
    console.log(props);
    return(
        <CardContainer>
            <h3>Name: {props.players.name}</h3>
            <p>Country: {props.players.country}</p>
            <p>Searches: {props.players.searches}</p>
        </CardContainer>
    );
}

export default Card

const CardContainer = S.div`
    display: flex;
    flex-direction: column;
    background-color: pink; 
    width: 18%;
    margin: 10px 0 10px 0;
`;