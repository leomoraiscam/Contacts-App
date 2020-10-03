import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 350px;

    input {
      height: 35px;
      width: 100% ;
      padding: 20px;
      border: 0;
      border-radius: 8px;
      box-shadow: 5px 2px 10px rgba(0,0,0,.15);

      @media(max-width: 425px) {
        width: 95%;
      }
    }

    svg {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 15%;
      right: 65%;
      transform: translateY(-50%);
    }
`;
