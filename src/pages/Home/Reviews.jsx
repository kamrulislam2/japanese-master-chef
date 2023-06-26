import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { ColorRing } from "react-loader-spinner";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-psi.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  console.log(reviews);

  return (
    <div className="lg:px-40 text-center mt-36">
      <h3 className="text-center font-extrabold text-2xl lg:text-5xl">
        Client Reviews
      </h3>
      <hr className="border-t border-gray-400 w-1/3 lg:w-4/12 mx-auto" />
      <p className="text-lg mt-6 w-full lg:w-1/2 mx-auto text-center mb-16">
        Our experience with the Japanese recipe website has been nothing short
        of extraordinary.
      </p>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="w-10/12 mx-auto space-y-6 border p-10 rounded-3xl bg-base-100 shadow-lg">
              <div>
                <h2 className="text-2xl font-bold mb-2">{review.name}</h2>
                <p className="text-lg">{review.designation}</p>
              </div>
              <p>{review.review}</p>
              <div>
                <h4 className="font-bold text-xl">Rating</h4>
                <p className="text-lg mt-2 inline-flex gap-2 items-center">
                  <Rating
                    placeholderRating={review.rating}
                    readonly
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={
                      <FaStar className="text-warning"></FaStar>
                    }
                    fullSymbol={<FaStar />}
                  />
                  <span>({review.rating})</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
