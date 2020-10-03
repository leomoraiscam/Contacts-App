import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 20px auto;
`;

export const Section = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;

  div {
    display: flex;

    button {
      width: 130px;
      height: 100%;
      background: #Da5525;
      color: #FFF;
      border: 0;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:hover{
        opacity: 0.7;
      }
    }

    button:first-child{
      margin: 0;
    }

    & > button{
      margin-left: 10px;
    }
  }
`;
