import React from "react";
import BlogsBanner from "../../Components/BlogsBanner/BlogsBanner";
import { FiSearch } from "react-icons/fi";
import PopularPostCard from "../../Components/PopularPostCard/PopularPostCard";
import "./BlogDetail.css";

const BlogDetail = () => {
  return (
    <div className="blogs">
      <BlogsBanner />
      <div className="my-container">
        <div className="blog-sections">
          <div className="blog-detail-section">
            <div className="blog-detail-section1">
              <img src="/images/blogDetail.png" alt="blogDetail.png" />
              <p>
                By <b>Agatha Williams</b> On <b>15-12-2023 at 5:44 am</b>
              </p>
            </div>
            <div className="blog-detail-section2">
              <h2>How to Choose the Best Women’s Watch?</h2>
              <p>
                Choose a watch that suits your style. Women tend to care about
                the look of the watch as wristwatches are the effective addons
                to a lady’s appearance. In this blog, you’ll get tips on how to
                choose the best women’s watch.
              </p>
              <p>
                Watches for women come with different designs and price ranges.
                Besides, women wear watches for different purposes like official
                or casual uses. You should consider your requirements first and
                go for buying the watch that suits you best.
              </p>
              <h6>Tips for Choosing the Ideal Watch for Women</h6>
              <p>
                Take a look at the below tips for choosing the right type of
                ladies’ watches for you.
              </p>
              <ul>
                <li>Choose a Classy Watch Design</li>
                <li>Go for the Right Size</li>
                <li>Focus on the</li>
                <li>Quality of the Watch</li>
                <li>Types of Movement You Prefer</li>
                <li>Consider your Pocket</li>
              </ul>
              <h6>Choose a Classy Watch Design</h6>
              <p>
                n fact, the best alternative is undoubtedly a trendy and
                tastefully made minimalist watch. If you intend to use the watch
                every day and don’t want to spend a lot of money, you can go for
                this type.
              </p>
              <p>
                Check different types of ladies watches designs that are
                available online shop in Bangladesh.
              </p>
              <ul>
                <li>
                  If you prefer classic shapes but want to update your
                  appearance, go for a mixed metal round face watch.
                </li>
                <li>
                  If you want to add some edge to your outfit, go for studs on
                  the strap.
                </li>
                <li>
                  If you’re a fashion risk-taker, match a rich red watch with
                  gold bands.
                </li>
              </ul>
              <h6>Go for the Right Size</h6>
              <p>
                When you are looking for the perfect size of the lady’s watch,
                the first thing you must focus that is proportion.
              </p>
              <ul>
                <li>
                  If you have a smaller wrist, you have to choose a little
                  larger watch that emphasizes the beauty of a thin wrist.
                </li>
                <li>
                  On the other hand, if you have a thicker wrist, try a thinner
                  and smaller watch.
                </li>
              </ul>
              <h6>Focus on the Quality of the Watch</h6>
              <img src="/images/blogDetail2.png" alt="blogDetail2.png" />
              <p>Three elements determine the quality of a watch including</p>
              <ul>
                <li>Glass</li>
                <li>Case and</li>
                <li>Strap</li>
              </ul>
              <p>
                You should go for the leather or metal strap as the plastic
                strap is less classy and elegant.
              </p>
              <h6>Types of Movement You Prefer</h6>
              <p>
                You know there are three different categories based on the
                movement type of the watch.
              </p>
              <ul>
                <li>Automatic</li>
                <li> Mechanical and </li>
                <li>Quartz</li>
              </ul>
              <p>
                If you prefer smooth and linear movement, go for the mechanical
                watches. On the other hand, quartz watches produce sharper
                movement.
              </p>
              <h6>Consider your Pocket</h6>
              <p>
                A lot of watches for women are currently available and different
                types of watches are different in price. You have to consider
                your budget first.
              </p>
              <p>
                The most important thing is that you can get the branded watches
                at an affordable price also. Sometimes, the most popular ladies’
                watches are being offered with lucrative discounts. In this
                regard, you should keep updated on the best online shop.
              </p>
              <h6>Things You Must Consider While Buying a Women’s Watch</h6>
              <p>
                Let’s take a look at the below points to make your purchase more
                accessible and scalable.
              </p>
              <h6>Build</h6>
              <p>
                Choose a watch made of strong material to ensure that it will
                last a long time and will not be easily destroyed.{" "}
                <b>Stainless steel and brass</b> are the most commonly used
                materials in watchmaking.
              </p>
              <p>
                Choose a stainless steel structure because it will not corrode.
                You can choose between steel, leather, synthetic, or canvas
                fabric straps, depending on your preference.
              </p>
              <h6>Display</h6>
              <p>
                Analog and digital are the two most frequent display types. Many
                firms have created hybrid timepieces that combine analog and
                digital functions in one device.
              </p>
              <p>
                While analog watches appear to be more sophisticated, digital
                watches are both stylish and functional.
              </p>
              <h6>Style</h6>
              <p>
                Whatever you purchase, you must prioritize your personal style
                and comfort. When purchasing a watch, always prioritize comfort
                before fashion.
              </p>
            </div>
            <div className="blog-detail-section3">
              <img
                src="/images/blogDetailAuthor.png"
                alt="blogDetailAuthor.png"
              />
              <div>
                <h6>Author</h6>
                <h3>Agatha Williams</h3>
                <h6>Tourist Guide</h6>
              </div>
              <p>
                Michael is a lover, fighter and hater. He loves to travel, has
                an app called ‘The Travaluk’. He has travelled over 30 countries
                so far and dreams to visit every one of them.
              </p>
            </div>
            <div className="blog-detail-section4">
              <h4>Share on :</h4>
              <div>
                <img src="/images/facebook.png" alt="facebook.png" />
                <img src="/images/Twitter.png" alt="facebook.png" />
                <img src="/images/instagram.png" alt="facebook.png" />
              </div>
            </div>
            <div className="blog-detail-section5">
              <div>
                <svg
                  className="mt-1.5 ltr:mr-2 rtl:ml-2 neg-transition-scale absolute w-3 h-2 lg:w-4 lg:h-2.5"
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.70711 0L6.12132 1.41421L3.82843 3.70711H13.4142C13.9665 3.70711 14.4142 4.15482 14.4142 4.70711C14.4142 5.25939 13.9665 5.70711 13.4142 5.70711H3.82843L6.12132 8L4.70711 9.41421L0 4.70711L4.70711 0Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>Previous Post</p>
              </div>
              <div>
                <p>Next Post</p>
                <svg
                  className="ltr:ml-2 rtl:mr-2 neg-transition-scale relative w-3 h-2 lg:w-4 lg:h-2.5"
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.70696 0L8.29274 1.41421L10.5856 3.70711H0.999849C0.447564 3.70711 -0.000150681 4.15482 -0.000150681 4.70711C-0.000150681 5.25939 0.447564 5.70711 0.999849 5.70711H10.5856L8.29274 8L9.70696 9.41421L14.4141 4.70711L9.70696 0Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="blog-detail-section6">
              <h4>Best Senscreen for Oliy & Acn...</h4>
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

export default BlogDetail;
