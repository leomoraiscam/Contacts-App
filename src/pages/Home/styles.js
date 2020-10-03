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
  justify-content: space-between;

  div {
    display: flex;

    button {
      width: 130px;
      height: 100%;
      background: #Dadada;
      color: rgba(0,0,0,.8);
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
  }
`;

export const Main = styled.main`
  width: 80%;
  margin: 0 auto;

  table {
    width: 100%;
    margin: 25px 0;
    font-size: 16px;
    border-collapse: collapse;

    th, td {
      padding: 12px 15px;
    }

    thead {
      tr {
        text-align: left;
      }
    }

    tbody {
      tr {
        height: 65px;
        border-radius: 8px;
        box-shadow: 5px 2px 10px rgba(0,0,0,.15);
      }

      td:first-child {
        display: flex;
        align-items: center;

        span{
         margin-left: 10px;
         color: blue;
        }
      }
    }
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 2px solid #000000;
`
