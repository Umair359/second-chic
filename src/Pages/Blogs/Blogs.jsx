import React from "react";
import "./Blogs.css";
import BlogsBanner from "../../Components/BlogsBanner/BlogsBanner.jsx";
import BlogCard from "../../Components/BlogCard/BlogCard.jsx";
import PopularPostCard from "../../Components/PopularPostCard/PopularPostCard.jsx";
import { FiSearch } from "react-icons/fi";
import Pagination from "../../Components/Pagination/Pagination.jsx";

const Blogs = () => {
  return (
    <div className="blogs">
      <BlogsBanner />
      <div className="my-container">
        <div className="blog-sections">
          <div className="blog-left-section">
            <BlogCard image="blogCard.png" />
            <BlogCard image="blogCard2.png" />
            <BlogCard image="blogCard3.png" />
            <BlogCard image="blogCard4.png" />
            <BlogCard image="blogCard5.png" />
            <BlogCard image="blogCard6.png" />
            <BlogCard image="blogCard7.png" />
            <BlogCard image="blogCard8.png" />
            <BlogCard image="blogCard9.png" />
            <BlogCard image="blogCard10.png" />

            <div className="blog-pagination">
              <Pagination />
            </div>
          </div>
          <div className="blog-right-section">
            <div className="blog-right-section1">
              <input type="text" placeholder="Search your keyword.." />
              <FiSearch />
            </div>
            <div className="blog-right-section2">
              <h4>Categories</h4>
              <p>Fashion</p>
              <p>Beauty</p>
              <p>Food</p>
              <p>Grocery</p>
              <p>Lifestyle</p>
              <p>Interior Design</p>
              <p>Digital Production </p>
            </div>
            <div className="blog-right-section3">
              <h4>Popular Post</h4>
              <PopularPostCard image="blogCard2.png" />
              <PopularPostCard image="blogCard6.png" />
              <PopularPostCard image="blogCard7.png" />
            </div>
            <div className="blog-right-section4">
              <h4>Archives</h4>
              <img src="/images/arrowDownIcon.png" alt="arrowDownIcon.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
