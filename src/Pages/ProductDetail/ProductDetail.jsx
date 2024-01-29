import React, { useState } from "react";
import "./ProductDetail.css";
import Slider from "react-slick";
import { IoIosStar } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { MdOutlineDiscount } from "react-icons/md";
import RelatedProductCard from "../../Components/RelatedProductCard/RelatedProductCard.jsx";
import MoreProduct from "../../Components/MoreProduct/MoreProduct.jsx";
import Description from "../../Components/Description/Description.jsx";
import Specification from "../../Components/Specification/Specification.jsx";
import Reviews from "../../Components/Reviews/Reviews.jsx";

const ProductDetail = () => {
  const [currentImage, setCurrentImage] = useState("productDetail1.png");
  const [activeTab, setActiveTab] = useState(1);
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <div className="my-container">
      <div className="product-detail-header">
        <div className="product-detail-left-section">
          <div className="product-detail-image-slider">
            <div
              style={{
                backgroundImage: `url('/images/productDetails/${currentImage}')`,
              }}
              className="product-detail-image"
            >
              {/* <p>FEATURED</p> */}
            </div>
            <div className="product-detail-slider">
              <Slider {...settings}>
                <div>
                  <img
                    onClick={() => setCurrentImage("productDetail1.png")}
                    src="/images/productDetails/productDetail1.png"
                    alt="productShopCard1.png"
                  />
                </div>
                <div>
                  <img
                    onClick={() => setCurrentImage("productDetail2.png")}
                    src="/images/productDetails/productDetail2.png"
                    alt="productDetail.png"
                  />
                </div>
                <div>
                  <img
                    onClick={() => setCurrentImage("productDetail3.png")}
                    src="/images/productDetails/productDetail3.png"
                    alt="productDetail.png"
                  />
                </div>
                <div>
                  <img
                    onClick={() => setCurrentImage("productDetail4.png")}
                    src="/images/productDetails/productDetail4.png"
                    alt="productDetail.png"
                  />
                </div>
                <div>
                  <img
                    onClick={() => setCurrentImage("productDetail5.png")}
                    src="/images/productDetails/productDetail5.png"
                    alt="productDetail.png"
                  />
                </div>
                <div>
                  <img
                    onClick={() => setCurrentImage("productDetail6.png")}
                    src="/images/productDetails/productDetail6.png"
                    alt="productDetail2.png"
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className="product-detail-text">
            <div className="product-detail-text-section0">
              <p>Category: Women Fashion</p>
              <p>Condition: satisfactory</p>
              <p>Type: T-shirt</p>
            </div>
            <h3>Napkins</h3>
            <div className="product-detail-text-section1">
              <div>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <p>0.33/3</p>
              </div>
              <p>Reviews</p>
              <div>
                <CiShare2 />
                <IoMdHeartEmpty />
                <IoIosGitCompare />
              </div>
            </div>
            <h4>$300</h4>
            <div className="product-detail-text-section2">
              <div>
                <p>Color</p>
                <div></div>
              </div>
              <div>
                <p>Size</p>
                <p>Large</p>
              </div>
            </div>
            <div className="product-detail-text-section3">
              <button>
                <BsCart2 />
                <p>Add to Cart</p>
              </button>
              <button>
                <MdOutlineDiscount />
                <p>Make an Offer</p>
              </button>
            </div>
          </div>
        </div>
        <div className="product-detail-right-section">
          <h3>Delivery Options</h3>
          <div className="product-detail-right-section1">
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 2C4.68629 2 2 4.68629 2 8C2 10.1458 3.09211 11.9159 4.45503 13.2906C5.77773 14.6248 7.27659 15.5032 8 15.8837C8.72341 15.5032 10.2223 14.6248 11.545 13.2906C12.9079 11.9159 14 10.1458 14 8C14 4.68629 11.3137 2 8 2ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 10.8706 14.5326 13.1178 12.9653 14.6987C11.397 16.2805 9.64481 17.2838 8.85847 17.6917C8.31691 17.9726 7.68309 17.9726 7.14153 17.6917C6.35519 17.2838 4.60299 16.2805 3.03474 14.6987C1.46741 13.1178 0 10.8706 0 8ZM8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6ZM4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8Z"
                fill="#898989"
              ></path>
            </svg>
            <p>Please select one</p>
          </div>
          <div className="product-detail-right-section2">
            <div>
              <svg
                width="22"
                height="14"
                viewBox="0 0 22 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.3631 12.8182C7.84532 12.8182 8.30778 12.6266 8.64875 12.2857C8.98973 11.9447 9.18129 11.4822 9.18129 11C9.18129 10.5178 8.98973 10.0553 8.64875 9.71436C8.30778 9.37338 7.84532 9.18182 7.3631 9.18182C6.88089 9.18182 6.41843 9.37338 6.07745 9.71436C5.73648 10.0553 5.54492 10.5178 5.54492 11C5.54492 11.4822 5.73648 11.9447 6.07745 12.2857C6.41843 12.6266 6.88089 12.8182 7.3631 12.8182V12.8182Z"
                  stroke="#898989"
                  stroke-width="1.5"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M16.4549 12.8182C16.9371 12.8182 17.3996 12.6266 17.7405 12.2857C18.0815 11.9447 18.2731 11.4822 18.2731 11C18.2731 10.5178 18.0815 10.0553 17.7405 9.71436C17.3996 9.37338 16.9371 9.18182 16.4549 9.18182C15.9727 9.18182 15.5102 9.37338 15.1693 9.71436C14.8283 10.0553 14.6367 10.5178 14.6367 11C14.6367 11.4822 14.8283 11.9447 15.1693 12.2857C15.5102 12.6266 15.9727 12.8182 16.4549 12.8182V12.8182Z"
                  stroke="#898989"
                  stroke-width="1.5"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.22727 11H13.7273V1.54545C13.7273 1.40079 13.6698 1.26205 13.5675 1.15976C13.4652 1.05747 13.3265 1 13.1818 1H1"
                  stroke="#898989"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M5.22745 11H3.36381C3.29218 11 3.22126 10.9859 3.15508 10.9585C3.0889 10.9311 3.02877 10.8909 2.97812 10.8402C2.92747 10.7896 2.88729 10.7295 2.85988 10.6633C2.83247 10.5971 2.81836 10.5262 2.81836 10.4545V6"
                  stroke="#898989"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M1.90918 3.72729H5.54554"
                  stroke="#898989"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M13.7275 3.72729H18.8275C18.933 3.72732 19.0361 3.7579 19.1246 3.81534C19.213 3.87278 19.2828 3.95461 19.3257 4.05093L20.953 7.71275C20.984 7.78228 21.0001 7.85753 21.0003 7.93366V10.4546C21.0003 10.5262 20.9862 10.5971 20.9587 10.6633C20.9313 10.7295 20.8912 10.7896 20.8405 10.8403C20.7899 10.8909 20.7297 10.9311 20.6635 10.9585C20.5974 10.9859 20.5264 11 20.4548 11H18.7275"
                  stroke="#898989"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M13.7275 11H14.6366"
                  stroke="#898989"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
              </svg>
              <p>Flat Rate</p>
            </div>
            <p>$15</p>
          </div>
          <p>7 days</p>
          <div className="product-detail-right-section3">
            <svg
              width="20"
              height="15"
              viewBox="0 0 20 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4286 5.71429C11.4286 6.47205 11.1276 7.19877 10.5917 7.73459C10.0559 8.27041 9.32919 8.57143 8.57143 8.57143C7.81367 8.57143 7.08694 8.27041 6.55112 7.73459C6.01531 7.19877 5.71429 6.47205 5.71429 5.71429C5.71429 4.95652 6.01531 4.2298 6.55112 3.69398C7.08694 3.15816 7.81367 2.85714 8.57143 2.85714C9.32919 2.85714 10.0559 3.15816 10.5917 3.69398C11.1276 4.2298 11.4286 4.95652 11.4286 5.71429ZM10 5.71429C10 5.33541 9.84949 4.97204 9.58158 4.70413C9.31367 4.43622 8.95031 4.28571 8.57143 4.28571C8.19255 4.28571 7.82919 4.43622 7.56128 4.70413C7.29337 4.97204 7.14286 5.33541 7.14286 5.71429C7.14286 6.09317 7.29337 6.45653 7.56128 6.72444C7.82919 6.99235 8.19255 7.14286 8.57143 7.14286C8.95031 7.14286 9.31367 6.99235 9.58158 6.72444C9.84949 6.45653 10 6.09317 10 5.71429ZM0 1.78571C0 0.8 0.8 0 1.78571 0H15.3571C16.3429 0 17.1429 0.8 17.1429 1.78571V9.64286C17.1429 10.6286 16.3429 11.4286 15.3571 11.4286H1.78571C0.8 11.4286 0 10.6286 0 9.64286V1.78571ZM1.78571 1.42857C1.69099 1.42857 1.60015 1.4662 1.53318 1.53318C1.4662 1.60015 1.42857 1.69099 1.42857 1.78571V2.85714H2.14286C2.3323 2.85714 2.51398 2.78189 2.64793 2.64793C2.78189 2.51398 2.85714 2.3323 2.85714 2.14286V1.42857H1.78571ZM1.42857 9.64286C1.42857 9.84 1.58857 10 1.78571 10H2.85714V9.28571C2.85714 9.09627 2.78189 8.91459 2.64793 8.78064C2.51398 8.64668 2.3323 8.57143 2.14286 8.57143H1.42857V9.64286ZM4.28571 9.28571V10H12.8571V9.28571C12.8571 8.71739 13.0829 8.17235 13.4848 7.77049C13.8866 7.36862 14.4317 7.14286 15 7.14286H15.7143V4.28571H15C14.4317 4.28571 13.8866 4.05995 13.4848 3.65809C13.0829 3.25622 12.8571 2.71118 12.8571 2.14286V1.42857H4.28571V2.14286C4.28571 2.71118 4.05995 3.25622 3.65809 3.65809C3.25622 4.05995 2.71118 4.28571 2.14286 4.28571H1.42857V7.14286H2.14286C2.71118 7.14286 3.25622 7.36862 3.65809 7.77049C4.05995 8.17235 4.28571 8.71739 4.28571 9.28571ZM14.2857 10H15.3571C15.4519 10 15.5427 9.96237 15.6097 9.8954C15.6767 9.82842 15.7143 9.73758 15.7143 9.64286V8.57143H15C14.8106 8.57143 14.6289 8.64668 14.4949 8.78064C14.361 8.91459 14.2857 9.09627 14.2857 9.28571V10ZM15.7143 2.85714V1.78571C15.7143 1.69099 15.6767 1.60015 15.6097 1.53318C15.5427 1.4662 15.4519 1.42857 15.3571 1.42857H14.2857V2.14286C14.2857 2.3323 14.361 2.51398 14.4949 2.64793C14.6289 2.78189 14.8106 2.85714 15 2.85714H15.7143ZM5 14.2857C4.54746 14.2859 4.10647 14.1428 3.74026 13.8769C3.37405 13.611 3.10142 13.2361 2.96143 12.8057C3.16 12.84 3.36286 12.8571 3.57143 12.8571H15.3571C16.2096 12.8571 17.0272 12.5185 17.63 11.9157C18.2328 11.3129 18.5714 10.4953 18.5714 9.64286V2.97857C18.9894 3.12635 19.3512 3.40012 19.6071 3.76216C19.863 4.12419 20.0002 4.55668 20 5V9.64286C20 10.2526 19.8799 10.8563 19.6466 11.4196C19.4133 11.9829 19.0713 12.4947 18.6401 12.9259C18.209 13.357 17.6972 13.699 17.1339 13.9323C16.5706 14.1656 15.9669 14.2857 15.3571 14.2857H5Z"
                fill="#898989"
              ></path>
            </svg>
            <p>Cash on Delivery</p>
          </div>
          <h3>Warranty</h3>
          <div className="product-detail-right-section4">
            <svg
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.712 3.78862L9.78784 1.24968C9.28474 1.03406 8.71526 1.03406 8.21216 1.24968L2.28797 3.78862C1.47806 4.13572 0.990735 4.972 1.08804 5.84777L1.73939 11.7099C1.93906 13.5069 2.8263 15.157 4.21529 16.3144L7.71963 19.2347C8.46132 19.8528 9.53868 19.8528 10.2804 19.2347L13.7847 16.3144C15.1737 15.157 16.0609 13.5069 16.2606 11.7099L16.912 5.84777C17.0093 4.972 16.5219 4.13572 15.712 3.78862Z"
                stroke="#898989"
                stroke-width="2"
                stroke-linecap="round"
              ></path>
            </svg>
            <p>
              Warranty: <span>No Warranty</span>
            </p>
          </div>
          <div className="product-detail-right-section4">
            <svg
              width="20"
              height="15"
              viewBox="0 0 20 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.93417 2.43991e-06C4.95604 3.63201e-06 4.97799 4.8241e-06 5 4.8241e-06L15.0658 2.43991e-06C15.9523 -4.73896e-05 16.7161 -9.01893e-05 17.3278 0.0821453C17.9833 0.170277 18.6117 0.369022 19.1213 0.878684C19.631 1.38835 19.8297 2.0167 19.9179 2.67221C20.0001 3.28388 20.0001 4.0477 20 4.9342V10.0658C20.0001 10.9523 20.0001 11.7161 19.9179 12.3278C19.8297 12.9833 19.631 13.6117 19.1213 14.1213C18.6117 14.631 17.9833 14.8297 17.3278 14.9179C16.7161 15.0001 15.9523 15.0001 15.0658 15H4.93417C4.04769 15.0001 3.28387 15.0001 2.67221 14.9179C2.0167 14.8297 1.38835 14.631 0.878684 14.1213C0.369022 13.6117 0.170277 12.9833 0.0821453 12.3278C-9.01893e-05 11.7161 -4.73896e-05 10.9523 2.43991e-06 10.0658L4.8241e-06 5C4.8241e-06 4.97799 3.63201e-06 4.95604 2.43991e-06 4.93417C-4.73896e-05 4.04769 -9.01893e-05 3.28387 0.0821453 2.67221C0.170277 2.0167 0.369022 1.38835 0.878684 0.878684C1.38835 0.369022 2.0167 0.170277 2.67221 0.0821453C3.28387 -9.01893e-05 4.04769 -4.73896e-05 4.93417 2.43991e-06ZM2.93871 2.06431C2.50497 2.12263 2.36902 2.21677 2.2929 2.2929C2.21677 2.36902 2.12263 2.50497 2.06431 2.93871C2.00213 3.40122 2 4.02893 2 5V10C2 10.9711 2.00213 11.5988 2.06431 12.0613C2.12263 12.495 2.21677 12.631 2.2929 12.7071C2.36902 12.7832 2.50497 12.8774 2.93871 12.9357C3.40122 12.9979 4.02893 13 5 13H15C15.9711 13 16.5988 12.9979 17.0613 12.9357C17.495 12.8774 17.631 12.7832 17.7071 12.7071C17.7832 12.631 17.8774 12.495 17.9357 12.0613C17.9979 11.5988 18 10.9711 18 10V5C18 4.02893 17.9979 3.40122 17.9357 2.93871C17.8774 2.50497 17.7832 2.36902 17.7071 2.2929C17.631 2.21677 17.495 2.12263 17.0613 2.06431C16.5988 2.00213 15.9711 2 15 2H5C4.02893 2 3.40122 2.00213 2.93871 2.06431Z"
                fill="#898989"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd "
                d="M4 10C4 9.44772 4.44772 9 5 9H5.01C5.56228 9 6.01 9.44772 6.01 10C6.01 10.5523 5.56228 11 5.01 11H5C4.44772 11 4 10.5523 4 10Z"
                fill="#898989"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 6C1 5.44772 1.44772 5 2 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H2C1.44772 7 1 6.55228 1 6Z"
                fill="#898989"
              ></path>
            </svg>
            <p>Secure Online Payment</p>
          </div>
        </div>
      </div>
      <div className="product-detail-content">
        <div className="product-detail-content-left">
          <div className="product-detail-content-left-section1">
            <p
              className={activeTab === 1 ? "active" : ""}
              onClick={() => setActiveTab(1)}
            >
              Description
            </p>
            <p
              className={activeTab === 2 ? "active" : ""}
              onClick={() => setActiveTab(2)}
            >
              Specification
            </p>
            <p
              className={activeTab === 3 ? "active" : ""}
              onClick={() => setActiveTab(3)}
            >
              Reviews(3)
            </p>
          </div>
          <div className="product-detail-content-left-section2">
            <section>
              {activeTab === 1 ? (
                <Description />
              ) : activeTab === 2 ? (
                <Specification />
              ) : activeTab === 3 ? (
                <Reviews />
              ) : null}
            </section>

            {/* <div>
              <p>See More</p>
              <svg
                class="mt-2"
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 5L4.83564 5.74741L5.5 6.33796L6.16436 5.74741L5.5 5ZM0.335636 1.74741L4.83564 5.74741L6.16436 4.25259L1.66436 0.252591L0.335636 1.74741ZM6.16436 5.74741L10.6644 1.74741L9.33564 0.252591L4.83564 4.25259L6.16436 5.74741Z"
                  fill="#898989"
                ></path>
              </svg>
            </div> */}
          </div>
          <div className="product-detail-content-left-section3">
            <h3>Related Products</h3>
            <div>
              <RelatedProductCard image="relatedProduct1.png" />
              <RelatedProductCard image="relatedProduct2.png" />
              <RelatedProductCard image="relatedProduct3.png" />
            </div>
          </div>
        </div>
        <div className="product-detail-content-right">
          <div className="product-detail-content-right-section1">
            <div>
              <div>
                <p>Sold by</p>
                <h6>Minimal Lifestyle</h6>
              </div>
              <img
                src="/images/relatedProduct4.png"
                alt="relatedProduct4.png"
              />
            </div>
            <div>
              <div>
                <p>Positive Seller Rating</p>
                <h6>59%</h6>
              </div>
              <div>
                <p>Ship on Time</p>
                <h6>100%</h6>
              </div>
              <div>
                <p>Seller Reviews</p>
                <h6>82</h6>
              </div>
            </div>
            <button>
              <p>Go to Store</p>
              <svg
                className="relative ltr:ml-2 rtl:mr-2 neg-transition-scale"
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.08128 0L6.90393 1.05155L8.81279 2.75644H0.832512C0.372728 2.75644 0 3.08934 0 3.5C0 3.91066 0.372728 4.24356 0.832512 4.24356H8.81279L6.90393 5.94845L8.08128 7L12 3.5L8.08128 0Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          <div className="product-detail-content-right-section2">
            <h3>More Products From Them</h3>
            <div>
              <MoreProduct image="moreProduct1.png" />
              <MoreProduct image="moreProduct2.png" />
              <MoreProduct image="moreProduct3.png" />
              <MoreProduct image="moreProduct4.png" />
              <MoreProduct image="moreProduct1.png" />
              <MoreProduct image="moreProduct2.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
