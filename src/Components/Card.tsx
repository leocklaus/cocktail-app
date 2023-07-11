import styled from 'styled-components'

interface CardProps {
  name: string,
  img: string,
}

export function Card({ name, img }: CardProps) {

  return (
    <Container>
        
        <h2>{name}</h2>
        <Background $img={img}/>
    </Container>
  )
}

const Container = styled.article`
    width: 327px;
    height: 324px;
    overflow: hidden;
    position: relative;
    border-radius: 12px;
    -webkit-box-shadow: 5px 3px 19px -6px rgba(0, 0, 0, 1);
-moz-box-shadow: 5px 3px 19px -6px rgba(0, 0, 0, 1);
box-shadow: 5px 3px 19px -6px rgba(0, 0, 0, 1);


    h2 {
        position: absolute;
        text-align: center;
        left: 0;
        right: 0;
        bottom: 20px;
        z-index: 10;
        color: white;
        font-weight: bold;
        font-size: 24px;
        pointer-events: none;
        text-shadow: 4px 4px 8px rgba(66, 68, 90, 1);
    }
`;

const Background = styled.div<{ $img?: string; }>`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url(${props =>  props.$img});
    transition: all 200ms ease-out;
    cursor: pointer;
    filter: brightness(0.5);

    &:hover {
        transform: scale(1.1);
        transition: all 300ms ease-in;
    }

`