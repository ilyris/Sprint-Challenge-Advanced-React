import React from 'react'
import axios from 'axios';
import S from 'styled-components';
import Card from './Card';

class DataDisplayContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        const apiCall = () => {
            axios.get('http://localhost:5000/api/players')
            .then( (response) => {
                this.setState({...this.state, data: response.data});
            })
            .catch( (error) => {
                console.log(error);
            })
        }
        apiCall();

    }
    render() {
        return(
            <MainContainer>
            <MainTitle>Players</MainTitle>
                {this.state.data.map( (players) => {
                    console.log(123);
                    return <Card players={players}/>
                })}
            </MainContainer>
        );
    }
}
export default DataDisplayContainer;

const MainContainer = S.main`
    width: 80%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
`;
const MainTitle = S.h1`
    width: 100%;
    font-size: 34px;
`;