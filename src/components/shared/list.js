import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #c3edf5;
  }
`;