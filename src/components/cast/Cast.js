import React from "react";
import defaultImg from "../../images/defaultImg.jpg";
import { CastContainer } from "./CastStyled";

const Cast = ({ cast }) => {
  return (
    <CastContainer>
      <ul className="castList">
        {cast.map(({ profile_path, name, character, id }) => {
          const avatar = `https://image.tmdb.org/t/p/w300${profile_path}`;
          return (
            <li key={id} className="castListItem">
              <img src={profile_path ? avatar : defaultImg} alt={name} />
              <div className="castAbout">
                <p>{name}</p>
                <p className="castCharacter">Character: {character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </CastContainer>
  );
};

export default Cast;
