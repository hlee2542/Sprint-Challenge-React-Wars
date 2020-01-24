import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
    width: 50%;
    color: white;
    border: 1px solid white;
    box-sizing: border-box;
`;

const Card = (props) => {
    return (
        <Body>
            <h2>{props.person.name}</h2>
            <p>Height: {props.person.height} cm</p>
            <p>Born: {props.person.birth_year}</p>
            <p>Gender: {props.person.gender}</p>
            <p>Skin Color: {props.person.skin_color}</p>
            <p>Eye Color: {props.person.eye_color}</p>
        </Body>
    )
};

export default Card;