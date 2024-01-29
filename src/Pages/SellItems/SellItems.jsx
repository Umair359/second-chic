import "./SellItems.css";
import { FaCaretDown } from "react-icons/fa";
import { IoMdMan } from "react-icons/io";
import { FaChild } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { useState } from "react";

const SellItem = () => {
  const [isModal, setIsModal] = useState(false);
  const [categoryItem, setCategoryItem] = useState(null);
  const [selectColors, setSelectColors] = useState([]);

  const categoryData = [
    {
      name: "Men",
      icon: <IoMdMan />,
      subcategory: true,
      category: [
        {
          name: "Accessories",
          subcategory: false,
        },
        {
          name: "Cloting",
        },
      ],
    },
    {
      name: "Child",
      icon: <FaChild />,
      subcategory: true,
      category: [
        {
          name: "Accessories",
          subcategory: false,
        },
        {
          name: "Cloting",
        },
      ],
    },
  ];

  const colorsData = [
    {
      name: "Black",
      color: "Black",
    },
    {
      name: "White",
      color: "White",
    },
    {
      name: "Blue",
      color: "Blue",
    },
    {
      name: "Brown",
      color: "Brown",
    },
    {
      name: "Yellow",
      color: "Yellow",
    },
    {
      name: "Green",
      color: "Green",
    },
    {
      name: "Orange",
      color: "Orange",
    },
    {
      name: "Purple",
      color: "Purple",
    },
    {
      name: "Light Blue",
      color: "LightBlue",
    },
    {
      name: "Pink",
      color: "Pink",
    },
    {
      name: "Red",
      color: "Red",
    },
    {
      name: "Grey",
      color: "Grey",
    },
    {
      name: "Gold",
      color: "Gold",
    },
    {
      name: "Sliver",
      color:
        " linear-gradient(-72deg,#dedede,#ffffff 16%,#dedede 21%,#ffffff 24%,#454545 27%,#dedede 36%,#ffffff 45%,#ffffff 60%,#dedede 72%,#ffffff 80%,#dedede 84%,#a1a1a1)",
    },
    {
      name: "Golden",
      color:
        "repeating-linear-gradient(to right, #a2682a 0%, #be8c3c 8%, #be8c3c 18%, #d3b15f 27%, #faf0a0 35%, #ffffc2 40%, #faf0a0 50%, #d3b15f 58%, #be8c3c 67%, #b17b32 77%, #bb8332 83%, #d4a245 88%, #e1b453 93%, #a4692a 100%)",
    },
  ];

  const openModal = () => {
    isModal === false ? setIsModal(true) : setIsModal(false);
  };

  const openChild = (index) => {
    setCategoryItem(index);
  };

  const selectedColors = (index) => {
    if (!selectColors.includes(index) && selectColors.length < 3) {
      setSelectColors(() => [...selectColors, index]);
    }
  };

  console.log(selectColors, 'selectColors')

  return (
    <div className="sell-item-container">
      <h2 className="page-heading">SELL YOUR ITEM</h2>
      <div className="picture-container">
        <p className="picture-info-text">
          Add up 20 photos.
          <span className="picture-info-span-text">See tips.</span>
        </p>
        <div className="picture-box">
          <button className="piture-img-btn">
            <input type="file" className="piture-input" />
            <IoMdAdd />
            <span> ADD PHOTOS</span>
          </button>
        </div>
      </div>
      <div className="form-field-container">
        <h2 className="title">Title</h2>
        <input type="text" className="input" />
      </div>
      <div className="form-field-container">
        <h2 className="title">Category</h2>
        <div className="category-select-field">
          Category Name
          <FaCaretDown onClick={openModal} />
          {isModal && (
            <div className="category-model-container">
              {categoryItem === null ? (
                <h2 className="category-modal-title">Category</h2>
              ) : (
                <h2 className="category-modal-title">
                  <IoArrowBackOutline onClick={() => setCategoryItem(null)} />
                  {categoryData[categoryItem]?.name}
                </h2>
              )}

              <div className="category-gender-container">
                <div className="searchbar">
                  <input
                    type="search"
                    className="search"
                    placeholder="Find Category"
                  />
                  <div className="serach-img-icon-container">
                    <img
                      src="/images/searchIcon.png"
                      alt="searchIcon.png"
                      className="searchIcon"
                    />
                  </div>
                </div>
                {categoryItem === null
                  ? categoryData?.map((val, index) => {
                      return (
                        <div
                          className="form-field-container-men"
                          key={index}
                          onClick={() => openChild(index)}
                        >
                          {val.icon}
                          {val.name}
                        </div>
                      );
                    })
                  : categoryData[categoryItem]?.category.map((val, index) => {
                      return (
                        <div className="form-field-container-men" key={index}>
                          {val.name}
                        </div>
                      );
                    })}
              </div>
            </div>
          )}
        </div>
        <div className="form-field-container">
          <h2 className="title">Soe Sizes</h2>
          <div className="shoeSize-container">
            <div className="shoeSize">10.5</div>
            <div className="shoeSize">10</div>
            <div className="shoeSize">11</div>
            <div className="shoeSize">11.5</div>
            <div className="shoeSize">12</div>
            <div className="shoeSize">10</div>
            <div className="shoeSize">11</div>
            <div className="shoeSize">11.5</div>
            <div className="shoeSize">12</div>
          </div>
        </div>
        <div className="form-field-container">
          <h2 className="title">Select up to 3 colours</h2>
          <div className="colors-container">
            {colorsData.map((val, index) => {
              return (
                <div className="color-container" key={index}>
                  <div
                    className="color"
                    style={{
                      background: val.color,
                      backgroundImage: val.color,
                    }}
                    onClick={() => selectedColors(index)}
                  ></div>
                  <p className="color-name">{val.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="form-field-container">
          <h2 className="title">What is your asking price?</h2>
          <div className="price-container-field">
            <p className="price">
              Price: <span>$ 100</span>
            </p>
          </div>
          <p className="price-bottom-para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur ex
            officiis vitae ut omnis
          </p>
        </div>
        <div className="form-field-container">
          <div className="offer-cintainer">
            <h2 className="title">Allow offers</h2>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        <div className="form-field-container">
          <h2 className="title">Describe your item (optional)</h2>
          <textarea className="describe-textarea"></textarea>
        </div>
        <div className="form-field-container">
          <h2 className="title">Select package size</h2>
          <div className="package-size-container">
            <h3 className="size-heading">Small</h3>
            <div className="size-option-check-container">
              <p>Lorem ipsum dolor sit amet, consectetur adipisici</p>
              <input id="yes" type="radio" name="s" />
            </div>
          </div>
          <div className="package-size-container">
            <h3 className="size-heading">Medium</h3>
            <div className="size-option-check-container">
              <p>Lorem ipsum dolor sit amet, consectetur adipisici</p>
              <input id="yes" type="radio" name="s" />
            </div>
          </div>
          <div className="package-size-container">
            <h3 className="size-heading">Large</h3>
            <div className="size-option-check-container">
              <p>Lorem ipsum dolor sit amet, consectetur adipisici</p>
              <input id="yes" type="radio" name="s" />
            </div>
          </div>
          <div className="package-size-container">
            <button className="listItem-btn">LIST ITEM</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellItem;
