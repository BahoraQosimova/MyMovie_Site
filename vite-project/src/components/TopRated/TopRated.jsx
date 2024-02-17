import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { privateApi } from "../../service/axios";
import "./topRated.css";

const TopRated = () => {
  const [top, setTop] = useState([]);

  useEffect(() => {
    const getTopData = async () => {
      try {
        const response = await privateApi.get("movie/top_rated");
        setTop(response.data.results);
      } catch (error) {}
    };

    getTopData();
  }, []);

  return (
    <section className="top_rated">
      <div className="rated_container">
        <h1 className="top_rated">Top Rated</h1>
        <div className="top_rated-slider">
          <Swiper
            spaceBetween={100}
            slidesPerView={3}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="mySwiper"
          >
            {top.slice(0, 10).map((item) => (
              <SwiperSlide key={item.id}>
                <div className="rated_slides">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.title}
                  />
                  <h3 className="description">{item.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TopRated;
