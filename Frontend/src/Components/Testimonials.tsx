import { useEffect } from "react";
import pic4 from "./Images/warren-VVEwJJRRHgk-unsplash.jpg";
import pic3 from "./Images/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg";
import pic2 from "./Images/roman-holoschchuk-KAPRQjlSzCA-unsplash.jpg";
import pic1 from "./Images/peter-john-manlapig-KRBHTbLTMDs-unsplash.jpg";
const Testimonials = () => {
  useEffect(() => {
    new (window as any).Swiper(".secondSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 2000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);
  return (
    <div className="testContainer">
      <h2 className="testimonialHeadding">What Our Customers Say </h2>
      <h5 className="testimonialSubHeadding">
        13 Years of Experience in Food Delivery
      </h5>

      <div>
        <div className="swiper secondSwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial">
                <div className="testimonial-firstpart">
                  <img
                    src={pic1}
                    alt=""
                    style={{
                      height: "60px",
                      width: "60px",
                      backgroundSize: "cover",
                    }}
                  />
                  <div>
                    <h3>Maria Joseph</h3>
                    <p>Marketing Manager</p>
                    <div className="starRating">
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#FFD43B" }}
                      ></i>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#FFD43B" }}
                      ></i>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#FFD43B" }}
                      ></i>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#FFD43B" }}
                      ></i>
                      <i
                        className="fa-regular fa-star"
                        style={{ color: " #e1e1e1" }}
                      ></i>
                    </div>
                  </div>
                </div>
                <p className="testimonial-matter">
                  Tasty Treat delivers culinary delights straight to your door!
                  From savory to sweet, their menu offers a delightful array of
                  options. Fast delivery and impeccable presentation make
                  indulging in gourmet meals a breeze. Highly recommended for
                  those craving convenience without compromising on taste.
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial">
                <div className="testimonial-firstpart">
                  <img
                    src={pic2}
                    alt=""
                    style={{ height: "60px", width: "60px" }}
                  />
                  <div>
                    <h3>Adam Smith</h3>
                    <p>Graphic Designer</p>
                    <div className="starRating">
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#FFD43B" }}
                      ></i>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#FFD43B" }}
                      ></i>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#FFD43B" }}
                      ></i>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#FFD43B" }}
                      ></i>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#FFD43B" }}
                      ></i>
                    </div>
                  </div>
                </div>
                <p className="testimonial-matter">
                  Impressed by Tasty Treat's prompt service and delicious
                  offerings! Their diverse menu caters to various palates,
                  ensuring everyone finds a favorite. Whether it's a cozy night
                  in or hosting guests, their delivery service elevates dining
                  experiences. A reliable choice for satisfying cravings without
                  leaving home
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial">
                <div className="testimonial-firstpart">
                  <img
                    src={pic3}
                    alt=""
                    style={{ height: "60px", width: "60px" }}
                  />
                  <div>
                    <h3>Olivia </h3>
                    <p>Software Developer</p>
                    <div className="starRating">
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#FFD43B" }}
                      ></i>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#FFD43B" }}
                      ></i>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#FFD43B" }}
                      ></i>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#FFD43B" }}
                      ></i>
                      <i
                        className="fa-regular fa-star"
                        style={{ color: " #e1e1e1" }}
                      ></i>
                    </div>
                  </div>
                </div>
                <p className="testimonial-matter">
                  {" "}
                  Tasty Treat has become my go-to for hassle-free dining
                  solutions. Their website is user-friendly, making ordering a
                  breeze. The food arrives promptly, beautifully packaged, and
                  bursting with flavor. With a range of options catering to
                  dietary preferences, it's a convenient choice for discerning
                  foodies.
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial">
                <div className="testimonial-firstpart">
                  <img
                    src={pic4}
                    alt=""
                    style={{ height: "60px", width: "60px" }}
                  />
                  <div>
                    <h3>Sanjay Singh</h3>
                    <p>Photographer</p>
                    <div className="starRating">
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#FFD43B" }}
                      ></i>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#FFD43B" }}
                      ></i>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#FFD43B" }}
                      ></i>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#FFD43B" }}
                      ></i>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#FFD43B" }}
                      ></i>
                    </div>
                  </div>
                </div>
                <p className="testimonial-matter">
                  Exceptional service and mouthwatering dishes define Tasty
                  Treat! Each delivery feels like a culinary adventure, with the
                  quality surpassing expectations. Whether it's their signature
                  dishes or seasonal specials, the attention to detail shines
                  through. For those seeking a taste of luxury at home, Tasty
                  Treat delivers in every sense.
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-button-next secondNextSwiperButton"></div>
          <div className="swiper-button-prev secondPrevSwiperButton"></div>
          <div className="swiper-pagination" id="page-slider"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
