import React from "react";
import "./BlogCard.css";
import { Link, useNavigate } from "react-router-dom";
const BlogCard = ({ image }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/blogs/123456789")} className="blog-card">
      <div className="blog-card-image">
        <img src={`/images/${image}`} alt={image} />
      </div>
      <div className="blog-card-text">
        <h5>
          By <b>Agatha Williams</b> on <b>29-09-2023 at 4:05 am</b>
        </h5>
        <h3>How to Choose the Best Women's Watch?</h3>
        <h5>
          Choosing the right type of watch for women is little bit tricky.But
          this article, the tips for pushcasing the best...
        </h5>
        <Link>
          Read Now
          <img src="/images/right-arrowIcon2.png" alt="right-arrowIcon2.png" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
