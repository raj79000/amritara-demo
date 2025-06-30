"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import offstyle from "./offers.module.css";


const NewOfferSlider = () => {
  const offers = [
    {
      id: 1,
      image: "/img/popular-4.jpg",
      title: "Offer Title 1",
      description: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
      id: 2,
      image: "/img/popular-4.jpg",
      title: "Offer Title 2",
      description: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
      id: 3,
      image: "/img/popular-4.jpg",
      title: "Offer Title 3",
      description: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
      id: 4,
      image: "/img/popular-4.jpg",
      title: "Offer Title 4",
      description: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
      id: 5,
      image: "/img/popular-4.jpg",
      title: "Offer Title 5",
      description: "Lorem Ipsum is simply dummy text of the printing",
    },
  ];

  return (
    <section className="section-padding offer-slider-sec bg-lred">
      <div className="container">
        <div className="global-heading-sec text-center">
          <h2 className="global-heading">Offers</h2>
        </div>
        <div className={offstyle.mainhotelbox}>
          <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              500: { slidesPerView: 1 },
              767: { slidesPerView: 2 },
              991: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer.id}>
                <div className={offstyle.offerbox}>
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    height={300}
                    width={500}
                    className={`${offstyle.offerboximg} w-100 `}
                  />
                  <div className={offstyle.offerboxcontent}>
                    <h3 className={offstyle.offerboxcontentheading}>{offer.title}</h3>
                    <p className={offstyle.offerboxcontentpara}>{offer.description}</p>
                    <div className={offstyle.offerboxcontentbtn}>
                      <a href="#" className={`${offstyle.offerknowmore} explore-more-btn`}>
                        Know More
                      </a>
                      <a href="#" className={`${offstyle.offerkbooknow} book-now-btn`}>
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewOfferSlider;
