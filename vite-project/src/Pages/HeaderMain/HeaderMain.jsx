import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import { Audio } from "react-loader-spinner";
import { Link } from "react-router-dom";
const HeaderMain = ({ data, genresData }) => {
  return (
    <section className="section_w">
      <div className="main_container">
        <div className="main_slider_box">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            navigation
            className="mySwiper"
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ DynamicBullets: true }}
            loop
          >
            {" "}
            {isLoadingPopular && (
              <SwiperSlide>
                <div className="rated_box">
                  <img
                    className="slide_image"
                    src={image(item?.poster_path, 500)}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            )}
            {data?.results?.slice(0, 10).map((item) => {
              const genresList = item?.genre_ids;
              const filteredList = genresList.map((item) => {
                genresData?.genres?.find((genresID) => genresID.id === item);
              });
              return (
                <SwiperSlide key={item?.id} className="slider_box">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="center"
                  >
                    <Audio
                      height="80"
                      width="80"
                      radius="9"
                      color="green"
                      ariaLabel="loading"
                      wrapperStyle
                      wrapperClass
                    />
                  </div>

                  <img
                    src={
                      "https://image.tmdb.org/t/p/w500${item?.backdrop_path}"
                    }
                    alt=""
                  />
                  <div className="slide_content">
                    <div className="slide_item">
                      <h1>{item?.original_title}</h1>
                      <p>
                        {item?.overview?.length > 50 &&
                          item?.overview.slice(0, 50)}
                      </p>
                    </div>
                    <div className="slide_footer">
                      <Link to='about/${item?.id}-${item?.title.replaceAll(" ","-").toLowerCase()}'>
                        <button className="btn_solid ">Show more...</button>
                      </Link>

                      <div className="release_data">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        {item?.release_date.replaceAll("-", "/")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default HeaderMain;
HeaderMain.propTypes = {
  data: PropTypes.object.isRequired,
  genresData: PropTypes.object.isRequired,
};
