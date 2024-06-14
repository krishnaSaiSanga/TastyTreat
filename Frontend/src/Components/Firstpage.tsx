import { useEffect } from "react";

const Firstpage = () => {
  useEffect(() => {
    new (window as any).Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      speed: 1500,
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
    <div>
      <div id="firstPage">
        <div id="searchContainer">
          <div id="searchGreeting">
            <h1
              className="display-1"
              style={{
                fontSize: "70px",
                fontWeight: "300",
                marginLeft: "-50px",
                width: "100%",
              }}
            >
              <strong>Hello Dear,</strong>
            </h1>
            <h3 className="display-6">Hungry? You’re in right place!!</h3>
            <h6 className="display-6">We hope you will enjoy our food</h6>
            <h6 className="display-6">
              With{" "}
              <i className="fa-solid fa-heart" style={{ color: "#fb0404" }}></i>
              ... Tasty Treat
            </h6>

            {/* <div id='placeContainer' className=' rounded-pill'>
        <input className='rounded-pill' placeholder='Search your Location' type='text' />
        <button className='rounded-pill'><p>Search</p></button>
        </div> */}
          </div>
        </div>

        {/*----------- SWIPER----------- */}
        <div>
          <div className="swiper mySwiper firstSwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide firstSlide">
                <img
                  src="https://themelooks.net/demo/foodbook/wp-content/uploads/2021/01/02.png"
                  alt=""
                />
              </div>
              <div className="swiper-slide firstSlide">
                <img
                  src="https://themelooks.net/demo/foodbook/wp-content/uploads/2021/01/03.png"
                  alt=""
                />
              </div>
              <div className="swiper-slide firstSlide">
                <img
                  src="https://themelooks.net/demo/foodbook/wp-content/uploads/2021/01/01.png"
                  alt=""
                />
              </div>
            </div>
            <div className="swiper-button-next firstSwiperNext"></div>
            <div className="swiper-button-prev firstSwiperNext"></div>
            {/* <div className="swiper-pagination" id="page-slider"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
