import React, { useState } from "react";
import "./ProductShop.css";
import ProductShopCard from "../../Components/ProductShopCard/ProductShopCard.jsx";
import Pagination from "../../Components/Pagination/Pagination.jsx";
import NoProduct from "../../Components/NoProduct/NoProduct.jsx";
import { IoIosStar } from "react-icons/io";
import productsData from "../../Data/product.json";
const ProductShop = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [activeColor, setActiveColor] = useState("");
  const [activeType, setActiveType] = useState([]);
  const [activeMaterial, setActiveMaterial] = useState([]);
  const [activeSize, setActiveSize] = useState([]);
  const [activeFeatured, setActiveFeatured] = useState(false);
  const [activeProductStyle, setActiveProductStyle] = useState(false);
  const [activeShow, setActiveShow] = useState(12);
  const [activeSort, setActiveSort] = useState("price-asc");
  const [activeCondition, setActiveCondition] = useState([]);

  const [filterData, setFilterData] = useState(productsData.products);

  const [rating, setRating] = useState(0);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);

  const handleFilteration = (
    category,
    minPrice,
    maxPrice,
    rating,
    color,
    type,
    material,
    size,
    featured,
    sort,
    condition
  ) => {
    setFilterData(productsData.products);

    let filteredData = productsData.products.filter((item) => {
      return (
        (item.category === category || category === "") &&
        item.price >= minPrice &&
        item.price <= maxPrice &&
        item.rating >= rating &&
        (item.color === color || color === "") &&
        (type.includes(item.type) || type.length === 0) &&
        (material.includes(item.material) || material.length === 0) &&
        (size.includes(item.size) || size.length === 0) &&
        (featured ? item.features : true) &&
        (condition.includes(item.condition) || condition.length === 0)
      );
    });
    if (sort === "price-asc") {
      filteredData = filteredData.slice().sort((a, b) => a.price - b.price);
    } else if (sort === "price-dsc") {
      filteredData = filteredData.slice().sort((a, b) => b.price - a.price);
    } else if (sort === "rating-dsc") {
      filteredData = filteredData.slice().sort((a, b) => b.rating - a.rating);
    } else {
      console.error("Invalid sort value:", sort);
    }
    console.log(filterData);
    setFilterData(filteredData);
  };

  const hanldeActivePrice = () => {
    handleFilteration(
      activeCategory,
      minPrice,
      maxPrice,
      rating,
      activeColor,
      activeType,
      activeMaterial,
      activeSize,
      activeFeatured,
      activeSort,
      activeCondition
    );
  };

  const handleActiveCategory = (e) => {
    setActiveCategory(e.target.innerHTML);
    handleFilteration(
      e.target.innerHTML,
      minPrice,
      maxPrice,
      rating,
      activeColor,
      activeType,
      activeMaterial,
      activeSize,
      activeFeatured,
      activeSort,
      activeCondition
    );
  };

  const handleActiveRating = (value) => {
    setRating(value);
    handleFilteration(
      activeCategory,
      minPrice,
      maxPrice,
      value,
      activeColor,
      activeType,
      activeMaterial,
      activeSize,
      activeFeatured,
      activeSort,
      activeCondition
    );
  };

  const handleActiveColor = (value) => {
    setActiveColor(value);
    handleFilteration(
      activeCategory,
      minPrice,
      maxPrice,
      rating,
      value,
      activeType,
      activeMaterial,
      activeSize,
      activeFeatured,
      activeSort,
      activeCondition
    );
  };

  const handleActiveType = (value) => {
    let newValue = activeType;
    newValue = newValue.includes(value)
      ? newValue.filter((item) => item !== value)
      : [...newValue, value];
    setActiveType(newValue);
    handleFilteration(
      activeCategory,
      minPrice,
      maxPrice,
      rating,
      activeColor,
      newValue,
      activeMaterial,
      activeSize,
      activeFeatured,
      activeSort,
      activeCondition
    );
  };

  const handleActiveMaterial = (value) => {
    let newValue = activeMaterial;
    newValue = newValue.includes(value)
      ? newValue.filter((item) => item !== value)
      : [...newValue, value];
    setActiveMaterial(newValue);
    handleFilteration(
      activeCategory,
      minPrice,
      maxPrice,
      rating,
      activeColor,
      activeType,
      newValue,
      activeSize,
      activeFeatured,
      activeSort,
      activeCondition
    );
  };

  const handleActiveSize = (value) => {
    let newValue = activeSize;
    newValue = newValue.includes(value)
      ? newValue.filter((item) => item !== value)
      : [...newValue, value];
    setActiveSize(newValue);
    handleFilteration(
      activeCategory,
      minPrice,
      maxPrice,
      rating,
      activeColor,
      activeType,
      activeMaterial,
      newValue,
      activeFeatured,
      activeSort,
      activeCondition
    );
  };

  const handleActiveFeatured = () => {
    setActiveFeatured((prev) => !prev);
    handleFilteration(
      activeCategory,
      minPrice,
      maxPrice,
      rating,
      activeColor,
      activeType,
      activeMaterial,
      activeSize,
      !activeFeatured,
      activeSort,
      activeCondition
    );
  };

  const handleActiveShow = (e) => {
    setActiveShow(e.target.value);
  };

  const handleActiveSort = (e) => {
    console.log(e.target.value);
    setActiveSort(e.target.value);
    handleFilteration(
      activeCategory,
      minPrice,
      maxPrice,
      rating,
      activeColor,
      activeType,
      activeMaterial,
      activeSize,
      activeFeatured,
      e.target.value,
      activeCondition
    );
  };

  const handleActiveCondition = (value) => {
    let newValue = activeCondition;
    newValue = newValue.includes(value)
      ? newValue.filter((item) => item !== value)
      : [...newValue, value];
    setActiveCondition(newValue);
    handleFilteration(
      activeCategory,
      minPrice,
      maxPrice,
      rating,
      activeColor,
      activeType,
      activeMaterial,
      activeSize,
      activeFeatured,
      activeSort,
      newValue
    );
  };

  const hanldleResetFilter = () => {
    setFilterData(productsData.products);
    setActiveCategory("");
    setActiveColor("");
    setActiveType([]);
    setActiveMaterial([]);
    setActiveSize([]);
    setActiveFeatured(false);
    setRating(0);
    setMinPrice(0);
    setMaxPrice(5000);
  };

  return (
    <div className="my-container">
      <div className="product-shop">
        <div className="product-shop-filter">
          <div className="product-shop-filter-section1">
            <h4>FILTERS</h4>
            <div onClick={hanldleResetFilter}>
              <p>Clear All</p>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                  fill="#898989"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.70711 0.292893C7.31658 -0.0976311 6.68342 -0.0976311 6.29289 0.292893L0.292893 6.29289C-0.0976315 6.68342 -0.0976315 7.31658 0.292893 7.70711C0.683417 8.09763 1.31658 8.09763 1.70711 7.70711L7.70711 1.70711C8.09763 1.31658 8.09763 0.683417 7.70711 0.292893Z"
                  fill="#898989"
                ></path>
              </svg>
            </div>
          </div>
          <h3>Realted Categories</h3>
          <div className="product-shop-filter-section2">
            <h6
              onClick={handleActiveCategory}
              style={
                activeCategory === "Uncategorized" ? { color: "#444444" } : {}
              }
            >
              Uncategorized
            </h6>
            <h6
              onClick={handleActiveCategory}
              style={
                activeCategory === "Electronic Accessories"
                  ? { color: "#444444" }
                  : {}
              }
            >
              Electronic Accessories
            </h6>
            <h6
              onClick={handleActiveCategory}
              style={
                activeCategory === "Women Fashion" ? { color: "#444444" } : {}
              }
            >
              Women Fashion
            </h6>
            <h6
              onClick={handleActiveCategory}
              style={
                activeCategory === "Mobile Accessories"
                  ? { color: "#444444" }
                  : {}
              }
            >
              Mobile Accessories
            </h6>
            <h6
              onClick={handleActiveCategory}
              style={
                activeCategory === "Computer Accessories"
                  ? { color: "#444444" }
                  : {}
              }
            >
              Computer Accessories
            </h6>
          </div>
          <h3>Price Range</h3>
          <div className="product-shop-filter-section3">
            <div>
              <div>
                <p>Min.</p>
                <input
                  onChange={(e) => setMinPrice(e.target.value)}
                  value={minPrice}
                  placeholder="0"
                  type="number"
                />
              </div>
              <div>
                <p>Max.</p>
                <input
                  onChange={(e) => setMaxPrice(e.target.value)}
                  value={maxPrice}
                  type="number"
                  placeholder="850"
                />
              </div>
            </div>

            <button onClick={hanldeActivePrice}>Update</button>
          </div>
          <h3>Featured</h3>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveFeatured()}
              type="checkbox"
              id="id_featured"
              checked={activeFeatured}
            />
            <label for="id_featured">Featured</label>
            <br></br>
          </div>
          <h3>Color</h3>
          <div className="product-shop-filter-section5">
            <div>
              <input
                onClick={() => handleActiveColor("Blue")}
                style={{ backgroundColor: "blue" }}
                type="radio"
                id="id_blue"
                name="fav_language"
                value="Blue"
                checked={activeColor === "Blue"}
              />
                <label for="id_blue">Blue</label>
            </div>
            <div>
              <input
                onClick={() => handleActiveColor("Black")}
                style={{ backgroundColor: "black" }}
                type="radio"
                id="id_black"
                name="fav_language"
                value="HTML"
                checked={activeColor === "Black"}
              />
                <label for="id_black">Black</label>
            </div>
            <div>
              <input
                onClick={() => handleActiveColor("White")}
                style={{ backgroundColor: "white" }}
                type="radio"
                id="id_white"
                name="fav_language"
                value="HTML"
                checked={activeColor === "White"}
              />
                <label for="id_white">White</label>
            </div>
          </div>
          <h3>Type</h3>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveType("T-shirt")}
              type="checkbox"
              id="id_t-shirt"
              checked={activeType.includes("T-shirt")}
            />
            <label for="id_t-shirt">T-shirt</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveType("Trouser")}
              type="checkbox"
              id="id_trouser"
              checked={activeType.includes("Trouser")}
            />
            <label for="id_trouser">Trouser</label>
            <br></br>
          </div>

          <h3>Material</h3>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveMaterial("Cotton")}
              type="checkbox"
              id="id_cotton"
              checked={activeMaterial.includes("Cotton")}
            />
            <label for="id_cotton">Cotton</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveMaterial("Fabric")}
              type="checkbox"
              id="id_fabric"
              checked={activeMaterial.includes("Fabric")}
            />
            <label for="id_fabric">Fabric</label>
            <br></br>
          </div>
          <h3>Condition</h3>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveCondition("good")}
              type="checkbox"
              id="id_good"
              checked={activeCondition.includes("good")}
            />
            <label for="id_good">Good</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveCondition("satisfactory")}
              type="checkbox"
              id="id_satisfactory"
              checked={activeCondition.includes("satisfactory")}
            />
            <label for="id_satisfactory">Satisfactory</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveCondition("excellent")}
              type="checkbox"
              id="id_excellent"
              checked={activeCondition.includes("excellent")}
            />
            <label for="id_excellent">Excellent</label>
            <br></br>
          </div>
          <h3>Size</h3>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveSize("S")}
              type="checkbox"
              id="id_s"
              checked={activeSize.includes("S")}
            />
            <label for="id_s">S</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveSize("M")}
              type="checkbox"
              id="id_m"
              checked={activeSize.includes("M")}
            />
            <label for="id_m">M</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveSize("L")}
              type="checkbox"
              id="id_l"
              checked={activeSize.includes("L")}
            />
            <label for="id_l">L</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveSize("8")}
              type="checkbox"
              id="id_8"
              checked={activeSize.includes("8")}
            />
            <label for="id_8">8</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveSize("7")}
              type="checkbox"
              id="id_7"
              checked={activeSize.includes("7")}
            />
            <label for="id_7">7</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveSize("6")}
              type="checkbox"
              id="id_6"
              checked={activeSize.includes("6")}
            />
            <label for="id_6">6</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveSize("5")}
              type="checkbox"
              id="id_5"
              checked={activeSize.includes("5")}
            />
            <label for="id_5">5</label>
            <br></br>
          </div>
          <h3>Rating</h3>
          <div className="product-shop-filter-section6">
            <div>
              <IoIosStar
                className={rating >= 1 ? "yellowstars" : "graystar"}
                onClick={() => handleActiveRating(1)}
              />
              <IoIosStar
                className={rating >= 2 ? "yellowstars" : "graystar"}
                onClick={() => handleActiveRating(2)}
              />
              <IoIosStar
                className={rating >= 3 ? "yellowstars" : "graystar"}
                onClick={() => handleActiveRating(3)}
              />
              <IoIosStar
                className={rating >= 4 ? "yellowstars" : "graystar"}
                onClick={() => handleActiveRating(4)}
              />
              <IoIosStar
                className={rating >= 5 ? "yellowstars" : "graystar"}
                onClick={() => handleActiveRating(5)}
              />
            </div>
            <p>{rating} Stars</p>
          </div>
        </div>
        <div className="product-shop-items">
          <div className="products-shop-items-header">
            <h2>{filterData.length} products found</h2>
            <div>
              <div>
                <p>Sort Bt:</p>
                <select id="product-sort" onChange={handleActiveSort}>
                  <option value="price-asc">Price Low to High</option>
                  <option value="price-dsc">Price High to Low</option>
                  <option value="rating-dsc">Rating High to Low</option>
                </select>
              </div>
              <div>
                <p>Showing</p>
                <select
                  onChange={handleActiveShow}
                  id="cars"
                  name="carlist"
                  form="carform"
                >
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                  <option value={48}>48</option>
                </select>
              </div>
              <svg
                className={
                  !activeProductStyle
                    ? "product-shop-filter-icon-active"
                    : "product-shop-filter-icon"
                }
                onClick={() => setActiveProductStyle(!activeProductStyle)}
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0H5.42857V5.42857H0V0Z" fill="currentColor"></path>
                <path
                  d="M6.78564 0H12.2142V5.42857H6.78564V0Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M13.5713 0H18.9999V5.42857H13.5713V0Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M13.5713 6.78564H18.9999V12.2142H13.5713V6.78564Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M0 13.5715H5.42857V19.0001H0V13.5715Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6.78564 13.5715H12.2142V19.0001H6.78564V13.5715Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M13.5713 13.5715H18.9999V19.0001H13.5713V13.5715Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M0 6.78564H5.42857V12.2142H0V6.78564Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6.78564 6.78564H12.2142V12.2142H6.78564V6.78564Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                className={
                  activeProductStyle
                    ? "product-shop-filter-icon-active"
                    : "product-shop-filter-icon"
                }
                onClick={() => setActiveProductStyle(!activeProductStyle)}
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.78564 0H23.0714V5.42857H6.78564V0Z"
                  fill="currentColor"
                ></path>
                <path d="M0 0H5.42857V5.42857H0V0Z" fill="currentColor"></path>
                <path
                  d="M0 6.78564H5.42857V12.2142H0V6.78564Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M0 13.5715H5.42857V19.0001H0V13.5715Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6.78564 6.78564H23.0714V12.2142H6.78564V6.78564Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6.78564 13.5715H23.0714V19.0001H6.78564V13.5715Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div
            className={
              !activeProductStyle
                ? "products-shop-items-content"
                : "products-shop-items-content-list"
            }
          >
            {filterData.length !== 0 ? (
              filterData?.map((item, index) => {
                if (index <= activeShow - 1) {
                  return (
                    <ProductShopCard
                      image={item.image}
                      text={item.category}
                      heading={item.title}
                      featured={item.features}
                      rating={item.rating}
                      price={item.price}
                      displayType={activeProductStyle}
                    />
                  );
                }
                return null;
              })
            ) : (
              <NoProduct hanldleResetFilter={hanldleResetFilter} />
            )}
          </div>
          <div className="product-ship-pagination">
            <Pagination quantity={filterData.length} showing={activeShow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShop;
