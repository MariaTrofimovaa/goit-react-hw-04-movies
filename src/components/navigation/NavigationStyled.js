import styled from "styled-components";

export const NavigationContainer = styled.nav`
  margin-bottom: 20px;

  .navTitle {
    display: flex;
    list-style: none;
  }

  .navListLink {
    margin-right: 10px;
    padding: 10px;
    border-radius: 3px;
    background-color: #9dc4f8;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    color: white;
  }

  .activeNavLink {
    background-color: #418cee;
    box-shadow: 1px 1px 3px black;
  }
`;
