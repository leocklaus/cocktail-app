import styled from 'styled-components'
import { TextInput } from './TextInput';
import { RandomButton } from './RandomButton';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRandomCocktailIngredient } from '../hooks/getRandomCocktail';

interface MainFormProps {
  
}



export function MainForm({  }: MainFormProps) {

    const [textInput, handleTextInput] = useState("");

    const navigate = useNavigate();

    function handleFormSubit(e: FormEvent<HTMLFormElement>): void {

        e.preventDefault();

        let basePath = "/results?ingredient=";

        let query = basePath + textInput;

        if(textInput.length === 0){
            let randomIngredient = getRandomCocktailIngredient();
            query = basePath + randomIngredient;
        } 

        navigate(query);
    }

  return (
    <Container onSubmit={handleFormSubit}>
            <TextInput textInput={textInput} handleTextInput={handleTextInput}/>
            <h2>or</h2>
            <RandomButton textInput={textInput}/>
    </Container>
  )
}

const Container = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;

    h2 {
        color: white;
        font-weight: bold;
        font-size: 24px;
    }
`;
