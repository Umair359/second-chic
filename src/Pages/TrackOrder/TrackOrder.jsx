import React from "react";
import "./TrackOrder.css";
const TrackOrder = () => {
  return (
    <div className="track-order">
      <div className="my-container">
        <div className="track-order-items">
          <div>
            <h4>Hava an order?</h4>
            <h4>Want to know where your order is now?</h4>
            <h1>
              TRACK <span>YOUR ORDER</span>
            </h1>
            <div>
              <input type="text" placeholder="Track code" />
              <button>
                <img
                  src="/images/right-arrowIcon.png"
                  alt="right-arrowIcon.png"
                />
              </button>
            </div>
            <h5>
              Enter the track code of your order above and know the progress of
              your product delivery
            </h5>
          </div>
          <div>
            <img src="/images/trackOrder.png" alt="trackOrder.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
