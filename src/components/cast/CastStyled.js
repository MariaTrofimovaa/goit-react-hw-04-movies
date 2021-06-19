import styled from "styled-components";

export const CastContainer = styled.div`
  padding: 30px 0;

  .castList {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;
    margin: -10px;
  }

  .castListItem {
    width: 120px;
    margin: 10px;
    padding: 10px;
  }

  .castAbout {
    padding: 10px 0;
    font-weight: 700;
  }

  .castCharacter {
    font-weight: normal;
  }
`;
