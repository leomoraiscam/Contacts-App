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

    label {
      width: 130px;
      height: 100%;
      background: #Da5525;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    label:first-child{
      margin: 0;
    }

    & > label{
      margin-left: 10px;
    }
  }
`;
