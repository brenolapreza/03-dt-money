import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["gray-900"]};
  padding: 4rem 0 12rem;
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  height: 5rem;
  border: 0;
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 2rem;
  border-radius: 6px;
  &:hover {
    background-color: ${(props) => props.theme["green-700"]};
    transition: background-color 0.2s;
  }
`;
