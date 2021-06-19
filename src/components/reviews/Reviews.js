import React from "react";
import { ReviewsContainer } from "./ReviewsStyled";

const Reviews = ({ reviews }) => {
  return (
    <ReviewsContainer>
      {reviews.length ? (
        <ul className="reviewsList">
          {reviews.map(({ id, author, content }) => (
            <li key={id} className="listItem">
              <h3 className="author">Author: {author}</h3>
              <p className="content">{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews for this movie left yet</p>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
