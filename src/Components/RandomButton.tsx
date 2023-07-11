import styled from 'styled-components'

interface RandomButtonProps {
  textInput: string,
}

export function RandomButton({ textInput }: RandomButtonProps) {
  return (
    <Container>
        <button>
            {textInput.length == 0? "get surprised!": "Search!"}
        </button>
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


    button {
        width: min(584px, 90vw);
        height: 51px;
        border-radius: 32px;
        color: white;
        font-weight: 300;
        font-size: 24px;
        padding: 12px;
        background: linear-gradient(90deg, rgba(241,50,85,1) 0%, rgba(209,52,209,1) 100%);
        border: none;
        outline: none;
        cursor: pointer;
    }

    button:hover{
        background: linear-gradient(90deg, rgba(255,0,61,1) 0%, rgba(209,52,209,1) 100%);
    }

`;