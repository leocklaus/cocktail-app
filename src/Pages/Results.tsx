import styled from 'styled-components'
import { Card } from '../Components/Card';
import { BackIcon } from '../Icons/BackIcon';
import {Link, useSearchParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { usefetchData } from '../hooks/useCocktails';

interface ResultsProps {
  
}

export type drink = {
    idDrink: string,
    strDrink: string,
    strDrinkThumb: string,
}


export function Results({  }: ResultsProps) {

    const [searchParams] = useSearchParams();

    let ingredient = searchParams.get('ingredient');

    const[data, setData] = useState<drink[]>([]);

    const[loading, setLoading] = useState(true);




    useEffect(() => {
        usefetchData({setLoading, setData, ingredient})
    },[])

  return (
    <Container>
        <Main>
            <Header>
                <Link to="/">
                    <Icon>
                        <BackIcon />
                    </Icon>
                </Link>
                <h1>{ingredient}</h1>
            </Header>
            <ResultGrid>
                {loading && <Message>Loading</Message>}
                {data.length > 0 && data.map((drink => (
                    <Card key={drink.idDrink} name={drink.strDrink} img={drink.strDrinkThumb} />
                )))}
                {(!loading && data.length == 0) && <Message>None Found!</Message>}
            </ResultGrid>
        </Main>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #202020;
    padding-top: 48px;
    padding-left: 20px;
    padding-right: 20px;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 40px;
`;

const Header = styled.header`

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    h1 {
        background-image: linear-gradient(90deg, rgba(241,50,85,1) 0%, rgba(209,52,209,1) 100%);
        background-size: 100%;
        width: fit-content;
        -webkit-background-clip: text;
        background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
        font-weight: bold;
        font-size: 48px;
    }
`;

const ResultGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, 310px);
    column-gap: 60px;
    row-gap: 40px;
    justify-content: center;
`;

const Icon = styled.span`
    position: absolute;
    left: 124px;
    top: 20px;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 580px){
          left: 40px;
        }
`;

const Message = styled.div`
    color: white;
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
    font-size: 24px;
    top: 200px;
`;