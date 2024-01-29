import React from "react";
import "./ReviewCard.css";
import { IoIosStar } from "react-icons/io";

const ReviewCard = ({ stars }) => {
  return (
    <div className="review-card">
      <div>
        <img src="/images/review.png" alt="review.png" />
      </div>
      <div>
        <h4>Henry William</h4>
        <p>10-12-2023 at 12:05 am</p>
        <div>
          {stars >= 1 ? (
            <IoIosStar className="yellowstars" />
          ) : (
            <IoIosStar className="graystar" />
          )}
          {stars >= 2 ? (
            <IoIosStar className="yellowstars" />
          ) : (
            <IoIosStar className="graystar" />
          )}
          {stars >= 3 ? (
            <IoIosStar className="yellowstars" />
          ) : (
            <IoIosStar className="graystar" />
          )}
          {stars >= 4 ? (
            <IoIosStar className="yellowstars" />
          ) : (
            <IoIosStar className="graystar" />
          )}
          {stars >= 5 ? (
            <IoIosStar className="yellowstars" />
          ) : (
            <IoIosStar className="graystar" />
          )}
        </div>
        <p>
          Aut facilis aut et voluptatem ad. Ipsa impedit ipsa qui. Dolorem sit
          et repellat perspiciatis.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
