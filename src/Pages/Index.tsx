import styled from 'styled-components'
import { MainForm } from '../Components/MainForm';

interface IndexProps {
  
}

export function Index({  }: IndexProps) {
  return (
    <Container>
      <Content>
        <h1>what do you want to drink today?</h1>
        <MainForm />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  background-image: url(/src/assets/drink_bg.png);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

const Content = styled.main`
  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 48px;
    text-align: center;
  }

  display: flex;
  flex-direction: column;
  gap: 48px;
`;