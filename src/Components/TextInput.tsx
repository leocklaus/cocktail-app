import styled from 'styled-components'

interface TextInputProps {
  textInput: string,
  handleTextInput: React.Dispatch<React.SetStateAction<string>>,
}

export function TextInput({ textInput, handleTextInput }: TextInputProps) {
  return (
    <Container>
        <input 
            type='text' 
            value={textInput}
            placeholder='Search by your favorite ingredient' 
            onChange={(e) => handleTextInput(e.target.value)}
        />
    </Container>
  )
}

const Container = styled.div`
    width: min(590px, 90vw);
    height: 57px;
    background: linear-gradient(90deg, rgba(255,0,61,1) 0%, rgba(209,52,209,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 32px;


    input {
        width: min(584px, 89vw);
        height: 51px;
        border-radius: 32px;
        border: none;
        background-color: #000000bc;
        color: white;
        font-weight: 300;
        font-size: 24px;
        padding: 12px 20px;
        display: flex;
        text-align: center;

        @media (max-width: 580px){
          font-size: 20px;
        }
    }

    input:focus::placeholder {
        color: transparent;
    }
`;