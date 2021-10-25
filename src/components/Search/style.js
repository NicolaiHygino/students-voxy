import styled from 'styled-components';

export const IconFieldWrapper = styled.div`
  display: flex;
  align-items: center;  
  position: relative;

  & svg {
    position: absolute;
    margin: 0 .5em;
    left: 0;
    color: var(--main-color);
  }
`;

export const Input = styled.input`
  width: 300px;
  border: 1px solid #ccc;
  border-left: 3px solid var(--main-color);
  border-radius: 5px;
  padding: .8em 1em .8em 3em;
`;
