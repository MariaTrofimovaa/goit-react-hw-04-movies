import styled from "styled-components";

export const MovieDetailsContainer = styled.div`
  padding: 20px 40px;

  .btn {
    border: none;
    padding: 10px;
    border-radius: 3px;
    background-color: #2b20c9;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    color: white;
    box-shadow: 1px 1px 3px black;
    cursor: pointer;
  }

  .navLink {
    border: none;
    padding: 10px;
    border-radius: 3px;
    background-color: #418cee;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    color: white;
    box-shadow: 1px 1px 3px black;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .subTitle {
    margin-bottom: 20px;
  }
  .navLink:not(:last-child) {
    margin-right: 10px;
  }
`;
