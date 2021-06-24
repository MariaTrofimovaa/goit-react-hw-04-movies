import styled from "styled-components";

export const MovieListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 40px;
  list-style: none;

  .listItem {
    margin: 10px;
  }

  .link {
    text-decoration: none;
  }

  .listTitle {
    text-align: center;
    padding: 15px;
    text-transform: uppercase;
    font-weight: 700;
    color: black;
  }
`;
