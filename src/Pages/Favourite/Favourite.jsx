import React from "react";
import FavouriteCard from "../../Components/FavouriteCard/FavouriteCard.jsx";
import "./Favourite.css";
const Favourite = () => {
  return (
    <div className="favourite">
      <div className="my-container">
        <div className="favourite-item">
          <h2>Favourites</h2>
          <div className="favourite-card-container">
            <FavouriteCard
              image="productItemBG.png"
              price="200"
              featured={false}
              priceoff={false}
            />
            <FavouriteCard
              image="productItemBG1.png"
              price="100"
              featured={true}
              priceoff={true}
            />
            <FavouriteCard
              image="productItemBG.png"
              price="200"
              featured={true}
              priceoff={false}
            />
            <FavouriteCard
              image="productItemBG1.png"
              price="100"
              featured={false}
              priceoff={false}
            />
            <FavouriteCard
              image="productItemBG.png"
              price="200"
              featured={false}
              priceoff={false}
            />
            <FavouriteCard
              image="productItemBG1.png"
              price="100"
              featured={true}
              priceoff={true}
            />
            <FavouriteCard
              image="productItemBG.png"
              price="200"
              featured={true}
              priceoff={false}
            />
            <FavouriteCard
              image="productItemBG1.png"
              price="100"
              featured={false}
              priceoff={false}
            />
            <FavouriteCard
              image="productItemBG.png"
              price="200"
              featured={false}
              priceoff={false}
            />
            <FavouriteCard
              image="productItemBG1.png"
              price="100"
              featured={true}
              priceoff={true}
            />
            <FavouriteCard
              image="productItemBG.png"
              price="200"
              featured={true}
              priceoff={false}
            />
            <FavouriteCard
              image="productItemBG1.png"
              price="100"
              featured={false}
              priceoff={false}
            />
            <FavouriteCard
              image="productItemBG.png"
              price="200"
              featured={false}
              priceoff={false}
            />
            <FavouriteCard
              image="productItemBG1.png"
              price="100"
              featured={true}
              priceoff={true}
            />
            <FavouriteCard
              image="productItemBG.png"
              price="200"
              featured={true}
              priceoff={false}
            />
            <FavouriteCard
              image="productItemBG1.png"
              price="100"
              featured={false}
              priceoff={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
