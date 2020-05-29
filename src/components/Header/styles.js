import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #3c3c3c;
  padding: 30px 0;

  a {
    font-size: 20px;
    margin: 0 20px;
    font-weight: bold;
    color: ${props => props.isActive ? '#00bfff' : '#fff'};
    text-decoration: none;

    &:hover {
      color: #00BFFF;
    }
  }
`;